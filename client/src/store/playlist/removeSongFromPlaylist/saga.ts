import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { networkHandlerPut } from "../../../common/networkHandler";
import { REMOVE_SONG_FROM_PLAYLIST } from "./consts";
import { FETCH_PLAYLIST } from "../fetchUserPlaylist/consts";
import { removeSongFromPlaylistStarted } from "./actions";
import { IS_AUTH } from "../../user/isAuth/consts";

export function* removeFromPlaylist({
  payload,
}: ReturnType<typeof removeSongFromPlaylistStarted>) {
  try {
    yield put({
      type: IS_AUTH.started,
    });
    const request = yield call(
      networkHandlerPut,
      `/playlist/remove_from_playlist`,
      payload
    );
    console.log(request);
    if (request.status === 200) {
      yield put({
        type: REMOVE_SONG_FROM_PLAYLIST.success,
      });
      yield put({
        type: FETCH_PLAYLIST.started,
        payload: { playlistID: payload.id },
      });
    }
    if (request.status === 202) {
      yield put({
        type: REMOVE_SONG_FROM_PLAYLIST.failure,
        payload: request.data.message,
      });
    }
  } catch (e) {
    yield put({ type: REMOVE_SONG_FROM_PLAYLIST.failure, payload: e });
  }
}

export function* removeFromPlaylistSaga(): SagaIterator {
  yield takeLatest(getType(removeSongFromPlaylistStarted), removeFromPlaylist);
}

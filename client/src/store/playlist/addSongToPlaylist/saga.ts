import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { networkHandlerPut } from "../../../common/networkHandler";
import { ADD_SONG_TO_PLAYLIST } from "./consts";
import { addSongToPlaylistStarted } from "./actions";
import { IS_AUTH } from "../../user/isAuth/consts";

export function* addToPlaylist({
  payload,
}: ReturnType<typeof addSongToPlaylistStarted>) {
  try {
    yield put({
      type: IS_AUTH.started,
    });
    const request = yield call(
      networkHandlerPut,
      `/playlist/add_to_playlist`,
      payload
    );
    console.log(request);
    if (request.status === 200) {
      yield put({
        type: ADD_SONG_TO_PLAYLIST.success,
      });
    }
    if (request.status === 202) {
      yield put({
        type: ADD_SONG_TO_PLAYLIST.failure,
        payload: request.data.message,
      });
    }
  } catch (e) {
    yield put({ type: ADD_SONG_TO_PLAYLIST.failure, message: e });
  }
}

export function* addToPlaylistSaga(): SagaIterator {
  yield takeLatest(getType(addSongToPlaylistStarted), addToPlaylist);
}

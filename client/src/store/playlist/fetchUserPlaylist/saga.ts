import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerGet } from "../../../common/networkHandler";
import { FETCH_PLAYLIST } from "./consts";
import { fetchPlaylistStarted } from "./actions";
import { getType } from "typesafe-actions";

export type FetchPlaylistProps = {
  type: typeof FETCH_PLAYLIST;
  payload: { playlistID: string };
};

export function* fetchPlaylist({ payload }: FetchPlaylistProps) {
  try {
    const { playlistID } = payload;
    const request = yield call(
      networkHandlerGet,
      `/playlist/get_user_playlist?id=${playlistID}`
    );
    if (request.status === 200)
      yield put({
        type: FETCH_PLAYLIST.success,
        payload: { playlist: request.data.playlist },
      });
  } catch (e) {
    yield put({
      type: FETCH_PLAYLIST.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* fetchPlaylistSaga(): SagaIterator {
  yield takeLatest(getType(fetchPlaylistStarted), fetchPlaylist);
}

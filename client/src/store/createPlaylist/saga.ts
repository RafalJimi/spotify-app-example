import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerPut } from "../../common/networkHandler";
import { CREATE_PLAYLIST } from "./consts";
import { FETCH_USER_PLAYLISTS } from "../fetchUserPlaylists/consts";
import { createPlaylistStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* createPlaylist() {
  try {
    const request = yield call(networkHandlerPut, `/playlist/create`);
    if (request.status === 200) {
      yield put({
        type: CREATE_PLAYLIST.success,
      });
      yield put({
        type: FETCH_USER_PLAYLISTS.started,
      });
    }
  } catch (e) {
    yield put({
      type: CREATE_PLAYLIST.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* createPlaylistSaga(): SagaIterator {
  yield takeLatest(getType(createPlaylistStarted), createPlaylist);
}

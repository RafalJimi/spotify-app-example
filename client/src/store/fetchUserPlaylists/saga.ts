import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerPut } from "../../common/networkHandler";
import { FETCH_USER_PLAYLISTS } from "./consts";
import { fetchUserPlaylistsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* fetchUserPlaylists() {
  try {
    const request = yield call(networkHandlerPut, `/playlist/create`);
    console.log(request);
    /* if (request.status === 200)
      yield put({
        type: FETCH_USER_PLAYLISTS.success,
        payload: { playlists: request.playlists }
      });
    else if (request.status === 203)
      yield put({
        type: FETCH_USER_PLAYLISTS.failure,
        payload: { error: request.data.error },
      }); */
  } catch (e) {
    yield put({
      type: FETCH_USER_PLAYLISTS.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* fetchUserPlaylistsSaga(): SagaIterator {
  yield takeLatest(getType(fetchUserPlaylistsStarted), fetchUserPlaylists);
}

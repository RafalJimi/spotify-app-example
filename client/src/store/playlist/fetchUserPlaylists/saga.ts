import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerGet } from "../../../common/networkHandler";
import { FETCH_USER_PLAYLISTS } from "./consts";
import { fetchUserPlaylistsStarted } from "./actions";
import { getType } from "typesafe-actions";
import { IS_AUTH } from "../../user/isAuth/consts";

export function* fetchUserPlaylists() {
  try {
    yield put({
      type: IS_AUTH.started,
    });
    const request = yield call(
      networkHandlerGet,
      `/playlist/get_user_playlists`
    );
    if (request.status === 200)
      yield put({
        type: FETCH_USER_PLAYLISTS.success,
        payload: { playlists: request.data.playlists },
      });
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

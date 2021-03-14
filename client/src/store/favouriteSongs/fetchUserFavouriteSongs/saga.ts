import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerGet } from "../../../common/networkHandler";
import { FETCH_USER_FAV_SONGS } from "./consts";
import { UPDATE_FAVOURITE_SONGS_ARRAY } from "../favouriteSongsArray/consts";
import { fetchUserFavouriteSongsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* fetchUserFavouriteSongs() {
  try {
    const request = yield call(networkHandlerGet, `/favourite/get_favourite`);
    console.log(request);
    if (request.status === 200) {
      yield put({
        type: UPDATE_FAVOURITE_SONGS_ARRAY,
        payload: request.data.favSongs,
      });
      yield put({
        type: FETCH_USER_FAV_SONGS.success,
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_USER_FAV_SONGS.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* fetchUserFavouriteSongsSaga(): SagaIterator {
  yield takeLatest(
    getType(fetchUserFavouriteSongsStarted),
    fetchUserFavouriteSongs
  );
}

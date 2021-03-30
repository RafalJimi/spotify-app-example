import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { networkHandlerPut } from "../../../common/networkHandler";
import { ADD_SONG_TO_FAVOURITE } from "./consts";
import { UPDATE_FAVOURITE_SONGS_ARRAY } from "../favouriteSongsArray/consts";
import { addSongToFavouriteStarted } from "./actions";
import { IS_AUTH } from "../../user/isAuth/consts";
import { Song } from "../../types/song";

export type addSongToFavouriteStartedProps = {
  type: typeof ADD_SONG_TO_FAVOURITE;
  payload: { song: Song };
};

export function* addToFavourite({
  payload,
}: ReturnType<typeof addSongToFavouriteStarted>) {
  try {
    yield put({
      type: IS_AUTH.started,
    });
    const { song } = payload;
    const request = yield call(
      networkHandlerPut,
      `/favourite/add_to_favourite`,
      song
    );
    if (request.status === 200) {
      yield put({
        type: ADD_SONG_TO_FAVOURITE.success,
      });
      yield put({
        type: UPDATE_FAVOURITE_SONGS_ARRAY,
        payload: request.data.favSongs,
      });
    }
    if (request.status === 202) {
      yield put({
        type: ADD_SONG_TO_FAVOURITE.failure,
        payload: request.data.message,
      });
    }
  } catch (e) {
    yield put({ type: ADD_SONG_TO_FAVOURITE.failure, message: e });
  }
}

export function* addToFavouriteSaga(): SagaIterator {
  yield takeLatest(getType(addSongToFavouriteStarted), addToFavourite);
}

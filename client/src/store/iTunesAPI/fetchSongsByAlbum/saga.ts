import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { getType } from "typesafe-actions";

import { axiosGet } from "../../../common/fetchSongsHandler";

import { FETCH_SONGS_BY_ALBUM } from "./consts";
import { fetchSongsByAlbum } from "./actions";

export type fetchSongsByAlbumStartedProps = {
  type: typeof FETCH_SONGS_BY_ALBUM;
  payload: { term: string; limit: number };
};

export function* songsByAlbum({
  payload,
}: ReturnType<typeof fetchSongsByAlbum>) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      axiosGet,
      `search?entity=musicTrack&attribute=albumTerm&limit=${limit}&term=${term}`
    );
    console.log(request);
    yield put({ type: FETCH_SONGS_BY_ALBUM.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_BY_ALBUM.failure });
  }
}

export function* songsByAlbumSaga(): SagaIterator {
  yield takeLatest(getType(fetchSongsByAlbum), songsByAlbum);
}

import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { getType } from "typesafe-actions";

import { axiosGet } from "../../common/fetchSongsHandler";

import { FETCH_SONGS_BY_ARTIST } from "./consts";
import { fetchSongsByArtist } from "./actions";

export type FetchSongsByArtistProps = {
  type: typeof FETCH_SONGS_BY_ARTIST;
  payload: { term: string; limit: number };
};

export function* songsByArtist({
  payload,
}: ReturnType<typeof fetchSongsByArtist>) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      axiosGet,
      `search?entity=musicTrack&attribute=artistTerm&limit=${limit}&term=${term}`
    );
    yield put({ type: FETCH_SONGS_BY_ARTIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_BY_ARTIST.failure, message: e });
  }
}

export function* songsByArtistSaga(): SagaIterator {
  yield takeLatest(getType(fetchSongsByArtist), songsByArtist);
}

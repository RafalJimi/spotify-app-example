import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { getType } from "typesafe-actions";

import { axiosGet } from "../../common/fetchSongsHandler";

import { FETCH_ALBUMS_BY_ARTIST } from "./consts";
import { fetchAlbumsByArtist } from "./actions";

export type fetchAlbumsByArtistProps = {
  type: typeof FETCH_ALBUMS_BY_ARTIST;
  payload: { term: string; limit: number };
};

export function* albumsByArtist({
  payload,
}: ReturnType<typeof fetchAlbumsByArtist>) {
  try {
    const { term } = payload;
    const request = yield call(
      axiosGet,
      `search?entity=album&attribute=artistTerm&term=${term}`
    );
    yield put({ type: FETCH_ALBUMS_BY_ARTIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_ALBUMS_BY_ARTIST.failure, message: e });
  }
}

export function* albumsByArtistSaga(): SagaIterator {
  yield takeLatest(getType(fetchAlbumsByArtist), albumsByArtist);
}

import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { getType } from "typesafe-actions";

import { axiosGet } from "../../common/fetchSongsHandler";
import { networkHandlerGet } from "../../common/networkHandler";

import { FETCH_SEARCH_DATA } from "./consts";
import { fetchSearchDataStarted } from "./actions";
import { ArtistsResult, AlbumsResult, PlaylistsResult } from "./reducer";

export type fetchSearchDataStartedProps = {
  type: typeof FETCH_SEARCH_DATA;
  payload: { term: string };
};

type PlaylistsData = {
  data: PlaylistsResult;
};

export function* fetchSearchData({
  payload,
}: ReturnType<typeof fetchSearchDataStarted>) {
  try {
    const { term } = payload;
    const [artists, albums, playlists]: ArtistsResult[] &
      AlbumsResult[] &
      PlaylistsData = yield all([
      call(axiosGet, `search?entity=musicArtist&limit=3&term=${term}`),
      call(axiosGet, `search?entity=album&limit=25&term=${term}`),
      call(networkHandlerGet, `/playlist/get_playlists_by_term?term=${term}`),
    ]);
    console.log(artists, albums, playlists);
    yield put({
      type: FETCH_SEARCH_DATA.success,
      payload: { artists: artists, albums: albums, playlists: playlists },
    });
  } catch (e) {
    yield put({ type: FETCH_SEARCH_DATA.failure, message: e });
  }
}

export function* fetchSearchDataSaga(): SagaIterator<any> {
  yield takeLatest(getType(fetchSearchDataStarted), fetchSearchData);
}

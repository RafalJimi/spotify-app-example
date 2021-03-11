import { FETCH_ALBUMS_BY_ARTIST, CLEAR_ALBUMS_BY_ARTIST_STATE } from "./consts";

import { createAction } from "typesafe-actions";

export type Props = {
  term: string;
};

export const fetchAlbumsByArtist = createAction(
  FETCH_ALBUMS_BY_ARTIST.started,
  (term): Props => ({
    term,
  })
)();

export const clearAlbumsByArtistState = createAction(
  CLEAR_ALBUMS_BY_ARTIST_STATE,
  () => ({})
)();

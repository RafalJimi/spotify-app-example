import { FETCH_SONGS_BY_ARTIST, CLEAR_SONGS_BY_ARTIST_STATE } from "./consts";

import { createAction } from "typesafe-actions";

export type Props = {
  term: string;
  limit: number;
};

export const fetchSongsByArtist = createAction(
  FETCH_SONGS_BY_ARTIST.started,
  (term, limit): Props => ({
    term,
    limit,
  })
)();

export const clearSongsByArtistState = createAction(
  CLEAR_SONGS_BY_ARTIST_STATE,
  () => ({})
)();

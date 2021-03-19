import { FETCH_SONGS_BY_ALBUM, CLEAR_SONG_BY_ALBUM_STATE } from "./consts";

import { createAction } from "typesafe-actions";

export type Props = {
  term: string;
  limit: number;
};

export const fetchSongsByAlbum = createAction(
  FETCH_SONGS_BY_ALBUM.started,
  (term, limit): Props => ({
    term,
    limit,
  })
)();

export const clearSongsByAlbumState = createAction(
  CLEAR_SONG_BY_ALBUM_STATE,
  () => ({})
)();

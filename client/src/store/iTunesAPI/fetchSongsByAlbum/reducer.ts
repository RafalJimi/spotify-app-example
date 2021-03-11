import { FETCH_SONGS_BY_ALBUM } from "./consts";

import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";
import { fetchSongsByAlbum } from "./actions";
import { Song } from "../../types/song";

export type SongsByAlbumResults = {
  resultCount: number;
  results: Song[];
};

export type SongsByAlbumState = {
  isLoading: boolean;
  isError: boolean;
  songs: SongsByAlbumResults;
};

export const initialState = {
  isLoading: false,
  isError: false,
  songs: { resultCount: 0, results: [] as Song[] },
};

export const songsByAlbum = (
  state = initialState,
  action: Action
): SongsByAlbumState => {
  switch (action.type) {
    case getType(fetchSongsByAlbum):
      return {
        ...state,
        songs: initialState.songs,
        isLoading: true,
        isError: initialState.isError,
      };
    case FETCH_SONGS_BY_ALBUM.success:
      return {
        ...state,
        songs: action.payload,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
      };
    case FETCH_SONGS_BY_ALBUM.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: true,
      };
    default:
      return { ...state };
  }
};

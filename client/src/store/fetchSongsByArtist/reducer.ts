import { FETCH_SONGS_BY_ARTIST } from "./consts";
import { fetchSongsByArtist, clearSongsByArtistState } from "./actions";

import { Action } from "../types/actions";
import { getType } from "typesafe-actions";
import { Song } from "../types/song";

export type SongsByArtistResults = {
  resultCount: number;
  results: Song[];
};

export type SongsByArtistState = {
  isLoading: boolean;
  isError: boolean;
  songs: SongsByArtistResults;
};

export const initialState = {
  isLoading: false,
  isError: false,
  songs: { resultCount: 0, results: [] as Song[] },
};

export const songsByArtist = (
  state = initialState,
  action: Action
): SongsByArtistState => {
  switch (action.type) {
    case getType(fetchSongsByArtist):
      return {
        ...state,
        songs: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_SONGS_BY_ARTIST.success:
      console.log(action.payload);
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
      };
    case FETCH_SONGS_BY_ARTIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case getType(clearSongsByArtistState):
      return {
        ...state,
        songs: { resultCount: 0, results: [] },
        isLoading: false,
        isError: false,
      };
    default:
      return { ...state };
  }
};

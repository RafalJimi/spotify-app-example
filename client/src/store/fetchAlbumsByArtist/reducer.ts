import { FETCH_ALBUMS_BY_ARTIST } from "./consts";
import { fetchAlbumsByArtist, clearAlbumsByArtistState } from "./actions";

import { Action } from "../types/actions";
import { getType } from "typesafe-actions";
import { Album } from "../types/album";

export type AlbumsByArtistResults = {
  resultCount: number;
  results: Album[];
};

export type AlbumsByArtistState = {
  isLoading: boolean;
  isError: boolean;
  albums: AlbumsByArtistResults;
};

export const initialState = {
  isLoading: false,
  isError: false,
  albums: { resultCount: 0, results: [] as Album[] },
};

export const albumsByArtist = (
  state = initialState,
  action: Action
): AlbumsByArtistState => {
  switch (action.type) {
    case getType(fetchAlbumsByArtist):
      return {
        ...state,
        albums: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_ALBUMS_BY_ARTIST.success:
      console.log(action.payload);
      return {
        ...state,
        albums: action.payload,
        isLoading: false,
      };
    case FETCH_ALBUMS_BY_ARTIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case getType(clearAlbumsByArtistState):
      return {
        ...state,
        albums: { resultCount: 0, results: [] },
        isLoading: false,
        isError: false,
      };
    default:
      return { ...state };
  }
};

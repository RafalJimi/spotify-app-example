import { FETCH_ALBUMS_BY_ARTIST } from "./consts";
import { fetchAlbumsByArtist, clearAlbumsByArtistState } from "./actions";

import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";
import { Album } from "../../types/album";

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
        albums: initialState.albums,
        isLoading: true,
        isError: initialState.isError,
      };
    case FETCH_ALBUMS_BY_ARTIST.success:
      console.log(action.payload);
      return {
        ...state,
        albums: action.payload,
        isLoading: initialState.isLoading,
      };
    case FETCH_ALBUMS_BY_ARTIST.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: true,
      };
    case getType(clearAlbumsByArtistState):
      return {
        ...state,
        albums: initialState.albums,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
      };
    default:
      return { ...state };
  }
};

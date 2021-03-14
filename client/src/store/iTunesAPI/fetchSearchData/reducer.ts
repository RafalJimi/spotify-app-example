import { FETCH_SEARCH_DATA } from "./consts";
import { fetchSearchDataStarted, clearSearchData } from "./actions";
import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";
import { Artist } from "../../types/artist";
import { Album } from "../../types/album";
import { Playlist } from "../../types/playlist";

export type ArtistsResult = {
  resultCount: number;
  results: Artist[];
};

export type AlbumsResult = {
  resultCount: number;
  results: Album[];
};

export type PlaylistsResult = {
  resultCount: number;
  results: Playlist[];
};

export type FetchSearchDataState = {
  isLoading: boolean;
  isError: boolean;
  artists: ArtistsResult;
  albums: AlbumsResult;
  playlists: PlaylistsResult;
};

export const initialState = {
  isLoading: false,
  isError: false,
  artists: { resultCount: 0, results: [] as Artist[] },
  albums: { resultCount: 0, results: [] as Album[] },
  playlists: { resultCount: 0, results: [] as Playlist[] },
};

export const fetchSearchData = (
  state = initialState,
  action: Action
): FetchSearchDataState => {
  switch (action.type) {
    case getType(fetchSearchDataStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
        artists: initialState.artists,
        albums: initialState.albums,
        playlists: initialState.playlists,
      };
    case FETCH_SEARCH_DATA.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
        artists: action.payload.artists,
        albums: action.payload.albums,
        playlists: action.payload.playlists.data,
      };
    case FETCH_SEARCH_DATA.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: true,
      };
    case getType(clearSearchData):
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
        artists: initialState.artists,
        albums: initialState.albums,
        playlists: initialState.playlists,
      };
    default:
      return { ...state };
  }
};

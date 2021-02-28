import { FETCH_USER_PLAYLISTS } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { fetchUserPlaylistsStarted, clearPlaylistsState } from "./actions";
import { Playlist } from "../types/playlist";

export type FetchUserPlaylistsState = {
  isLoading: boolean;
  isError: string;
  playlists: Playlist[];
};

export const initialState = {
  isLoading: false,
  isError: "",
  playlists: [] as Playlist[],
};

export const fetchUserPlaylists = (
  state = initialState,
  action: Action
): FetchUserPlaylistsState => {
  switch (action.type) {
    case getType(fetchUserPlaylistsStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        playlists: [],
      };
    case FETCH_USER_PLAYLISTS.success:
      return {
        ...state,
        isLoading: false,
        playlists: action.payload.playlists,
      };
    case FETCH_USER_PLAYLISTS.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
        playlists: [],
      };
    case getType(clearPlaylistsState):
      return {
        ...state,
        isLoading: false,
        isError: "",
        playlists: [],
      };
    default:
      return { ...state };
  }
};

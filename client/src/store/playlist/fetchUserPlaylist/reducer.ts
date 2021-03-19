import { FETCH_PLAYLIST } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
import { fetchPlaylistStarted, clearPlaylistState } from "./actions";
import { Playlist } from "../../types/playlist";
import { Song } from "../../types/song";

export type FetchPlaylistState = {
  isLoading: boolean;
  isError: string;
  playlistData: Playlist;
};

export const initialState = {
  isLoading: false,
  isError: "",
  playlistData: {
    _id: "",
    user_name: "",
    playlist_name: "",
    songs: [] as Song[],
  },
};

export const fetchPlaylist = (
  state = initialState,
  action: Action
): FetchPlaylistState => {
  switch (action.type) {
    case getType(fetchPlaylistStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
        playlistData: initialState.playlistData,
      };
    case FETCH_PLAYLIST.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
        playlistData: action.payload.playlist,
      };
    case FETCH_PLAYLIST.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    case getType(clearPlaylistState):
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
        playlistData: initialState.playlistData,
      };
    default:
      return { ...state };
  }
};

import { FETCH_PLAYLIST } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { fetchPlaylistStarted } from "./actions";
import { Playlist } from "../types/playlist";
import { Song } from "../types/song";

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
        isError: "",
        playlistData: initialState.playlistData,
      };
    case FETCH_PLAYLIST.success:
      return {
        ...state,
        isLoading: false,
        playlistData: action.payload.playlist,
      };
    case FETCH_PLAYLIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};

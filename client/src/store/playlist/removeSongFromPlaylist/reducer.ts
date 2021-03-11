import { REMOVE_SONG_FROM_PLAYLIST } from "./consts";
import { removeSongFromPlaylistStarted } from "./actions";
import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";

export type RemoveFromPlaylistState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const removeFromPlaylist = (
  state = initialState,
  action: Action
): RemoveFromPlaylistState => {
  switch (action.type) {
    case getType(removeSongFromPlaylistStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case REMOVE_SONG_FROM_PLAYLIST.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
      };
    case REMOVE_SONG_FROM_PLAYLIST.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload,
      };
    default:
      return { ...state };
  }
};

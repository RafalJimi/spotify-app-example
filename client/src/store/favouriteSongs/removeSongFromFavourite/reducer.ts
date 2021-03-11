import { REMOVE_SONG_FROM_FAVOURITE } from "./consts";
import { removeSongFromFavouriteStarted } from "./actions";
import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";

export type RemoveFromFavouriteState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const removeFromFavourite = (
  state = initialState,
  action: Action
): RemoveFromFavouriteState => {
  switch (action.type) {
    case getType(removeSongFromFavouriteStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case REMOVE_SONG_FROM_FAVOURITE.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
      };
    case REMOVE_SONG_FROM_FAVOURITE.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload,
      };
    default:
      return { ...state };
  }
};

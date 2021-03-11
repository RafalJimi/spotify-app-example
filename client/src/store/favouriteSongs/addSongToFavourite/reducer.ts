import { ADD_SONG_TO_FAVOURITE } from "./consts";
import { addSongToFavouriteStarted } from "./actions";
import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";

export type AddToFavouriteState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const addToFavourite = (
  state = initialState,
  action: Action
): AddToFavouriteState => {
  switch (action.type) {
    case getType(addSongToFavouriteStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case ADD_SONG_TO_FAVOURITE.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
      };
    case ADD_SONG_TO_FAVOURITE.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload,
      };
    default:
      return { ...state };
  }
};

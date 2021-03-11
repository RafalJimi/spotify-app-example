import { FETCH_USER_FAV_SONGS } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
import { fetchUserFavouriteSongsStarted } from "./actions";

export type FetchUserFavouriteSongsState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const fetchUserFavouriteSongs = (
  state = initialState,
  action: Action
): FetchUserFavouriteSongsState => {
  switch (action.type) {
    case getType(fetchUserFavouriteSongsStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case FETCH_USER_FAV_SONGS.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
      };
    case FETCH_USER_FAV_SONGS.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};

import { updateFavSongs, clearFavSongsState } from "./actions";
import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";
import { Song } from "../../types/song";

export type FavouriteSongsArrayState = {
  alreadyFetched: boolean;
  favouriteSongs: Song[];
};

export const initialState = {
  alreadyFetched: false,
  favouriteSongs: [] as Song[],
};

export const favouriteSongsArray = (
  state = initialState,
  action: Action
): FavouriteSongsArrayState => {
  switch (action.type) {
    case getType(updateFavSongs):
      return {
        ...state,
        alreadyFetched: true,
        favouriteSongs: action.payload,
      };
    case getType(clearFavSongsState):
      return {
        ...state,
        alreadyFetched: initialState.alreadyFetched,
        favouriteSongs: initialState.favouriteSongs,
      };
    default:
      return { ...state };
  }
};

import { updateFavSongs } from "./actions";
import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";
import { Song } from "../../types/song";

export type FavouriteSongsArrayState = {
  favouriteSongs: Song[];
};

export const initialState = {
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
        favouriteSongs: action.payload,
      };
    default:
      return { ...state };
  }
};

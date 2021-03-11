import { createAction } from "typesafe-actions";
import { FETCH_USER_FAV_SONGS } from "./consts";

export const fetchUserFavouriteSongsStarted = createAction(
  FETCH_USER_FAV_SONGS.started,
  () => ({})
)();

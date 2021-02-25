import { createAction } from "typesafe-actions";
import { FETCH_USER_PLAYLISTS } from "./consts";

export const fetchUserPlaylistsStarted = createAction(
  FETCH_USER_PLAYLISTS.started,
  () => ({})
)();

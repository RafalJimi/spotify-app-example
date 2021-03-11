import { createAction } from "typesafe-actions";
import { FETCH_USER_PLAYLISTS, CLEAR_USER_PLAYLISTS_STATE } from "./consts";

export const fetchUserPlaylistsStarted = createAction(
  FETCH_USER_PLAYLISTS.started,
  () => ({})
)();

export const clearPlaylistsState = createAction(
  CLEAR_USER_PLAYLISTS_STATE,
  () => ({})
)();

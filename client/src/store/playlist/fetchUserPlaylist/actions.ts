import { createAction } from "typesafe-actions";
import { FETCH_PLAYLIST, CLEAR_PLAYLIST_STATE } from "./consts";

export type FetchPlaylistStartedProps = {
  playlistID: string;
};

export const fetchPlaylistStarted = createAction(
  FETCH_PLAYLIST.started,
  (playlistID): FetchPlaylistStartedProps => ({ playlistID })
)();

export const clearPlaylistState = createAction(
  CLEAR_PLAYLIST_STATE,
  () => ({})
)();
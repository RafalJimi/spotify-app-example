import { createAction } from "typesafe-actions";
import { FETCH_PLAYLIST } from "./consts";

export type FetchPlaylistStartedProps = {
  playlistID: string;
};

export const fetchPlaylistStarted = createAction(
  FETCH_PLAYLIST.started,
  (playlistID): FetchPlaylistStartedProps => ({ playlistID })
)();

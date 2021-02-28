import { createAction } from "typesafe-actions";
import { DELETE_PLAYLIST } from "./consts";

type DeletePlaylistProps = {
  playlistID: string;
};

export const deletePlaylistStarted = createAction(
  DELETE_PLAYLIST.started,
  ({ playlistID }: DeletePlaylistProps) => ({
    playlistID,
  })
)();

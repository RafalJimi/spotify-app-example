import { createAction } from "typesafe-actions";
import { CHANGE_PLAYLIST_NAME } from "./consts";

type ChangePlaylistNameProps = {
  playlistID: string;
  newPlaylistName: string;
};

export const changePlaylistNameStarted = createAction(
  CHANGE_PLAYLIST_NAME.started,
  ({ playlistID, newPlaylistName }: ChangePlaylistNameProps) => ({
    playlistID,
    newPlaylistName,
  })
)();

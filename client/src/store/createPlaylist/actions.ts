import { createAction } from "typesafe-actions";
import { CREATE_PLAYLIST } from "./consts";

export const createPlaylistStarted = createAction(
  CREATE_PLAYLIST.started,
  () => ({})
)();

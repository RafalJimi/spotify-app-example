import { REMOVE_SONG_FROM_PLAYLIST } from "./consts";
import { createAction } from "typesafe-actions";
import { Song } from "../../types/song";

export type Props = {
  id: string;
  song: Song;
};

export const removeSongFromPlaylistStarted = createAction(
  REMOVE_SONG_FROM_PLAYLIST.started,
  (id, song): Props => ({
    id,
    song,
  })
)();

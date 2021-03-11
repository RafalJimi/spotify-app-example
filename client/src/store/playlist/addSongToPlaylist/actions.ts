import { ADD_SONG_TO_PLAYLIST } from "./consts";
import { createAction } from "typesafe-actions";
import { Song } from "../../types/song";

export type Props = {
  id: string;
  song: Song;
};

export const addSongToPlaylistStarted = createAction(
  ADD_SONG_TO_PLAYLIST.started,
  (id, song): Props => ({
    id,
    song,
  })
)();

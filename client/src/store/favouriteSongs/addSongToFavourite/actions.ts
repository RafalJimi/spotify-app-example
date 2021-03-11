import { ADD_SONG_TO_FAVOURITE } from "./consts";
import { createAction } from "typesafe-actions";
import { Song } from "../../types/song";

export type Props = {
  song: Song;
};

export const addSongToFavouriteStarted = createAction(
  ADD_SONG_TO_FAVOURITE.started,
  (song): Props => ({
    song,
  })
)();

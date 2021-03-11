import { REMOVE_SONG_FROM_FAVOURITE } from "./consts";
import { createAction } from "typesafe-actions";
import { Song } from "../../types/song";

export type Props = {
  song: Song;
};

export const removeSongFromFavouriteStarted = createAction(
  REMOVE_SONG_FROM_FAVOURITE.started,
  (song): Props => ({
    song,
  })
)();

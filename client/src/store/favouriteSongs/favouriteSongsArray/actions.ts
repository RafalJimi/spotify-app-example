import { UPDATE_FAVOURITE_SONGS_ARRAY } from "./consts";
import { createAction } from "typesafe-actions";
import { Song } from "../../types/song";

export type Props = {
  songs: Song[];
};

export const updateFavSongs = createAction(
  UPDATE_FAVOURITE_SONGS_ARRAY,
  (songs): Props => ({
    songs,
  })
)();

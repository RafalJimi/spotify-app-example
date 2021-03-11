import { AppState } from "../../reducers";
import { Song } from "../../types/song";

export const favouriteSongsArrayRX = (state: AppState): Song[] =>
  state.favouriteSongsArray.favouriteSongs;

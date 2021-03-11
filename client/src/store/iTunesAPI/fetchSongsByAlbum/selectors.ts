import { AppState } from "../../reducers";
import { SongsByAlbumResults } from "./reducer";

export const songsByAlbumResultRX = (state: AppState): SongsByAlbumResults =>
  state.songsByAlbum.songs;

export const songsByAlbumIsLoadingRX = (state: AppState): boolean =>
  state.songsByAlbum.isLoading;

export const songsByAlbumIsErrorRX = (state: AppState): boolean =>
  state.songsByAlbum.isError;

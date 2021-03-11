import { AppState } from "../../reducers";
import { SongsByArtistResults } from "./reducer";

export const songsByArtistResultRX = (state: AppState): SongsByArtistResults =>
  state.songsByArtist.songs;

export const songsByArtistIsLoadingRX = (state: AppState): boolean =>
  state.songsByArtist.isLoading;

export const songsByArtistIsErrorRX = (state: AppState): boolean =>
  state.songsByArtist.isError;

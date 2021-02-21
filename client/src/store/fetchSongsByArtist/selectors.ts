import { AppState } from "../reducers";
import { SongsByArtistResults } from "./reducer";

export const songsByArtistResult = (state: AppState): SongsByArtistResults =>
  state.songsByArtist.songs;

export const songsByArtistIsLoading = (state: AppState): boolean =>
  state.songsByArtist.isLoading;

export const songsByArtistIsError = (state: AppState): boolean =>
  state.songsByArtist.isError;

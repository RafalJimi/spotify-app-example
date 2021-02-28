import { AppState } from "../reducers";
import { Playlist } from "../types/playlist";

export const isLoadingRX = (state: AppState): boolean =>
  state.fetchUserPlaylists.isLoading;

export const isErrorRX = (state: AppState): string =>
  state.fetchUserPlaylists.isError;

export const userPlaylistsRX = (state: AppState): Playlist[] =>
  state.fetchUserPlaylists.playlists;

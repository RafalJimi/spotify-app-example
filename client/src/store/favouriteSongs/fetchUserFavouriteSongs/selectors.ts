import { AppState } from "../../reducers";
import { Playlist } from "../../types/playlist";

export const isLoadingRX = (state: AppState): boolean =>
  state.fetchPlaylist.isLoading;

export const isErrorRX = (state: AppState): string =>
  state.fetchPlaylist.isError;

export const playlistDataRX = (state: AppState): Playlist =>
  state.fetchPlaylist.playlistData;

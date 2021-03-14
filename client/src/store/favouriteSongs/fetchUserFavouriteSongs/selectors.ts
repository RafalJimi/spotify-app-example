import { AppState } from "../../reducers";

export const isLoadingRX = (state: AppState): boolean =>
  state.fetchPlaylist.isLoading;

export const isErrorRX = (state: AppState): string =>
  state.fetchPlaylist.isError;

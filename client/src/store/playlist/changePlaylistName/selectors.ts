import { AppState } from "../../reducers";

export const isErrorRX = (state: AppState): string =>
  state.changePlaylistName.isError;

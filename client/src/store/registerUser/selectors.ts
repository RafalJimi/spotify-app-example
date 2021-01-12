import { AppState } from "../reducers";

export const registerResultIsSuccess = (state: AppState): boolean =>
  state.registerUser.isSuccess;

export const registerResultIsErrorRX = (state: AppState): string =>
  state.registerUser.isError;

export const registerUserIsLoadingRX = (state: AppState): boolean =>
  state.registerUser.isLoading;

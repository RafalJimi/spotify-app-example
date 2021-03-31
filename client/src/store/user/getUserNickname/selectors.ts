import { AppState } from "../../reducers";

export const userNicknameRX = (state: AppState): string =>
  state.userNickname.nickname;

export const userNicknameIsErrorRX = (state: AppState): string =>
  state.userNickname.nickname;

import { createAction } from "typesafe-actions";
import { REGISTER_USER, CLEAR_REGISTER_USER_STATE } from "./consts";

export type RegisterUserProps = {
  user: {
    email: string;
    password: string;
    nickname: string;
    birth_date: string;
    gender: string;
  };
};

export const registerUserStarted = createAction(
  REGISTER_USER.started,
  (user): RegisterUserProps => ({
    user,
  })
)();

export const clearRegisterUserState = createAction(
  CLEAR_REGISTER_USER_STATE,
  () => ({})
)();

import { combineReducers } from "redux";
import { RegisterUserState, registerUser } from "../store/registerUser/reducer";

export type AppState = {
  registerUser: RegisterUserState;
};

export const reducer = combineReducers<AppState>({
  registerUser,
});

export type RootState = ReturnType<typeof reducer>;

import { combineReducers } from "redux";
import { RegisterUserState, registerUser } from "../store/registerUser/reducer";
import { LoginUserState, loginUser } from "./loginUser/reducer";
import { BurgerMenuState, burgerMenu } from "./burgerMenu/reducer";
import { CheckAuthState, checkAuth } from "./isAuth/reducer";
import { LogoutUserState, logoutUser } from "./logoutUser/reducer";

export type AppState = {
  registerUser: RegisterUserState;
  loginUser: LoginUserState;
  burgerMenu: BurgerMenuState;
  checkAuth: CheckAuthState;
  logoutUser: LogoutUserState;
};

export const reducer = combineReducers<AppState>({
  registerUser,
  loginUser,
  burgerMenu,
  checkAuth,
  logoutUser,
});

export type RootState = ReturnType<typeof reducer>;

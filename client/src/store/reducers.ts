import { combineReducers } from "redux";
import { RegisterUserState, registerUser } from "../store/registerUser/reducer";
import { LoginUserState, loginUser } from "./loginUser/reducer";
import { CheckAuthState, checkAuth } from "./isAuth/reducer";
import { LogoutUserState, logoutUser } from "./logoutUser/reducer";
import {
  SongsByArtistState,
  songsByArtist,
} from "./fetchSongsByArtist/reducer";
import {
  AlbumsByArtistState,
  albumsByArtist,
} from "./fetchAlbumsByArtist/reducer";
import { CreatePlaylistState, createPlaylist } from "./createPlaylist/reducer";
import {
  FetchUserPlaylistsState,
  fetchUserPlaylists,
} from "./fetchUserPlaylists/reducer";
import {
  ChangePlaylistNameState,
  changePlaylistName,
} from "./changePlaylistName/reducer";
import { DeletePlaylistState, deletePlaylist } from "./deletePlaylist/reducer";

export type AppState = {
  registerUser: RegisterUserState;
  loginUser: LoginUserState;
  checkAuth: CheckAuthState;
  logoutUser: LogoutUserState;
  songsByArtist: SongsByArtistState;
  albumsByArtist: AlbumsByArtistState;
  createPlaylist: CreatePlaylistState;
  fetchUserPlaylists: FetchUserPlaylistsState;
  changePlaylistName: ChangePlaylistNameState;
  deletePlaylist: DeletePlaylistState;
};

export const reducer = combineReducers<AppState>({
  registerUser,
  loginUser,
  checkAuth,
  logoutUser,
  songsByArtist,
  albumsByArtist,
  createPlaylist,
  fetchUserPlaylists,
  changePlaylistName,
  deletePlaylist,
});

export type RootState = ReturnType<typeof reducer>;

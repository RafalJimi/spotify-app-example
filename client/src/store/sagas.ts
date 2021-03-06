import { fork } from "redux-saga/effects";
import { registerUserSaga } from "../store/registerUser/saga";
import { loginUserSaga } from "./loginUser/saga";
import { checkAuthSaga } from "./isAuth/saga";
import { logoutUserSaga } from "./logoutUser/saga";
import { songsByArtistSaga } from "./fetchSongsByArtist/saga";
import { albumsByArtistSaga } from "./fetchAlbumsByArtist/saga";
import { createPlaylistSaga } from "./createPlaylist/saga";
import { fetchUserPlaylistsSaga } from "./fetchUserPlaylists/saga";
import { changePlaylistNameSaga } from "./changePlaylistName/saga";
import { deletePlaylistSaga } from "./deletePlaylist/saga";
import { fetchPlaylistSaga } from "./fetchUserPlaylist/saga";
import { fetchSearchDataSaga } from "./fetchSearchData/saga";

export function* rootSaga(services = {}) {
  yield fork(registerUserSaga);
  yield fork(loginUserSaga);
  yield fork(checkAuthSaga);
  yield fork(logoutUserSaga);
  yield fork(songsByArtistSaga);
  yield fork(albumsByArtistSaga);
  yield fork(createPlaylistSaga);
  yield fork(fetchUserPlaylistsSaga);
  yield fork(changePlaylistNameSaga);
  yield fork(deletePlaylistSaga);
  yield fork(fetchPlaylistSaga);
  yield fork(fetchSearchDataSaga);
}

import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerPut } from "../../../common/networkHandler";
import { CHANGE_PLAYLIST_NAME } from "./consts";
import { FETCH_USER_PLAYLISTS } from "../fetchUserPlaylists/consts";
import { FETCH_PLAYLIST } from "../fetchUserPlaylist/consts";
import { changePlaylistNameStarted } from "./actions";
import { getType } from "typesafe-actions";
import { IS_AUTH } from "../../user/isAuth/consts";

export type ChangePlaylistNameProps = {
  type: typeof CHANGE_PLAYLIST_NAME;
  payload: { playlistID: string; newPlaylistName: string };
};

export function* changePlaylistName({ payload }: ChangePlaylistNameProps) {
  try {
    yield put({
      type: IS_AUTH.started,
    });
    const request = yield call(
      networkHandlerPut,
      `/playlist/rename_playlist`,
      payload
    );
    if (request.status === 200) {
      yield put({
        type: CHANGE_PLAYLIST_NAME.success,
      });
      yield put({
        type: FETCH_USER_PLAYLISTS.started,
      });
      yield put({
        type: FETCH_PLAYLIST.started,
        payload: { playlistID: payload.playlistID },
      });
    }
  } catch (e) {
    yield put({
      type: CHANGE_PLAYLIST_NAME.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* changePlaylistNameSaga(): SagaIterator {
  yield takeLatest(getType(changePlaylistNameStarted), changePlaylistName);
}

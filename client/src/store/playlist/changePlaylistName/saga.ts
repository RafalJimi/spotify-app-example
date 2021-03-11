import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerPut } from "../../../common/networkHandler";
import { CHANGE_PLAYLIST_NAME } from "./consts";
import { FETCH_USER_PLAYLISTS } from "../fetchUserPlaylists/consts";
import { changePlaylistNameStarted } from "./actions";
import { getType } from "typesafe-actions";

export type ChangePlaylistNameProps = {
  type: typeof CHANGE_PLAYLIST_NAME;
  payload: { playlistID: string; newPlaylistName: string };
};

export function* changePlaylistName({ payload }: ChangePlaylistNameProps) {
  try {
    console.log("change playlist name payload", payload);
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

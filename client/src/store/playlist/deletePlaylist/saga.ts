import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerPut } from "../../../common/networkHandler";
import { DELETE_PLAYLIST } from "./consts";
import { FETCH_USER_PLAYLISTS } from "../fetchUserPlaylists/consts";
import { deletePlaylistStarted } from "./actions";
import { getType } from "typesafe-actions";

export type ChangePlaylistNameProps = {
  type: typeof DELETE_PLAYLIST;
  payload: { playlistID: string };
};

export function* deletePlaylist({ payload }: ChangePlaylistNameProps) {
  try {
    const request = yield call(
      networkHandlerPut,
      `/playlist/delete_playlist`,
      payload
    );
    if (request.status === 200) {
      yield put({
        type: DELETE_PLAYLIST.success,
      });
      yield put({
        type: FETCH_USER_PLAYLISTS.started,
      });
    }
  } catch (e) {
    yield put({
      type: DELETE_PLAYLIST.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* deletePlaylistSaga(): SagaIterator {
  yield takeLatest(getType(deletePlaylistStarted), deletePlaylist);
}

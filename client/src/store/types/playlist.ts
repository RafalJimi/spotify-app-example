import { Song } from "./song";

export type Playlist = {
  _id: string;
  user_name: string;
  playlist_name: string;
  songs: never[] | Song[];
};

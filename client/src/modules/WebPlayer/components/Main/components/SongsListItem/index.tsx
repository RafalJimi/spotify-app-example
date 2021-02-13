import React from "react";
import { SongItemLayout } from "./layout";

export type SongData = {
  artistName: string;
  albumName: string;
  trackName: string;
  imgUrl: string;
  trackLenght: string;
};

type SongsListItem = {
  id: number;
  songData: SongData;
};

export const SongsListItem = ({ id, songData }: SongsListItem) => {
  return <SongItemLayout id={id} songData={songData} />;
};

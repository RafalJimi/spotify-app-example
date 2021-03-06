import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Playlist } from "../../../../../../store/types/playlist";
import { PlaylistItemLayout } from "./layout";

type PlaylistItemProps = {
  id: number;
  playlistItemData: Playlist;
};

export const PlaylistItem = ({ id, playlistItemData }: PlaylistItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push(`/player/playlist/${playlistItemData._id}`);
  }, []);

  const handleMenuItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => {
    history.push(data.path);
  };

  return (
    <PlaylistItemLayout
      handleOnClick={handleOnClick}
      id={id}
      playlistItemData={playlistItemData}
      handleMenuItem={handleMenuItem}
    />
  );
};

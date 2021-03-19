import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
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

  const { setPlayTheseSongs } = useReactPlayerContext();

  const handlePlayButton = useCallback((e: React.MouseEvent) => {
    setPlayTheseSongs(true);
    history.push(`/player/playlist/${playlistItemData._id}`);
  }, []);
  
  return (
    <PlaylistItemLayout
      handleOnClick={handleOnClick}
      id={id}
      playlistItemData={playlistItemData}
      handleMenuItem={handleMenuItem}
      handlePlayButton={handlePlayButton}
    />
  );
};

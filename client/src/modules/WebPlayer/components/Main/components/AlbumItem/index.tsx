import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
import { Album } from "../../../../../../store/types/album";
import { AlbumItemLayout } from "./layout";

type AlbumItemProps = {
  id: number;
  albumItemData: Album;
};

export const AlbumItem = ({ id, albumItemData }: AlbumItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push(
      `/player/album/${albumItemData.collectionName}?limit=${albumItemData.trackCount}&artist=${albumItemData.artistName}`
    );
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
    history.push(
      `/player/album/${albumItemData.collectionName}?limit=${albumItemData.trackCount}&artist=${albumItemData.artistName}`
    );
  }, []);
  
  return (
    <AlbumItemLayout
      handleOnClick={handleOnClick}
      id={id}
      albumItemData={albumItemData}
      handleMenuItem={handleMenuItem}
      handlePlayButton={handlePlayButton}
    />
  );
};

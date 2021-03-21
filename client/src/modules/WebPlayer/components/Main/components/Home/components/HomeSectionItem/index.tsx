import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { ArrayItem } from "../../consts";
import { useReactPlayerContext } from "../../../../../../../../contexts/ReactPlayer.context";
import { HomeSectionItemLayout } from "./layout";

type HomeSectionItemProps = {
  id: number;
  itemData: ArrayItem;
};

export const HomeSectionItem = ({ id, itemData }: HomeSectionItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push(
      `/player/album/${itemData.albumName}?limit=${itemData.limit}&artist=${itemData.artistName}`
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
      `/player/album/${itemData.albumName}?limit=${itemData.limit}&artist=${itemData.artistName}`
    );
  }, []);

  return (
    <HomeSectionItemLayout
      handleOnClick={handleOnClick}
      id={id}
      itemData={itemData}
      handleMenuItem={handleMenuItem}
      handlePlayButton={handlePlayButton}
    />
  );
};

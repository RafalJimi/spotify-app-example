import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Artist } from "../../../../../../store/types/artist";
import { ArtistItemLayout } from "./layout";

type ArtistItemProps = {
  id: number;
  artistItemData: Artist;
};

export const ArtistItem = ({ id, artistItemData }: ArtistItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push(`/player/artist/${artistItemData.artistName}`);
  }, []);

  const handleMenuItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => {
    history.push(data.path);
  };

  return (
    <ArtistItemLayout
      handleOnClick={handleOnClick}
      id={id}
      artistItemData={artistItemData}
      handleMenuItem={handleMenuItem}
    />
  );
};

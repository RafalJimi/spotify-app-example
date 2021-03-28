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

  return (
    <ArtistItemLayout
      handleOnClick={handleOnClick}
      id={id}
      artistItemData={artistItemData}
    />
  );
};

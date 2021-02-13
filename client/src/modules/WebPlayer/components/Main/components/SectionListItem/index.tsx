import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { ListItemLayout } from "./layout";

type ListItemProps = {
  borderRadius?: number;
  category: string;
  artist: string;
  album: string;
  imgURL: string;
  playlist?: string;
};

export const ListItem = ({
  borderRadius,
  category,
  artist,
  album,
  imgURL,
  playlist,
}: ListItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (category: string) => (e: React.MouseEvent) => {
      if (e.button === 0)
        if (category === "artist")
          history.push(`/player/artist/${artist.replace(/ /g, "_")}`);
        else if (category === "album")
          history.push(`/player/album/${album.replace(/ /g, "_")}`);
        else if (category === "playlist")
          history.push(
            `/player/playlist/${
              playlist ? playlist.replace(/ /g, "_") : "null"
            }`
          );
    },
    []
  );

  const handleMenuItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => {
    history.push(data.path);
  };

  return (
    <ListItemLayout
      borderRadius={borderRadius}
      handleOnClick={handleOnClick}
      category={category}
      artist={artist}
      album={album}
      imgURL={imgURL}
      handleMenuItem={handleMenuItem}
    />
  );
};

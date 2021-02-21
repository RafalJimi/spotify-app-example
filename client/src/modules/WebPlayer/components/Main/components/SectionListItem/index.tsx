import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Album } from "../../../../../../store/types/album";
import { ListItemLayout } from "./layout";

type ListItemProps = {
  borderRadius?: number;
  id: number;
  category: string;
  listItemData: Album;
};

export const ListItem = ({ borderRadius, id, category, listItemData }: ListItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (category: string) => (e: React.MouseEvent) => {
      if (e.button === 0)
        if (category === "artist")
          history.push(
            
            `/player/artist/${listItemData.artistName.replace(/ /g, "_")}`
          
          );
        else if (category === "album")
          history.push(
            
            `/player/album/${listItemData.collectionName.replace(/ /g, "_")}`
          
          );
        else if (category === "playlist")
          history.push(
            `/player/playlist/${
              listItemData.collectionName
                ? listItemData.collectionName.replace(/ /g, "_")
                : "null"
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
      category={category}
      handleOnClick={handleOnClick}
      listItemData={listItemData}
      handleMenuItem={handleMenuItem}
    />
  );
};

import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Album } from "../../../../../../store/types/album";
import {
  ContextContainer,
  ListItemContainer,
  ImageContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "./layout.styled";

type ListItemLayoutProps = {
  borderRadius?: number;
  category: string;
  handleOnClick: (category: string) => (e: React.MouseEvent) => void;
  listItemData: Album;
  handleMenuItem: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => void;
};

export const ListItemLayout = ({
  borderRadius,
  category,
  handleOnClick,
  listItemData,
  handleMenuItem,
}: ListItemLayoutProps) => {
  const useContextMenu = (category: string) => {
    if (category === "artist" || category === "album")
      return (
        <React.Fragment>
          <ContextMenuTrigger id={"ShowSectionItemMenu"}>
            <ListItemContainer
              className="listItem"
              onClick={handleOnClick(category)}
            >
              <ImageContainer
                imageUrl={listItemData.artworkUrl100}
                style={{
                  borderRadius: borderRadius ? `${borderRadius}px` : "2px",
                }}
              >
                <div>
                  <i className="fas fa-play"></i>
                </div>
              </ImageContainer>
              <ListItemTitle>{listItemData.artistName}</ListItemTitle>
              <ListItemSubtitle>{listItemData.collectionName}</ListItemSubtitle>
            </ListItemContainer>
          </ContextMenuTrigger>
          <ContextMenu id="ShowSectionItemMenu">
            <MenuItem
              onClick={handleMenuItem}
              data={{
                path: `/player/artist/${listItemData.artistName.replace(
                  / /g,
                  "_"
                )}`,
              }}
            >
              Go to artist
            </MenuItem>
            <MenuItem
              onClick={handleMenuItem}
              data={{
                path: `/player/album/${listItemData.collectionName.replace(
                  / /g,
                  "_"
                )}`,
              }}
            >
              Go to album
            </MenuItem>
          </ContextMenu>
        </React.Fragment>
      );
    else
      return (
        <React.Fragment>
          <ContextMenuTrigger id={"HideSectionItemMenu"}>
            <ListItemContainer
              className="listItem"
              onClick={handleOnClick(category)}
            >
              <ImageContainer
                style={{
                  borderRadius: borderRadius ? `${borderRadius}px` : "2px",
                }}
              >
                <img src={listItemData.artworkUrl100} alt={`${listItemData
                  .artistName} - ${listItemData.collectionName}`} />
                <div>
                  <i className="fas fa-play"></i>
                </div>
              </ImageContainer>
              <ListItemTitle>{listItemData.artistName}</ListItemTitle>
              <ListItemSubtitle>{listItemData.collectionName}</ListItemSubtitle>
            </ListItemContainer>
          </ContextMenuTrigger>
        </React.Fragment>
      );
  };

  return <ContextContainer>{useContextMenu(category)}</ContextContainer>;
};

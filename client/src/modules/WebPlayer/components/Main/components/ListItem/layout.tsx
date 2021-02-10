import React, { ReactNode } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {
  ContextContainer,
  ListItemContainer,
  ImageContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "./layout.styled";

type ListItemLayoutProps = {
  borderRadius?: number;
  handleOnClick: (category: string) => (e: React.MouseEvent) => void;
  category: string;
  artist: string;
  album: string;
  imgURL: string;
  handleMenuItem: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => void;
};

export const ListItemLayout = ({
  borderRadius,
  handleOnClick,
  category,
  artist,
  album,
  imgURL,
  handleMenuItem,
}: ListItemLayoutProps) => {
  const useContextMenu = (category: string) => {
    if (category === "artist" || category === "album")
      return (
        <React.Fragment>
          <ContextMenuTrigger id={"showMenu"}>
            <ListItemContainer
              className="listItem"
              onClick={handleOnClick(category)}
            >
              <ImageContainer
                style={{
                  borderRadius: borderRadius ? `${borderRadius}px` : "2px",
                }}
              >
                <img src={imgURL} alt={`${artist} - ${album}`} />
                <div>
                  <i className="fas fa-play"></i>
                </div>
              </ImageContainer>
              <ListItemTitle>{artist}</ListItemTitle>
              <ListItemSubtitle>{album}</ListItemSubtitle>
            </ListItemContainer>
          </ContextMenuTrigger>

          <ContextMenu id="showMenu">
            <MenuItem
              onClick={handleMenuItem}
              data={{ path: `/player/artist/${artist.replace(/ /g, "_")}` }}
            >
              Go to artist
            </MenuItem>
            <MenuItem
              onClick={handleMenuItem}
              data={{ path: `/player/album/${album.replace(/ /g, "_")}` }}
            >
              Go to album
            </MenuItem>
          </ContextMenu>
        </React.Fragment>
      );
    else
      return (
        <React.Fragment>
          <ContextMenuTrigger id={"hideMenu"}>
            <ListItemContainer
              className="listItem"
              onClick={handleOnClick(category)}
            >
              <ImageContainer
                style={{
                  borderRadius: borderRadius ? `${borderRadius}px` : "2px",
                }}
              >
                <img src={imgURL} alt={`${artist} - ${album}`} />
                <div>
                  <i className="fas fa-play"></i>
                </div>
              </ImageContainer>
              <ListItemTitle>{artist}</ListItemTitle>
              <ListItemSubtitle>{album}</ListItemSubtitle>
            </ListItemContainer>
          </ContextMenuTrigger>
        </React.Fragment>
      );
  };

  return <ContextContainer>{useContextMenu(category)}</ContextContainer>;
};

import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { ArrayItem } from "../../consts";
import {
  ContextContainer,
  Container,
  ImageContainer,
  Title,
  Subtitle,
} from "./layout.styled";

type HomeSectionItemLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  id: number;
  itemData: ArrayItem;
  handleMenuItem: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => void;
  handlePlayButton: (e: React.MouseEvent) => void;
};

export const HomeSectionItemLayout = ({
  handleOnClick,
  id,
  itemData,
  handleMenuItem,
  handlePlayButton,
}: HomeSectionItemLayoutProps) => (
  <ContextContainer>
    <ContextMenuTrigger id={`HomeSectionItemMenu-${id}`}>
      <Container className="listItem" onClick={handleOnClick}>
        <ImageContainer imageUrl={itemData.imgUrl}>
          <div onClick={handlePlayButton}>
            <i className="fas fa-play"></i>
          </div>
        </ImageContainer>
        <Title>{itemData.artistName}</Title>
        <Subtitle>{itemData.albumName}</Subtitle>
      </Container>
    </ContextMenuTrigger>
    <ContextMenu id={`HomeSectionItemMenu-${id}`}>
      <MenuItem
        onClick={handleMenuItem}
        data={{
          path: `/player/artist/${itemData.artistName}`,
        }}
      >
        Go to artist
      </MenuItem>
      <MenuItem
        onClick={handleMenuItem}
        data={{
          path: `/player/album/${itemData.artistName}?limit=${itemData.limit}&artist=${itemData.artistName}`,
        }}
      >
        Go to album
      </MenuItem>
    </ContextMenu>
  </ContextContainer>
);

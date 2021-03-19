import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Album } from "../../../../../../store/types/album";
import {
  ContextContainer,
  Container,
  ImageContainer,
  Title,
  Subtitle,
} from "./layout.styled";

type AlbumItemLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  id: number;
  albumItemData: Album;
  handleMenuItem: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => void;
  handlePlayButton: (e: React.MouseEvent) => void;
};

export const AlbumItemLayout = ({
  handleOnClick,
  id,
  albumItemData,
  handleMenuItem,
  handlePlayButton,
}: AlbumItemLayoutProps) => (
  <ContextContainer>
    <ContextMenuTrigger id={`AlbumItemMenu-${id}`}>
      <Container className="listItem" onClick={handleOnClick}>
        <ImageContainer imageUrl={albumItemData.artworkUrl100}>
          <div onClick={handlePlayButton}>
            <i className="fas fa-play"></i>
          </div>
        </ImageContainer>
        <Title>{albumItemData.artistName}</Title>
        <Subtitle>{albumItemData.collectionName}</Subtitle>
      </Container>
    </ContextMenuTrigger>
    <ContextMenu id={`AlbumItemMenu-${id}`}>
      <MenuItem
        onClick={handleMenuItem}
        data={{
          path: `/player/artist/${albumItemData.artistName}`,
        }}
      >
        Go to artist
      </MenuItem>
      <MenuItem
        onClick={handleMenuItem}
        data={{
          path: `/player/album/${albumItemData.collectionName}?limit=${albumItemData.trackCount}&artist=${albumItemData.artistName}`,
        }}
      >
        Go to album
      </MenuItem>
    </ContextMenu>
  </ContextContainer>
);

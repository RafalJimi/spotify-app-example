import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Playlist } from "../../../../../../store/types/playlist";
import {
  ContextContainer,
  Container,
  ImageContainer,
  Title,
} from "./layout.styled";

type PlaylistItemLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  id: number;
  playlistItemData: Playlist;
  handleMenuItem: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { path: string }
  ) => void;
  handlePlayButton: (e: React.MouseEvent) => void;
};

export const PlaylistItemLayout = ({
  handleOnClick,
  id,
  playlistItemData,
  handleMenuItem,
  handlePlayButton,
}: PlaylistItemLayoutProps) => (
  <ContextContainer>
    <ContextMenuTrigger id={`PlaylistItemMenu-${id}`}>
      <Container className="listItem" onClick={handleOnClick}>
        <ImageContainer
          imageUrl={
            playlistItemData.songs.length > 0
              ? playlistItemData.songs[0].artworkUrl100
              : undefined
          }
        >
          <div onClick={handlePlayButton}>
            <i className="fas fa-play"></i>
          </div>
        </ImageContainer>
        <Title>{playlistItemData.playlist_name}</Title>
      </Container>
    </ContextMenuTrigger>
    <ContextMenu id={`PlaylistItemMenu-${id}`}>
      <MenuItem
        onClick={handleMenuItem}
        data={{
          path: `/player/playlist/${playlistItemData._id}`,
        }}
      >
        Go to playlist
      </MenuItem>
    </ContextMenu>
  </ContextContainer>
);

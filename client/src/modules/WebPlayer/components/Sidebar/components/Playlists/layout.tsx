import React from "react";
import {
  PlaylistsContainer,
  Title,
  ButtonsContainer,
  CreatePlaylist,
  FavsSongsButton,
  Border,
  Playlists,
} from "./layout.styled";

type PlaylistsLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const PlaylistsLayout = ({ handleOnClick }: PlaylistsLayoutProps) => (
  <PlaylistsContainer>
    <Title>PLAYLISTS</Title>
    <ButtonsContainer>
      <CreatePlaylist>
        <span>
          <i className="fas fa-plus"></i>
        </span>
        Create playlist
      </CreatePlaylist>
      <FavsSongsButton>
        <span>
          <i className="fas fa-heart"></i>
        </span>
        Favourites Songs
      </FavsSongsButton>
    </ButtonsContainer>
    <Border />
    <Playlists>
      <div>Easy</div>
      <div>Chill</div>
    </Playlists>
  </PlaylistsContainer>
);

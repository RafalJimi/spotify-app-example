import React from "react";
import { Playlist } from "../../../../../../store/types/playlist";
import {
  PlaylistsContainer,
  Title,
  ButtonsContainer,
  CreatePlaylist,
  FavsSongsButton,
  Border,
  Playlists,
} from "./layout.styled";
import { PlaylistItem } from "./components/PlaylistItem";

type PlaylistsLayoutProps = {
  handleCreatePlaylist: (e: React.MouseEvent) => void;
  userPlaylists: Playlist[];
  handleRedirect: (path: string) => (e: React.MouseEvent) => void;
};

export const PlaylistsLayout = ({
  handleCreatePlaylist,
  userPlaylists,
  handleRedirect,
}: PlaylistsLayoutProps) => (
  <PlaylistsContainer>
    <Title>PLAYLISTS</Title>
    <ButtonsContainer>
      <CreatePlaylist onClick={handleCreatePlaylist}>
        <span>
          <i className="fas fa-plus"></i>
        </span>
        Create playlist
      </CreatePlaylist>
      <FavsSongsButton onClick={handleRedirect("/player/favourite")}>
        <span>
          <i className="fas fa-heart"></i>
        </span>
        Favourites Songs
      </FavsSongsButton>
    </ButtonsContainer>
    <Border />
    <Playlists>
      {userPlaylists.length !== 0 &&
        userPlaylists.map((playlist: Playlist, i) => (
          <PlaylistItem
            playlistName={playlist.playlist_name}
            playlistID={playlist._id}
            key={i}
          />
        ))}
    </Playlists>
  </PlaylistsContainer>
);

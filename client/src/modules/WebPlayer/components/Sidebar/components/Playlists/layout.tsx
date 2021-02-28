import React, { useMemo } from "react";
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
import { PlaylistItem } from './components/PlaylistItem/index'

type PlaylistsLayoutProps = {
  handleCreatePlaylist: (e: React.MouseEvent) => void;
  userPlaylists: Playlist[];
};

export const PlaylistsLayout = ({
  handleCreatePlaylist,
  userPlaylists,
}: PlaylistsLayoutProps) => {
  
  /* const playlists: void = useMemo(() => {
    userPlaylists.map((playlist: Playlist, i=0) => (
      <PlaylistItem
        playlistName={playlist.playlist_name}
        playlistID={playlist._id}
        key={i++}
      />
    ));
  }, []); */
  
  return (
    <PlaylistsContainer>
      <Title>PLAYLISTS</Title>
      <ButtonsContainer>
        <CreatePlaylist onClick={handleCreatePlaylist}>
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
        {userPlaylists.length !== 0 &&
          userPlaylists.map((playlist: Playlist, i = 0) => (
            <PlaylistItem
              playlistName={playlist.playlist_name}
              playlistID={playlist._id}
              key={i++}
            />
          ))}
        {/* {playlists} */}
      </Playlists>
    </PlaylistsContainer>
  );
};

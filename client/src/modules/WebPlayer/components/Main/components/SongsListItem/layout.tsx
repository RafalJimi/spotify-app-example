import React, { forwardRef } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Song } from "../../../../../../store/types/song";
import { Playlist } from "../../../../../../store/types/playlist";
import { millisToMinutesAndSeconds } from "../../../../../../helpers/duration";

import {
  ContextContainer,
  SongItemContainer,
  Number,
  PlayButton,
  AlbumIMG,
  SongTitle,
  FavButton,
  Time,
  Options,
  OptionsMenu,
  ContextMenuOption,
  Option,
  PlaylistsContainer,
  PlaylistName,
} from "./layout.styled";

export type SongsListItemLayoutProps = {
  id: number;
  songData: Song;
  category?: string;
  handlePlayButton: (e: React.MouseEvent) => void;
  isPlaying: boolean;
  isCurrentSong: boolean;
  isFavourite: boolean;
  handleFavButton: (e: React.MouseEvent) => void;
  isOpen: boolean;
  handleOpenMenu: (e: React.MouseEvent) => void;
  handleMenuItem: (category: string) => (e: React.MouseEvent) => void;
  userPlaylists: Playlist[];
  handleAddSongToPlaylist: (id: string) => (e: React.MouseEvent) => void;
  handleRemoveSongFromPlaylist: (id: string) => (e: React.MouseEvent) => void;
  currentPlaylistID: string;
  playlistComponentIsMounted: boolean;
};

export const SongItemLayout = forwardRef<HTMLElement, SongsListItemLayoutProps>(({
  id,
  songData,
  category,
  handlePlayButton,
  isPlaying,
  isCurrentSong,
  isFavourite,
  handleFavButton,
  isOpen,
  handleOpenMenu,
  handleMenuItem,
  userPlaylists,
  handleAddSongToPlaylist,
  handleRemoveSongFromPlaylist,
  currentPlaylistID,
  playlistComponentIsMounted,
}: SongsListItemLayoutProps,
  ref: any
) => {
  
  const Menu = (category?: string) => {
  switch (category) {
    case "artist":
      return (
        <Option
          onClick={handleMenuItem(`/player/album/${songData.collectionName}`)}
        >
          Go to album
        </Option>
      );
    case "album":
        return (
          <Option
            onClick={handleMenuItem(`/player/artist/${songData.artistName}`)}
          >
            Go to artist
          </Option>
        );
    default:
      return (
        <React.Fragment>
          <Option
            onClick={handleMenuItem(`/player/artist/${songData.artistName}`)}
          >
            Go to artist
          </Option>
          <Option
            onClick={handleMenuItem(`/player/album/${songData.collectionName}`)}
          >
            Go to album
          </Option>
        </React.Fragment>
      );
  }
  }
  
  return (
    <ContextContainer>
      {songData && (
        <ContextMenuTrigger id={`ShowSectionItemMenu-${id}`}>
          <SongItemContainer isCurrentSong={isCurrentSong}>
            <Number className="number" isCurrentSong={isCurrentSong}>
              {id + 1}
            </Number>
            <PlayButton
              className="playButton"
              onClick={handlePlayButton}
              isCurrentSong={isCurrentSong}
            >
              {isPlaying ? (
                <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
              )}
            </PlayButton>
            <AlbumIMG>
              <img src={songData.artworkUrl100} />
            </AlbumIMG>
            <SongTitle isCurrentSong={isCurrentSong}>
              {songData.trackName}
            </SongTitle>
            <FavButton
              className="favButton"
              isCurrentSong={isCurrentSong}
              onClick={handleFavButton}
            >
              <i className={isFavourite ? "fas fa-heart" : "far fa-heart"}></i>
            </FavButton>
            <Time isCurrentSong={isCurrentSong}>
              {millisToMinutesAndSeconds(songData.trackTimeMillis)}
            </Time>
            <Options className="options" isCurrentSong={isCurrentSong}>
              <i className="fas fa-ellipsis-h" onClick={handleOpenMenu}></i>
              <OptionsMenu ref={ref} isOpen={isOpen}>
                {Menu(category)}
                {playlistComponentIsMounted ? (
                  <Option
                    onClick={handleRemoveSongFromPlaylist(currentPlaylistID)}
                  >
                    Remove from playlist
                  </Option>
                ) : ( 
                  <Option>
                    <span>Add to playlist</span>{" "}
                    <i className="fas fa-angle-right"></i>
                    {userPlaylists.length > 0 ? (
                      <PlaylistsContainer arrLength={userPlaylists.length}>
                        {userPlaylists.map((playlist) => (
                          <PlaylistName
                            onClick={handleAddSongToPlaylist(playlist._id)}
                          >
                            {playlist.playlist_name}
                          </PlaylistName>
                        ))}
                      </PlaylistsContainer>
                    ) : (<PlaylistsContainer arrLength={0}>
                          <PlaylistName>
                            You don't have playlists
                          </PlaylistName>
                      </PlaylistsContainer>)}
                  </Option>
                )}
              </OptionsMenu>
            </Options>
          </SongItemContainer>
        </ContextMenuTrigger>
      )}
      {songData && (
        <ContextMenu id={`ShowSectionItemMenu-${id}`}>
          <MenuItem>
            <ContextMenuOption>
              {Menu(category)}
              <Option>
                <span>Add to playlist</span>{" "}
                <i className="fas fa-angle-right"></i>
                <PlaylistsContainer arrLength={userPlaylists.length}>
                  {userPlaylists.map((playlist) => (
                    <PlaylistName
                      onClick={handleAddSongToPlaylist(playlist._id)}
                    >
                      {playlist.playlist_name}
                    </PlaylistName>
                  ))}
                </PlaylistsContainer>
              </Option>
            </ContextMenuOption>
          </MenuItem>
        </ContextMenu>
      )}
    </ContextContainer>
  );
  }
);

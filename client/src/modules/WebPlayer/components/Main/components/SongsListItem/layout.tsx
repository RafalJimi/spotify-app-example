import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Song } from "../../../../../../store/types/song";
import { Menu } from "./components/Menu/index";
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
  OptionsMenu,
  Option,
  PlaylistsContainer,
  Playlist,
} from "./layout.styled";

export type SongsListItemLayoutProps = {
  id: number;
  songData: Song;
  handlePlayButton: (e: React.MouseEvent) => void;
  isPlaying: boolean;
  isCurrentSong: boolean;
};

export const SongItemLayout = ({
  id,
  songData,
  handlePlayButton,
  isPlaying,
  isCurrentSong,
}: SongsListItemLayoutProps) => (
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
          <FavButton className="favButton" isCurrentSong={isCurrentSong}>
            <i className="far fa-heart"></i>
          </FavButton>
          <Time isCurrentSong={isCurrentSong}>
            {millisToMinutesAndSeconds(songData.trackTimeMillis)}
          </Time>
          <Menu
            artist={songData.artistName}
            album={songData.collectionName}
            isCurrentSong={isCurrentSong}
          />
        </SongItemContainer>
      </ContextMenuTrigger>
    )}

    {songData && (
      <ContextMenu id={`ShowSectionItemMenu-${id}`}>
        <MenuItem>
          <OptionsMenu>
            <Option>Go to album</Option>
            <Option>
              <span>Add to playlist</span>{" "}
              <i className="fas fa-angle-right"></i>
              <PlaylistsContainer>
                <Playlist>Test</Playlist>
                <Playlist>Test 2</Playlist>
              </PlaylistsContainer>
            </Option>
          </OptionsMenu>
        </MenuItem>
      </ContextMenu>
    )}
  </ContextContainer>
);

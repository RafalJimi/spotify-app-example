import React, { forwardRef } from "react";
import { Header } from "../Header";
import { PlayButton } from "../PlayButton";
import { SongsListItem } from "../SongsListItem";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { SearchElements } from "../SearchElements";
import { Loader } from "../Loader";
import { Playlist } from "../../../../../../store/types/playlist";
import { Song } from "../../../../../../store/types/song";
import { ServerError } from "../ServerError";
import {
  Container,
  ButtonsContainer,
  OptionsButton,
  MenuContainer,
  MenuItem,
} from "./layout.styled";

type PlaylistLayoutProps = {
  isOpen: boolean;
  isLoading: boolean;
  playlistData: Playlist;
  isError: string;
  handleMenuButton: (e: React.MouseEvent) => void;
  handleEditDetails: (e: React.MouseEvent) => void;
  handleDeletePlaylist: (e: React.MouseEvent) => void;
};

export const PlaylistLayout = forwardRef<HTMLElement, PlaylistLayoutProps>(
  (
    {
      isOpen,
      isLoading,
      playlistData,
      isError,
      handleMenuButton,
      handleEditDetails,
      handleDeletePlaylist,
    }: PlaylistLayoutProps,
    ref: any
  ) => (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Header
            imgUrl={
              playlistData.songs.length > 0
                ? playlistData.songs[0].artworkUrl100
                : "https://cdn.pixabay.com/photo/2018/04/11/19/48/music-3311599_960_720.png"
            }
            category="Playlist"
            title={playlistData.playlist_name}
          />
          <ButtonsContainer>
            {playlistData.songs.length > 0 && <PlayButton />}
            <OptionsButton
              isPlayButton={playlistData.songs.length > 0 ? true : false}
            >
              <i onClick={handleMenuButton} className="fas fa-ellipsis-h"></i>
              <MenuContainer isOpen={isOpen} ref={ref}>
                <MenuItem onClick={handleDeletePlaylist}>
                  Delete playlist
                </MenuItem>
                <MenuItem onClick={handleEditDetails}>Edit details</MenuItem>
              </MenuContainer>
            </OptionsButton>
          </ButtonsContainer>
          {playlistData.songs.length > 0 ? (
            <Section
              title={`${playlistData.playlist_name} songs`}
              children={
                <Songs>
                  {(playlistData.songs as Song[]).map((song, i) => (
                    <SongsListItem key={i} id={i} songData={song} />
                  ))}
                </Songs>
              }
            />
          ) : (
            <SearchElements sectionName="playlist" />
          )}
        </React.Fragment>
      )}
      {isError && <ServerError error={isError} />}
    </Container>
  )
);

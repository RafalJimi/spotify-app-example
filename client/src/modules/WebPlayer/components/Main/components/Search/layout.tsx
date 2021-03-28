import React from "react";
import {
  ArtistsResult,
  AlbumsResult,
  PlaylistsResult,
} from "../../../../.././../store/iTunesAPI/fetchSearchData/reducer";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Section } from "../Section";
import { ArtistItem } from "../ArtistItem/";
import { AlbumItem } from "../AlbumItem";
import { PlaylistItem } from "../PlaylistItem";
import { Loader } from "../Loader";
import { NotFound } from "../NotFound";
import { ITunesError } from "../iTunesApiError";
import { EnterPhrase } from "./components/EnterPhrase";
import { Container } from "./layout.styled";

type SearchLayoutProps = {
  isTerm: boolean;
  artists: ArtistsResult;
  albums: AlbumsResult;
  playlists: PlaylistsResult;
  isLoading: boolean;
  isError: boolean;
};

export const SearchLayout = ({
  isTerm,
  artists,
  albums,
  playlists,
  isLoading,
  isError,
}: SearchLayoutProps) => (
  <Container>
            {isTerm ? (
      <React.Fragment>
        {isLoading && <Loader />}
        {artists.resultCount !== 0 ? (
          <Section
            title="Artists"
            children={
              <ListItemsWrapper arrLength={artists.resultCount}>
                {artists.results.map((artist, i) => (
                  <ArtistItem key={i} id={i} artistItemData={artist} />
                ))}
              </ListItemsWrapper>
            }
          />
        ) : (
          <NotFound sectionName="Artists" />
        )}
        {albums.resultCount !== 0 ? (
          <Section
            title="Albums"
            children={
              <ListItemsWrapper arrLength={albums.resultCount}>
                {albums.results.map((album, i) => (
                  <AlbumItem key={i} id={i} albumItemData={album} />
                ))}
              </ListItemsWrapper>
            }
          />
        ) : (
          <NotFound sectionName="Albums" />
        )}
        {playlists.resultCount !== 0 ? (
          <Section
            title="Playlists"
            children={
              <ListItemsWrapper arrLength={playlists.resultCount}>
                {playlists.results.map((playlist, i) => (
                  <PlaylistItem key={i} id={i} playlistItemData={playlist} />
                ))}
              </ListItemsWrapper>
            }
          />
        ) : (
          <NotFound sectionName="Playlists" />
        )}
        {isError && <ITunesError />}
      </React.Fragment>
    ) : (
      <EnterPhrase />
    )}
  </Container>
);

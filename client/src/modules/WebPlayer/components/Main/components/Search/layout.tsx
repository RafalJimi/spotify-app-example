import React from "react";
import {
  ArtistsResult,
  AlbumsResult,
  PlaylistsResult,
} from "../../../../.././../store/fetchSearchData/reducer";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Section } from "../Section";
import { ArtistItem } from "../ArtistItem/";
import { AlbumItem } from "../AlbumItem";
import { PlaylistItem } from "../PlaylistItem";
import { Loader } from "../Loader";
import { NotFound } from "../NotFound";
import { SearchContainer } from "./layout.styled";

type SearchLayoutProps = {
  artists: ArtistsResult;
  albums: AlbumsResult;
  playlists: PlaylistsResult;
  isLoading: boolean;
};

export const SearchLayout = ({
  artists,
  albums,
  playlists,
  isLoading,
}: SearchLayoutProps) => (
  <SearchContainer>
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
  </SearchContainer>
);

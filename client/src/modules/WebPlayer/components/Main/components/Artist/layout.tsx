import React from "react";
import { Header } from "../Header/index";
import { PlayButton } from "../PlayButton/index";
import { SongsListItem } from "../SongsListItem/index";
import { ListItem } from "../SectionListItem/index";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section/index";
import { Loader } from '../Loader/index'
import { NotFound } from '../NotFound/index'

import { SongsByArtistResults } from "../../../../../../store/fetchSongsByArtist/reducer";
import { AlbumsByArtistResults } from "../../../../../../store/fetchAlbumsByArtist/reducer";

import { ArtistContainer } from "./layout.styled";

type ArtistLayoutProps = {
  songs: SongsByArtistResults;
  albums: AlbumsByArtistResults;
  songsAreLoading: boolean;
  albumsAreLoading: boolean;
};

export const ArtistLayout = ({ songs, albums, songsAreLoading, albumsAreLoading }: ArtistLayoutProps) => {
 
  return (
    <ArtistContainer>
      {songsAreLoading || albumsAreLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Header
            imgUrl="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
            category="Artist"
            title="Metallica"
          />
          <PlayButton />
          <Section
            title="Popular"
            children={
              <Songs>
                {songs.results.length !== 0 ? (
                  songs.results.map((song, i = 0) => (
                    <SongsListItem key={i++} id={i++} songData={song} />
                  ))
                ) : (
                  <NotFound sectionName="Popular songs" />
                )}
              </Songs>
            }
          />
          <Section
            title="Metallica's albums"
            children={
              <ListItemsWrapper arrLength={albums.results.length}>
                {albums.results.length !== 0 ? (
                  albums.results.map((album, i = 0) => (
                    <ListItem
                      key={i++}
                      id={i++}
                      category="album"
                      listItemData={album}
                    />
                  ))
                ) : (
                  <NotFound sectionName="Albums" />
                )}
              </ListItemsWrapper>
            }
          />
        </React.Fragment>
      )}
    </ArtistContainer>
  );
};

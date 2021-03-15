import React from "react";
import { Header } from "../Header/index";
import { PlayButton } from "../PlayButton/index";
import { SongsListItem } from "../SongsListItem/index";
import { AlbumItem } from "../AlbumItem/index";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section/index";
import { Loader } from '../Loader/index'
import { NotFound } from '../NotFound/index'
import { ITunesError } from "../iTunesApiError";
import { SongsByArtistResults } from "../../../../../../store/iTunesAPI/fetchSongsByArtist/reducer";
import { AlbumsByArtistResults } from "../../../../../../store/iTunesAPI/fetchAlbumsByArtist/reducer";
import { Container } from "./layout.styled";


type ArtistLayoutProps = {
  songs: SongsByArtistResults;
  albums: AlbumsByArtistResults;
  songsAreLoading: boolean;
  albumsAreLoading: boolean;
  songsByArtistIsError: boolean;
  albumsByArtistIsError: boolean;
  artistName: string;
};

export const ArtistLayout = ({
  songs,
  albums,
  songsAreLoading,
  albumsAreLoading,
  songsByArtistIsError,
  albumsByArtistIsError,
  artistName,
}: ArtistLayoutProps) => {
  return (
    <Container>
      {songsAreLoading || albumsAreLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Header
            imgUrl={
              songs.resultCount > 0
                ? songs.results[0].artworkUrl100
                : "https://img.freepik.com/darmowe-wektory/realistyczny-szablon-projektu-mockupu_1017-8609.jpg?size=338&ext=jpg&ga=GA1.2.279147769.1610236800"
            }
            category="Artist"
            title={artistName}
          />
          <PlayButton />
          <Section
            title="Popular"
            children={
              <Songs>
                {songs.resultCount > 0 ? (
                  songs.results.map((song, i) => (
                    <SongsListItem
                      key={i++}
                      id={i++}
                      songData={song}
                      category="artist"
                    />
                  ))
                ) : (
                  <NotFound sectionName="Popular songs" />
                )}
              </Songs>
            }
          />
          <Section
            title={`${artistName} albums`}
            children={
              <ListItemsWrapper arrLength={albums.results.length}>
                {albums.resultCount > 0 ? (
                  albums.results.map((album, i) => (
                    <AlbumItem key={i++} id={i} albumItemData={album} />
                  ))
                ) : (
                  <NotFound sectionName="Albums" />
                )}
              </ListItemsWrapper>
            }
          />
        </React.Fragment>
      )}
      {(songsByArtistIsError || albumsByArtistIsError) && <ITunesError />}
    </Container>
  );
};

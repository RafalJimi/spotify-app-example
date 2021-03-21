import React from "react";
import { Header } from "../Header";
import { PlayButton } from "../PlayButton";
import { SongsListItem } from "../SongsListItem";
import { AlbumItem } from "../AlbumItem";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { SongsByAlbumResults } from "../../../../../../store/iTunesAPI/fetchSongsByAlbum/reducer";
import { AlbumsByArtistResults } from "../../../../../../store/iTunesAPI/fetchAlbumsByArtist/reducer";
import { Loader } from "../Loader";
import { NotFound } from "../NotFound";
import { ITunesError } from "../iTunesApiError";
import { Container } from "./layout.styled";
import { Song } from "../../../../../../store/types/song";

type AlbumLayoutProps = {
  songsByAlbumResult: SongsByAlbumResults;
  albumsByArtistResult: AlbumsByArtistResults;
  songsByAlbumIsLoading: boolean;
  albumsByArtistIsLoading: boolean;
  songsByAlbumIsError: boolean;
  albumsByArtistIsError: boolean;
  albumName: string;
  songsFromAlbum: Song[];
};

export const AlbumLayout = ({
  songsByAlbumResult,
  albumsByArtistResult,
  songsByAlbumIsLoading,
  albumsByArtistIsLoading,
  songsByAlbumIsError,
  albumsByArtistIsError,
  albumName,
  songsFromAlbum,
}: AlbumLayoutProps) => (
  <Container>
    {songsByAlbumIsLoading || albumsByArtistIsLoading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Header
          imgUrl={
            songsByAlbumResult.resultCount > 0
              ? songsByAlbumResult.results[0].artworkUrl100
              : "https://linuxporady.pl/wp-content/uploads/2019/05/jak-nagrac-na-plycie-dvd-cd-dane-z-pliku-img.jpeg"
          }
          category="Album"
          title={albumName}
        />
        <PlayButton />
        <Section
          title={`Songs from ${albumName}`}
          children={
            <Songs>
              {songsByAlbumResult.resultCount > 0 ? (
                songsFromAlbum.map((song, i) => (
                  <SongsListItem
                    key={i}
                    id={i}
                    songData={song}
                    category="album"
                  />
                ))
              ) : (
                <NotFound sectionName={"Songs"} />
              )}
            </Songs>
          }
        />
        <Section
          title={
            songsByAlbumResult.resultCount > 0
              ? `Other ${songsByAlbumResult.results[0].artistName} albums`
              : `Other albums`
          }
          children={
            <ListItemsWrapper arrLength={albumsByArtistResult.resultCount}>
              {albumsByArtistResult.resultCount > 0 ? (
                albumsByArtistResult.results.map((album, i) => (
                  <AlbumItem key={i} id={i} albumItemData={album} />
                ))
              ) : (
                <NotFound sectionName="Albums" />
              )}
            </ListItemsWrapper>
          }
        />
      </React.Fragment>
    )}
    {(songsByAlbumIsError || albumsByArtistIsError) && <ITunesError />}
  </Container>
);

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
import { AlbumContainer } from "./layout.styled";

type AlbumLayoutProps = {
  songsByAlbumResult: SongsByAlbumResults;
  albumsByArtistResult: AlbumsByArtistResults;
  songsByAlbumIsLoading: boolean;
  albumsByArtistIsLoading: boolean;
  songsByAlbumIsError: boolean;
  albumsByArtistIsError: boolean;
};

export const AlbumLayout = ({
  songsByAlbumResult,
  albumsByArtistResult,
  songsByAlbumIsLoading,
  albumsByArtistIsLoading,
  songsByAlbumIsError,
  albumsByArtistIsError,
}: AlbumLayoutProps) => (
  <AlbumContainer>
    {((songsByAlbumIsLoading || albumsByArtistIsLoading) &&
      songsByAlbumResult.resultCount === 0) ||
    albumsByArtistResult.resultCount === 0 ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Header
          imgUrl={
            songsByAlbumResult.resultCount === 0
              ? "asd"
              : songsByAlbumResult.results[0].artworkUrl100
          }
          category="Artist"
          title={
            songsByAlbumResult.resultCount === 0
              ? "asd"
              : songsByAlbumResult.results[0].collectionName
          }
        />
        <PlayButton />
        <Section
          title={`Songs from ${songsByAlbumResult.results[0].collectionName}`}
          children={
            <Songs>
              {songsByAlbumResult.resultCount !== 0 ? (
                songsByAlbumResult.results.map((song, i) => (
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
          title={`Other ${songsByAlbumResult.results[0].artistName} albums`}
          children={
            <ListItemsWrapper arrLength={albumsByArtistResult.results.length}>
              {albumsByArtistResult.resultCount !== 0 ? (
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
  </AlbumContainer>
);

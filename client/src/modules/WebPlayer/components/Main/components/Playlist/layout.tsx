import React from "react";
import { Header } from "../Header";
import { PlayButton } from "../PlayButton";
import { SongsListItem } from "../SongsListItem";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { Search } from "./components/Search";
import { PlaylistContainer } from "./layout.styled";
import { Playlist } from "../../../../../../store/types/playlist";

type PlaylistLayoutProps = {
  playlistData: Playlist;
};

export const PlaylistLayout = ({ playlistData }: PlaylistLayoutProps) => (
  <PlaylistContainer>
    <Header
      imgUrl={
        playlistData.songs.length > 0
          ? playlistData.songs[0].artworkUrl100
          : "https://cdn.pixabay.com/photo/2018/04/11/19/48/music-3311599_960_720.png"
      }
      category="Playlist"
      title={playlistData.playlist_name}
    />
    {playlistData.songs.length === 0 && <Search />}
    {/* {playlistData.songs.length > 0 && <PlayButton />}
    {playlistData.songs.length > 0 && (
      <Section
        title={`${playlistData.playlist_name} songs`}
        children={<Songs></Songs>}
      />
    )} */}
  </PlaylistContainer>
);

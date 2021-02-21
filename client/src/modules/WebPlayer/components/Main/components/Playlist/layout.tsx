import React from "react";
import { Header } from "../Header/index";
import { PlayButton } from "../PlayButton/index";
import { SongsListItem } from "../SongsListItem/index";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { PlaylistContainer } from "./layout.styled";

const songData = {
  artistName: "Metallica",
  albumName: "Master of puppets",
  trackName: "Master of puppets",
  imgUrl: "test",
  trackLenght: "1:00",
};

export const PlaylistLayout = () => (
  <PlaylistContainer>
    <Header
      imgUrl="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
      category="Playlist"
      title="Jimi's playlist"
    />
    <PlayButton />
    <Section title="Jimi's playlist songs" children={<Songs></Songs>} />
  </PlaylistContainer>
);

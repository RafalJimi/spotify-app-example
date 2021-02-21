import React from "react";
import { Header } from "./components/Header";
import { PlayButton } from "../PlayButton/index";
import { SongsListItem } from "../SongsListItem/index";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { FavouriteContainer } from "./layout.styled";

export const FavouriteLayout = () => (
  <FavouriteContainer>
    <Header />
    <PlayButton />
    <Section
      title="Jimi's playlist songs"
      children={
        <Songs>
          {/* <SongsListItem id={5} songData={songData} />
          <SongsListItem id={4} songData={songData} />
          <SongsListItem id={3} songData={songData} />
          <SongsListItem id={2} songData={songData} />
          <SongsListItem id={1} songData={songData} /> */}
        </Songs>
      }
    />
  </FavouriteContainer>
);

import React from "react";
import { ListItem } from "./components/ListItem/index";
import { FavSongs } from "./components/FavSongs/index";
import {
  LibraryContainer,
  Section,
  SectionTitle,
  ListItems,
} from "./layout.styled";

export const LibraryLayout = () => (
  <LibraryContainer>
    <Section>
      <SectionTitle>Favourite songs</SectionTitle>
      <FavSongs />
    </Section>
    <Section>
      <SectionTitle>Your playlists</SectionTitle>
      <ListItems>
        <ListItem location={"album/Master_of_puppets"} />
      </ListItems>
    </Section>
  </LibraryContainer>
);

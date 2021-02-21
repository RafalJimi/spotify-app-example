import React from "react";
import { Section } from "../Section/index";
import { FavSongs } from "./components/FavSongs/index";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { ListItem } from "../SectionListItem/index";
import { LibraryContainer } from "./layout.styled";

export const LibraryLayout = () => (
  <LibraryContainer>
    <Section title="Favourite songs" children={<FavSongs />} />
    {/* <Section
      title="Your playlists"
      children={<ListItemsWrapper></ListItemsWrapper>}
    /> */}
  </LibraryContainer>
);

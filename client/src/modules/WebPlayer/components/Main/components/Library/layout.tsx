import React from "react";
import { Section } from "../Section/index";
import { FavSongs } from "./components/FavSongs/index";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { ListItem } from "../SectionListItem/index";
import { LibraryContainer } from "./layout.styled";

export const LibraryLayout = () => (
  <LibraryContainer>
    <Section title="Favourite songs" children={<FavSongs />} />
    <Section
      title="Your playlists"
      children={
        <ListItemsWrapper>
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
        </ListItemsWrapper>
      }
    />
  </LibraryContainer>
);

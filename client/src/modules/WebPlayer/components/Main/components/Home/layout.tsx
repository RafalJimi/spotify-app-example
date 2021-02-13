import React from "react";
import { ListItem } from "../SectionListItem/index";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Section } from "../Section/index";
import { HomeContainer } from "./layout.styled";

type MenuLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const HomeLayout = ({ handleOnClick }: MenuLayoutProps) => (
  <HomeContainer>
    <Section
      title="Home"
      subtitle="Best albums, songs and artists of rock music"
      children={
        <ListItemsWrapper>
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
        </ListItemsWrapper>
      }
    />
    <Section
      title="Best of POP"
      subtitle="Best albums, songs and artists of pop music"
      children={
        <ListItemsWrapper>
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
        </ListItemsWrapper>
      }
    />
    <Section
      title="Best of hip-hop"
      subtitle="Best albums, songs and artists of hip-hop music"
      children={
        <ListItemsWrapper>
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
          <ListItem
            category="artist"
            artist="artist"
            album="artist"
            imgURL="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          />
        </ListItemsWrapper>
      }
    />
  </HomeContainer>
);

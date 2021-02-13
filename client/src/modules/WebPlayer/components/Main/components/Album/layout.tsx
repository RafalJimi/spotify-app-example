import React from "react";
import { Header } from "../Header/index";
import { PlayButton } from "../PlayButton/index";
import { SongsListItem } from "../SongsListItem/index";
import { ListItem } from "../SectionListItem/index";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { AlbumContainer } from "./layout.styled";

const songData = {
  artistName: "Metallica",
  albumName: "Master of puppets",
  trackName: "Master of puppets",
  imgUrl: "test",
  trackLenght: "1:00",
};

export const AlbumLayout = () => (
  <AlbumContainer>
    <Header
      imgUrl="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
      category="Album"
      title="Master of puppets"
    />
    <PlayButton />
    <Section
      title="Popular"
      children={
        <Songs>
          <SongsListItem id={5} songData={songData} />
          <SongsListItem id={4} songData={songData} />
          <SongsListItem id={3} songData={songData} />
          <SongsListItem id={2} songData={songData} />
          <SongsListItem id={1} songData={songData} />
        </Songs>
      }
    />
    <Section
      title="Metallica's albums"
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
  </AlbumContainer>
);

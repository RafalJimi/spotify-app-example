import React from "react";
import { SongItem } from "./components/SongItem/index";
import { ListItem } from "./components/ListItem/index";
import {
  AlbumContainer,
  AlbumInformation,
  AlbumImgContainer,
  AlbumName,
  PlayButton,
  Section,
  SectionTitle,
  Songs,
  ListItems,
} from "./layout.styled";

type AlbumLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const AlbumLayout = ({ handleOnClick }: AlbumLayoutProps) => (
  <AlbumContainer>
    <AlbumInformation>
      <AlbumImgContainer>
        <img
          src={
            "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          }
          alt=""
        />
      </AlbumImgContainer>
      <AlbumName>
        <span>Album</span>
        <h1>Metallica</h1>
      </AlbumName>
    </AlbumInformation>
    <PlayButton>
      <i className="fas fa-play"></i>
    </PlayButton>
    <Section>
      <SectionTitle>Popular</SectionTitle>
      <Songs>
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </Songs>
    </Section>
    <Section>
      <SectionTitle>Other Metallica Albums</SectionTitle>
      <ListItems>
        <ListItem />
      </ListItems>
    </Section>
  </AlbumContainer>
);

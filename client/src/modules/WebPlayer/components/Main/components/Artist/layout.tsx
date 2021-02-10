import React from "react";
import { SongItem } from "./components/SongItem/index";
import { ListItem } from "./components/ListItem/index";
import {
  ArtistContainer,
  ArtistInformation,
  ArtistImgContainer,
  ArtistName,
  PlayButton,
  Section,
  SectionTitle,
  Songs,
  ListItems,
} from "./layout.styled";

type ArtistLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const ArtistLayout = ({ handleOnClick }: ArtistLayoutProps) => (
  <ArtistContainer>
    <ArtistInformation>
      <ArtistImgContainer>
        <img
          src={
            "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg"
          }
          alt=""
        />
      </ArtistImgContainer>
      <ArtistName>
        <span>Artist</span>
        <h1>Metallica</h1>
      </ArtistName>
    </ArtistInformation>
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
      <SectionTitle>Discography</SectionTitle>
      <ListItems>
        <ListItem />
      </ListItems>
    </Section>
  </ArtistContainer>
);

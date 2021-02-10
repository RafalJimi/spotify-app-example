import React from "react";
import { ListItem } from "../ListItem/index";
import {
  SearchContainer,
  Section,
  SectionTitle,
  ListItems,
} from "./layout.styled";

export const SearchLayout = () => (
  <SearchContainer>
    <Section>
      <SectionTitle>Artists</SectionTitle>
      <ListItems>
        <ListItem
          borderRadius={75}
          category="artist"
          artist="Metallica"
          album="Master of puppets"
          imgURL="https://image.ceneostatic.pl/data/products/56917667/i-metallica-master-of-puppets-remastered-winyl.jpg"
        />
      </ListItems>
    </Section>
    <Section>
      <SectionTitle>Albums</SectionTitle>
      <ListItems>
        <ListItem
          borderRadius={75}
          category="album"
          artist="Metallica"
          album="Master of puppets"
          imgURL="https://image.ceneostatic.pl/data/products/56917667/i-metallica-master-of-puppets-remastered-winyl.jpg"
        />
      </ListItems>
    </Section>
    <Section>
      <SectionTitle>Playlists</SectionTitle>
      <ListItems>
        <ListItem
          borderRadius={75}
          category="playlist"
          artist="Metallica"
          album="Master of puppets"
          imgURL="https://image.ceneostatic.pl/data/products/56917667/i-metallica-master-of-puppets-remastered-winyl.jpg"
          playlist="Test"
        />
      </ListItems>
    </Section>
  </SearchContainer>
);

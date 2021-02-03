import React from "react";
import {
  SearchContainer,
  Section,
  SectionTitle,
  ListItems,
  ListItem,
  ImageContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "./layout.styled";

type MenuLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const SearchLayout = ({ handleOnClick }: MenuLayoutProps) => (
  <SearchContainer>
    <Section>
      <SectionTitle>Artists</SectionTitle>
      <ListItems>
        <ListItem>
          <ImageContainer style={{ borderRadius: "75px" }} />
          <ListItemTitle>Metallica</ListItemTitle>
          <ListItemSubtitle>Master of puppets</ListItemSubtitle>
        </ListItem>
      </ListItems>
    </Section>
    <Section>
      <SectionTitle>Albums</SectionTitle>
      <ListItems>
        <ListItem>
          <ImageContainer></ImageContainer>
          <ListItemTitle>Metallica</ListItemTitle>
          <ListItemSubtitle>Master of puppets</ListItemSubtitle>
        </ListItem>
      </ListItems>
    </Section>
    <Section>
      <SectionTitle>Tracks</SectionTitle>
      <ListItems>
        <ListItem>
          <ImageContainer></ImageContainer>
          <ListItemTitle>Metallica</ListItemTitle>
          <ListItemSubtitle>Master of puppets</ListItemSubtitle>
        </ListItem>
      </ListItems>
    </Section>
  </SearchContainer>
);

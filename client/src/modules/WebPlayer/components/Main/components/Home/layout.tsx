import React from "react";
import {
  HomeContainer,
  Section,
  SectionTitle,
  SectionSubtitle,
  ListItems,
  ListItem,
  ImageContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "./layout.styled";

type MenuLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const HomeLayout = ({ handleOnClick }: MenuLayoutProps) => (
  <HomeContainer>
    <Section>
      <SectionTitle>Best of Rock</SectionTitle>
      <SectionSubtitle>
        Best albums, songs and artists of rock music
      </SectionSubtitle>
      <ListItems>
        <ListItem>
          <ImageContainer></ImageContainer>
          <ListItemTitle>Metallica</ListItemTitle>
          <ListItemSubtitle>Master of puppets</ListItemSubtitle>
        </ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ListItems>
    </Section>
    <Section>
      <SectionTitle>Best of Rock</SectionTitle>
      <SectionSubtitle>
        Best albums, songs and artists of rock music
      </SectionSubtitle>
      <ListItems>
        <ListItem>
          <ImageContainer></ImageContainer>
          <ListItemTitle>Metallica</ListItemTitle>
          <ListItemSubtitle>Master of puppets</ListItemSubtitle>
        </ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ListItems>
    </Section>
  </HomeContainer>
);

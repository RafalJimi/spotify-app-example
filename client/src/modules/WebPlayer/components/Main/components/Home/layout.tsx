import React from "react";
import { HomeSectionItem } from "./components/HomeSectionItem";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Section } from "../Section/index";
import { ArrayItem, HipHopAlbums, RockAlbums, PopAlbums } from "./consts";
import { Container } from "./layout.styled";

export const HomeLayout = () => (
  <Container>
    <Section
      title="Best Hip-Hop albums"
      subtitle="Best albums of Hip-Hop music"
      children={
        <ListItemsWrapper arrLength={HipHopAlbums.length}>
          {HipHopAlbums.map((hhAlbum: ArrayItem, i) => (
            <HomeSectionItem key={i} id={i} itemData={hhAlbum} />
          ))}
        </ListItemsWrapper>
      }
    />
    <Section
      title="Best Pop albums"
      subtitle="Best albums of Pop music"
      children={
        <ListItemsWrapper arrLength={PopAlbums.length}>
          {PopAlbums.map((popAlbum: ArrayItem, i) => (
            <HomeSectionItem key={i} id={i} itemData={popAlbum} />
          ))}
        </ListItemsWrapper>
      }
    />
    <Section
      title="Best Rock albums"
      subtitle="Best albums of Rock music"
      children={
        <ListItemsWrapper arrLength={RockAlbums.length}>
          {RockAlbums.map((rockAlbum: ArrayItem, i) => (
            <HomeSectionItem key={i} id={i} itemData={rockAlbum} />
          ))}
        </ListItemsWrapper>
      }
    />
  </Container>
);

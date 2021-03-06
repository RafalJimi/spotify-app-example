import React from "react";
import { AlbumItem } from "../AlbumItem/index";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { Section } from "../Section/index";
import { HomeContainer } from "./layout.styled";

type MenuLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const HomeLayout = ({ handleOnClick }: MenuLayoutProps) => (
  <HomeContainer>
    {/* <Section
      title="Home"
      subtitle="Best albums, songs and artists of rock music"
      children={<ListItemsWrapper></ListItemsWrapper>}
    />
    <Section
      title="Best of POP"
      subtitle="Best albums, songs and artists of pop music"
      children={<ListItemsWrapper></ListItemsWrapper>}
    />
    <Section
      title="Best of hip-hop"
      subtitle="Best albums, songs and artists of hip-hop music"
      children={<ListItemsWrapper></ListItemsWrapper>}
    /> */}
  </HomeContainer>
);

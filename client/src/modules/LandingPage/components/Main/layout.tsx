import React from "react";
import { Container, Title, SubTitle, Button, Latest } from "./layout.styled";
import { LatestItem } from "./components/LatestItem";
import { LandingPageAlbums } from "./consts";

type MainLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
};

export const MainLayout = ({ handleOnClick }: MainLayoutProps) => (
  <Container>
    <Title>Are you looking for music?</Title>
    <SubTitle>Start listening to the best songs recently released.</SubTitle>
    <Button onClick={handleOnClick}>LAUNCH THE WEB PLAYER</Button>
    <Latest>
      {LandingPageAlbums.map((latestItem) => (
        <LatestItem latestItemData={latestItem} />
      ))}
    </Latest>
  </Container>
);

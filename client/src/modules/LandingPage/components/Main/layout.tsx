import React from "react";
import {
  MainContainer,
  Title,
  SubTitle,
  Button,
  Latest,
} from "./layout.styled";
import { LatestItem } from "./components/LatestItem/layout.styled";

export const MainLayout = () => (
  <MainContainer>
    <Title>Are you looking for music?</Title>
    <SubTitle>Start listening to the best songs recently released.</SubTitle>
    <Button>LAUNCH THE WEB PLAYER</Button>
    <Latest>
      <LatestItem />
      <LatestItem />
      <LatestItem />
    </Latest>
  </MainContainer>
);

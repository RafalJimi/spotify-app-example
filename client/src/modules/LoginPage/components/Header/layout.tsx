import React from "react";
import SpotifyLogo from "../../../../assets/spotify-logo.png";
import { Container } from "./layout.styled";

type HeaderLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const HeaderLayout = ({ handleOnClick }: HeaderLayoutProps) => (
  <Container>
    <img onClick={handleOnClick("/")} src={SpotifyLogo} alt="" />
  </Container>
);

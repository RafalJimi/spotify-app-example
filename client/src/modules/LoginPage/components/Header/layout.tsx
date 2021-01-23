import React from "react";
import SpotifyLogo from "../../../../assets/spotify-logo.png";
import { HeaderContainer } from "./layout.styled";

type HeaderLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const HeaderLayout = ({ handleOnClick }: HeaderLayoutProps) => (
  <HeaderContainer>
    <img onClick={handleOnClick("/")} src={SpotifyLogo} alt="" />
  </HeaderContainer>
);

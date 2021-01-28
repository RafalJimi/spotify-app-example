import React from "react";
import { LogoContainer } from "./layout.styled";
import logo from "../../../../../../assets/spotify-logo.png";

type LogoLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
};

export const LogoLayout = ({ handleOnClick }: LogoLayoutProps) => (
  <LogoContainer onClick={handleOnClick}>
    <img src={logo} alt="" />
  </LogoContainer>
);

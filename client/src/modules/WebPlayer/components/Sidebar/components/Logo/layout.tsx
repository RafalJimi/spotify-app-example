import React from "react";
import logo from "../../../../../../assets/spotify-logo.png";
import { LogoContainer } from "./layout.styled";

type LogoLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
};

export const LogoLayout = ({ handleOnClick }: LogoLayoutProps) => (
  <LogoContainer>
    <img onClick={handleOnClick} src={logo} alt="" />
  </LogoContainer>
);

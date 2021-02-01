import React from "react";
import { NavButtonsContainer, NavButton } from "./layout.styled";

type NavButtonsLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
};

export const NavButtonsLayout = ({ handleOnClick }: NavButtonsLayoutProps) => (
  <NavButtonsContainer>
    <NavButton style={{ paddingRight: "2px" }}>
      <i className="fas fa-chevron-left"></i>
    </NavButton>
    <NavButton style={{ paddingLeft: "2px" }}>
      <i className="fas fa-chevron-right"></i>
    </NavButton>
  </NavButtonsContainer>
);

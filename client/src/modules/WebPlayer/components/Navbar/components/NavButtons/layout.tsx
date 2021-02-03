import React from "react";
import { SearchBar } from "./components/SearchBar/index";
import { NavButtonsContainer, NavButton } from "./layout.styled";

type NavButtonsLayoutProps = {
  showSearchBar: boolean;
  handleOnClick: (e: React.MouseEvent) => void;
};

export const NavButtonsLayout = ({
  showSearchBar,
  handleOnClick,
}: NavButtonsLayoutProps) => (
  <NavButtonsContainer>
    <NavButton style={{ paddingRight: "2px" }}>
      <i className="fas fa-chevron-left"></i>
    </NavButton>
    <NavButton style={{ paddingLeft: "2px" }}>
      <i className="fas fa-chevron-right"></i>
    </NavButton>
    {showSearchBar ? <SearchBar /> : null}
  </NavButtonsContainer>
);

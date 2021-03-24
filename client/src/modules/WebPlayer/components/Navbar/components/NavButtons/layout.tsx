import React from "react";
import { SearchBar } from "./components/SearchBar/index";
import { Container, NavButton } from "./layout.styled";

type NavButtonsLayoutProps = {
  showSearchBar: boolean;
  handleOnClick: (e: React.MouseEvent) => void;
  handleLeftArrow: (e: React.MouseEvent) => void;
  handleRightArrow: (e: React.MouseEvent) => void;
};

export const NavButtonsLayout = ({
  showSearchBar,
  handleOnClick,
  handleLeftArrow,
  handleRightArrow,
}: NavButtonsLayoutProps) => (
  <Container>
    <NavButton onClick={handleLeftArrow} style={{ paddingRight: "2px" }}>
      <i className="fas fa-chevron-left"></i>
    </NavButton>
    <NavButton onClick={handleRightArrow} style={{ paddingLeft: "2px" }}>
      <i className="fas fa-chevron-right"></i>
    </NavButton>
    {showSearchBar ? <SearchBar /> : null}
  </Container>
);

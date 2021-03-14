import React from "react";
import { SearchBar } from "./components/SearchBar";
import { Container } from "./layout.styled";
import { SearchElementsProps } from "./index";

export const SearchElementsLayout = ({ sectionName }: SearchElementsProps) => {
  return (
    <Container>
      <h1>
        {sectionName === "playlist"
          ? "Your playlist is empty"
          : "You don't have favourite songs"}
        , find songs which you would add to your{" "}
        {sectionName === "playlist" ? "playlist." : "favourites."}
      </h1>
      <SearchBar />
    </Container>
  );
};

import React from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchContainer } from "./layout.styled";

export const SearchLayout = () => {
  return (
    <SearchContainer>
      <h1>
        Your playlist is empty, find songs which you would add to your playlist
      </h1>
      <SearchBar />
    </SearchContainer>
  );
};

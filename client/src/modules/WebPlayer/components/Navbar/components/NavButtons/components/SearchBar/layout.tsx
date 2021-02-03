import React, { ChangeEvent } from "react";
import { SearchBarContainer } from "./layout.styled";

type NavButtonsLayoutProps = {
  term: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchButton: (e: React.MouseEvent) => void;
  handleClearTerm: (e: React.MouseEvent) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchBarLayout = ({
  term,
  handleOnChange,
  handleSearchButton,
  handleClearTerm,
  handleOnSubmit,
}: NavButtonsLayoutProps) => (
  <SearchBarContainer>
    <button onClick={handleSearchButton}>
      <i className="fas fa-search"></i>
    </button>
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search artists, albums and songs"
        value={term}
        onChange={handleOnChange}
      />
    </form>
    <button onClick={handleClearTerm}>
      <i className="fas fa-times"></i>
    </button>
  </SearchBarContainer>
);

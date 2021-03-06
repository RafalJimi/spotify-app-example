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
  handleOnSubmit,
}: NavButtonsLayoutProps) => (
  <SearchBarContainer>
    <form onSubmit={handleOnSubmit}>
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        placeholder="Search artists, albums and songs"
        value={term}
        onChange={handleOnChange}
      />
    </form>
  </SearchBarContainer>
);

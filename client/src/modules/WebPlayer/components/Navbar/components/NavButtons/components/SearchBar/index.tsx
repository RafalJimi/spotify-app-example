import React, { useState, useCallback, ChangeEvent } from "react";
import { SearchBarLayout } from "./layout";

export const SearchBar = () => {
  const [Term, setTerm] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSearchButton = useCallback(
    (e: React.MouseEvent) => {
      console.log("search term", Term);
    },
    [Term]
  );

  const handleClearTerm = useCallback((e: React.MouseEvent) => {
    setTerm("");
  }, []);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("search term", Term);
  };

  return (
    <SearchBarLayout
      term={Term}
      handleOnChange={handleOnChange}
      handleSearchButton={handleSearchButton}
      handleClearTerm={handleClearTerm}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

import React, { useState, useCallback, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SearchBarLayout } from "./layout";

export const SearchBar = () => {
  const [Term, setTerm] = useState("");
  
  const history = useHistory();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSearchButton = useCallback(
    (e: React.MouseEvent) => {
      if (Term.length > 0) history.push(`/player/search?term=${Term}`);
      else toast.dark("Please enter a phrase.");
    },
    [Term]
  );

  const handleClearTerm = useCallback((e: React.MouseEvent) => {
    setTerm("");
  }, []);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Term.length > 0) history.push(`/player/search?term=${Term}`);
    else toast.dark("Please enter a phrase.");
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

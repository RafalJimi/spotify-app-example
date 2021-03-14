import React from "react";
import { SearchElementsLayout } from "./layout";

export type SearchElementsProps = {
  sectionName?: string;
};

export const SearchElements = ({ sectionName }: SearchElementsProps) => {
  return <SearchElementsLayout sectionName={sectionName} />;
};

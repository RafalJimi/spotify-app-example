import React from "react";
import { HeaderLayout } from "./layout";

export type HeaderProps = {
  imgUrl: string;
  category: string;
  title: string;
};

export const Header = ({ imgUrl, category, title }: HeaderProps) => {
  return <HeaderLayout imgUrl={imgUrl} category={category} title={title} />;
};

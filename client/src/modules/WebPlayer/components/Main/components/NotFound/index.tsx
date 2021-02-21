import React from "react";
import { NotFoundLayout } from "./layout";

export type NotFoundProps = {
  sectionName: string;
};

export const NotFound = ({ sectionName }: NotFoundProps) => {
  return <NotFoundLayout sectionName={sectionName} />;
};

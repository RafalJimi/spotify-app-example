import React from "react";
import { NotFoundProps } from "./index";
import { NotFoundContainer } from "./layout.styled";

export const NotFoundLayout = ({ sectionName }: NotFoundProps) => (
  <NotFoundContainer>
    <h1>{sectionName} not found</h1>
  </NotFoundContainer>
);

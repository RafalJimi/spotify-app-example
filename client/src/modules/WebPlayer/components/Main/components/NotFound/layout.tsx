import React from "react";
import { NotFoundProps } from "./index";
import { Container } from "./layout.styled";

export const NotFoundLayout = ({ sectionName }: NotFoundProps) => (
  <Container>
    <h1>{sectionName} not found</h1>
  </Container>
);

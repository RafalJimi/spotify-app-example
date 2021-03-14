import React from "react";
import { Container } from "./layout.styled";
import { ServerErrorProps } from "./index";

export const ServerErrorLayout = ({ error }: ServerErrorProps) => (
  <Container>
    <h3>{error}</h3>
  </Container>
);

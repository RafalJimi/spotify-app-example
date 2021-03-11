import React from "react";
import { Container } from "./layout.styled";

export const ITunesErrorLayout = () => (
  <Container>
    <h3>
      Exceeded maximum amount of requests or connection was interrupted. Please
      try again.
    </h3>
  </Container>
);

import React from "react";
import Loader from "react-loader-spinner";
import { Container } from "./layout.styled";

export const LoaderLayout = () => (
  <Container>
    <Loader type="Oval" color="#C1C3C6" height={100} width={100} />
  </Container>
);

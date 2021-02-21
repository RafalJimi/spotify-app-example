import React from "react";
import Loader from "react-loader-spinner";
import { LoaderContainer } from "./layout.styled";

export const LoaderLayout = () => (
  <LoaderContainer>
    <Loader type="Oval" color="#C1C3C6" height={100} width={100} />
  </LoaderContainer>
);

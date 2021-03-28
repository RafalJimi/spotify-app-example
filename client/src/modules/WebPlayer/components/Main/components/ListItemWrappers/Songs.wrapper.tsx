import React from "react";
import styled from "styled-components";

export const Songs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0px;
  width: 100%;
  z-index: 15;
`;

export const SongsWrapper: React.FC = ({ children }) => (
  <Songs>{children}</Songs>
);

import React from "react";
import styled from "styled-components";

export const ListItems = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0px;
  /* display: block;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap; */
`;

export const ListItemsWrapper: React.FC = ({ children }) => (
  <ListItems>{children}</ListItems>
);

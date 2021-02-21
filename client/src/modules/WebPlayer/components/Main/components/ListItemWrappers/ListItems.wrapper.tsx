import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";

type ListItemsProps = {
  resultsLength: number;
};

export const ListItems = styled.div<ListItemsProps>`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0px;
  width: ${({ resultsLength }) => (resultsLength ? "auto" : "100%")};

  .scrollContainer {
      width: calc(100vw - 350px);
      display: flex;
  }
`;

type ListItemsWrappedProps = {
  arrLength: number;
  children: JSX.Element | JSX.Element[] | never[];
};

export const ListItemsWrapper = ({
  arrLength,
  children,
}: ListItemsWrappedProps) => (
  <ListItems resultsLength={arrLength}>
    <ScrollContainer className="scrollContainer">{children}</ScrollContainer>
  </ListItems>
);

import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { ContextContainer } from "../../../../layout.styled";
import {
  ListItemContainer,
  ImageContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "./layout.styled";

type ListItemLayoutProps = {
  borderRadius?: number;
  handleOnClick: (e: React.MouseEvent) => void;
};

export const ListItemLayout = ({
  borderRadius,
  handleOnClick,
}: ListItemLayoutProps) => {
  return (
    <ContextContainer>
      <ContextMenuTrigger id={"ID"}>
        <ListItemContainer className="listItem" onMouseDown={handleOnClick}>
          <ImageContainer
            style={{ borderRadius: borderRadius ? `${borderRadius}px` : "2px" }}
          >
            <div onClick={() => console.log("test")}>
              <i className="fas fa-play"></i>
            </div>
          </ImageContainer>
          <ListItemTitle>Metallica</ListItemTitle>
          <ListItemSubtitle>Master of puppets</ListItemSubtitle>
        </ListItemContainer>
      </ContextMenuTrigger>

      <ContextMenu id="ID">
        <MenuItem data={{ foo: "bar" }}>Test</MenuItem>
        <MenuItem data={{ foo: "bar" }}>ContextMenu Item 2</MenuItem>
        <MenuItem divider />
        <MenuItem data={{ foo: "bar" }}>ContextMenu Item 3</MenuItem>
      </ContextMenu>
    </ContextContainer>
  );
};

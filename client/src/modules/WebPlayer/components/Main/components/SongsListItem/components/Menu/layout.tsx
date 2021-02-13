import React, { forwardRef } from "react";
import {
  Options,
  OptionsMenu,
  Option,
  PlaylistsContainer,
  Playlist,
} from "./layout.styled";

type MenuLayoutProps = {
  isOpen: boolean;
  handleOpenMenu: (e: React.MouseEvent) => void;
  handleMenuItem: (category: string) => (e: React.MouseEvent) => void;
};

export const MenuLayout = forwardRef<HTMLElement, MenuLayoutProps>(
  ({ isOpen, handleOpenMenu, handleMenuItem }: MenuLayoutProps, ref: any) => (
    <Options className="options">
      <i className="fas fa-ellipsis-h" onClick={handleOpenMenu}></i>
      <OptionsMenu ref={ref} isOpen={isOpen}>
        <Option onClick={handleMenuItem("album")}>Go to album</Option>
        <Option>
          <span>Add to playlist</span> <i className="fas fa-angle-right"></i>
          <PlaylistsContainer>
            <Playlist>Test</Playlist>
            <Playlist>Test 2</Playlist>
          </PlaylistsContainer>
        </Option>
      </OptionsMenu>
    </Options>
  )
);

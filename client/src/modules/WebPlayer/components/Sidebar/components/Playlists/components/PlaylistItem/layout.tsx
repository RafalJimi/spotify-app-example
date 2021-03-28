import React, { ChangeEvent, forwardRef } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Container, OptionsMenu, Option } from "./layout.styled";

type PlaylistItemLayoutProps = {
  playlistName: string;
  changedName: string;
  isFocus: boolean;
  isActive: boolean;
  handleOnDoubleClick: (e: React.MouseEvent) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  playlistID: string;
  handleRedirectToPlaylist: (location: string) => (e: React.MouseEvent) => void;
  handleRenamePlaylist: (e: React.MouseEvent) => void;
  handleDeletePlaylist: (playlistID: string) => (e: React.MouseEvent) => void;
};

export const PlaylistItemLayout = forwardRef<
  HTMLElement,
  PlaylistItemLayoutProps
>(
  (
    {
      playlistName,
      changedName,
      isFocus,
      isActive,
      handleOnDoubleClick,
      handleOnChange,
      handleOnSubmit,
      playlistID,
      handleRedirectToPlaylist,
      handleRenamePlaylist,
      handleDeletePlaylist,
    }: PlaylistItemLayoutProps,
    ref: any
  ) => {
    return (
      <Container
        onDoubleClick={handleOnDoubleClick}
        focus={isFocus}
        onSubmit={handleOnSubmit}
        active={isActive}
      >
        <ContextMenuTrigger id={`PlaylistItemMenu-${playlistID}`}>
          <input
            type="text"
            value={isFocus ? changedName : playlistName}
            readOnly={isFocus ? false : true}
            ref={ref}
            onChange={handleOnChange}
            onClick={handleRedirectToPlaylist(`/player/playlist/${playlistID}`)}
          />
        </ContextMenuTrigger>

        <ContextMenu id={`PlaylistItemMenu-${playlistID}`}>
          <MenuItem>
            <OptionsMenu>
              <Option
                onClick={handleRedirectToPlaylist(
                  `/player/playlist/${playlistID}`
                )}
              >
                Go to playlist
              </Option>
              <Option onClick={handleRenamePlaylist}>Rename playlist</Option>
              <Option onClick={handleDeletePlaylist(playlistID)}>
                Delete playlist
              </Option>
            </OptionsMenu>
          </MenuItem>
        </ContextMenu>
      </Container>
    );
  }
);

import React, { ChangeEvent, forwardRef } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { PlaylistItemContainer, OptionsMenu, Option } from "./layout.styled";

type PlaylistItemLayoutProps = {
  playlistName: string;
  changedName: string;
  isFocus: boolean;
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
      <PlaylistItemContainer
        onDoubleClick={handleOnDoubleClick}
        focus={isFocus}
        onSubmit={handleOnSubmit}
      >
        <ContextMenuTrigger id={`PlaylistItemMenu-${playlistID}`}>
          <input
            type="text"
            value={isFocus ? changedName : playlistName}
            readOnly={isFocus ? false : true}
            ref={ref}
            onChange={handleOnChange}
          />
        </ContextMenuTrigger>

        <ContextMenu id={`PlaylistItemMenu-${playlistID}`}>
          <MenuItem>
            <OptionsMenu>
              <Option
                onClick={handleRedirectToPlaylist(
                  `/player/playlist/${playlistName.replace(/ /g, "_")}`
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
      </PlaylistItemContainer>
    );
  }
);

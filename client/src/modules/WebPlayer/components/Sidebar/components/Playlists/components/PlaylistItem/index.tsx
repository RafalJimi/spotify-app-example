import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  ChangeEvent,
} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useClickOutside } from "../../../../../../../../hooks/useClickOutside";
import { changePlaylistNameStarted } from "../../../../../../../../store/changePlaylistName/actions";
import { deletePlaylistStarted } from "../../../../../../../../store/deletePlaylist/actions";
import { PlaylistItemLayout } from "./layout";

type PlaylistItemProps = {
  playlistName: string;
  playlistID: string;
};

export const PlaylistItem = ({
  playlistName,
  playlistID,
}: PlaylistItemProps) => {
  const [Name, setName] = useState("");
  const [ChangedName, setChangedName] = useState("test");
  const [IsFocus, setIsFocus] = useState(false);
  const formRef = useRef<HTMLElement>(null);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setName(playlistName);
    setChangedName(playlistName);
  }, []);

  const handleOnDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      setIsFocus(true);
    },
    [IsFocus]
  );

  const handleClickOutside = useCallback(
    (event) => {
      if (IsFocus) setIsFocus(false);
    },
    [IsFocus]
  );

  useClickOutside(formRef, handleClickOutside);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChangedName(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("changed name", Name);
    setName(ChangedName);
    setIsFocus(false);
    const playlistData = {
      playlistID: playlistID,
      newPlaylistName: ChangedName,
    };
    dispatch(changePlaylistNameStarted(playlistData));
  };

  useEffect(() => {
    if (!IsFocus) setChangedName(Name);
  }, [IsFocus, ChangedName]);

  const handleRedirectToPlaylist = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  const handleRenamePlaylist = useCallback(
    (e: React.MouseEvent) => {
      setIsFocus(true);
    },
    [IsFocus]
  );

  const handleDeletePlaylist = useCallback(
    (playlistID: string) => (e: React.MouseEvent) => {
      dispatch(deletePlaylistStarted({ playlistID }));
    },
    []
  );

  return (
    <PlaylistItemLayout
      playlistName={Name}
      changedName={ChangedName}
      isFocus={IsFocus}
      handleOnDoubleClick={handleOnDoubleClick}
      ref={formRef}
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      playlistID={playlistID}
      handleRedirectToPlaylist={handleRedirectToPlaylist}
      handleRenamePlaylist={handleRenamePlaylist}
      handleDeletePlaylist={handleDeletePlaylist}
    />
  );
};

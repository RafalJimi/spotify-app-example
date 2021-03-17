import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  ChangeEvent,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditDetailsLayout } from "./layout";
import { useEditDetailsContext } from "../../../../../contexts/EditDetails.context";
import { useClickOutside } from "../../../../../hooks/useClickOutside";
import { changePlaylistNameStarted } from "../../../../../store/playlist/changePlaylistName/actions";
import { usePlaylistsContext } from "../../../../../contexts/Playlists.context";
import { playlistDataRX } from "../../../../../store/playlist/fetchUserPlaylist/selectors";

export const EditDetails = () => {
  const [InputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const { isOpen, setIsOpen, handleEditDetails } = useEditDetailsContext();

  const { CurrentPlaylistID } = usePlaylistsContext();

  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = useCallback(
    (event) => {
      setIsOpen(false);
    },
    [isOpen]
  );

  useClickOutside(ref, handleClickOutside);

  const playlistData = useSelector(playlistDataRX);

  useEffect(() => {
    setInputValue(playlistData.playlist_name);
  }, [playlistData.playlist_name]);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isOpen) setInputValue(playlistData.playlist_name);
  }, [isOpen]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const playlistData = {
      playlistID: CurrentPlaylistID,
      newPlaylistName: InputValue,
    };
    dispatch(changePlaylistNameStarted(playlistData));
    setIsOpen(false);
  };

  return (
    <EditDetailsLayout
      isOpen={isOpen}
      handleEditDetails={handleEditDetails}
      ref={ref}
      inputValue={InputValue}
      handleInputValue={handleInputValue}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

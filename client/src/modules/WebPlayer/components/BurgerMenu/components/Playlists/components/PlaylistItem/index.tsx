import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import { usePlaylistsContext } from "../../../../../../../../contexts/Playlists.context";
import { PlaylistItemLayout } from "./layout";
import { useBurgerMenuContext } from "../../../../../../../../contexts/BurgerMenu.context";

type PlaylistItemProps = {
  playlistName: string;
  playlistID: string;
};

export const PlaylistItem = ({
  playlistName,
  playlistID,
}: PlaylistItemProps) => {
  const [Name, setName] = useState("");
  const [IsActive, setIsActive] = useState(false);

  const { CurrentPlaylistID } = usePlaylistsContext();
  const { setIsOpen } = useBurgerMenuContext();

  const history = useHistory();

  useEffect(() => {
    setName(playlistName);
  }, []);

  const handleRedirectToPlaylist = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
      setIsOpen(false);
    },
    []
  );

  useEffect(() => {
    if (CurrentPlaylistID === playlistID) setIsActive(true);
    else setIsActive(false);
  }, [CurrentPlaylistID]);
  return (
    <PlaylistItemLayout
      playlistName={Name}
      isActive={IsActive}
      playlistID={playlistID}
      handleRedirectToPlaylist={handleRedirectToPlaylist}
    />
  );
};

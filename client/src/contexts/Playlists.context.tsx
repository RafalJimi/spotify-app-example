import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";

type PlaylistsContextProps = {
  CurrentPlaylistID: string;
  PlaylistComponentIsMounted: boolean;
  setPlaylistComponentIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlaylistsContext = createContext<
  PlaylistsContextProps | undefined
>(undefined);

export const PlaylistsContextProvider: React.FC = ({ children }) => {
  const [CurrentPlaylistID, setCurrentPlaylistID] = useState("");
  const [PlaylistComponentIsMounted, setPlaylistComponentIsMounted] = useState(
    false
  );

  const location = useLocation();

  const memoizedValue = useMemo(
    () => ({
      CurrentPlaylistID,
      PlaylistComponentIsMounted,
      setPlaylistComponentIsMounted,
    }),
    [CurrentPlaylistID]
  );

  useEffect(() => {
    setCurrentPlaylistID(location.pathname.split("/")[3]);
  }, [location.pathname]);

  return (
    <PlaylistsContext.Provider value={memoizedValue}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export const usePlaylistsContext = () => {
  const ctx = useContext(PlaylistsContext);
  if (ctx === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return ctx;
};

import React, { useState, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useClickOutside } from "../../../../../../../../hooks/useClickOutside";
import { MenuLayout } from "./layout";

type MenuProps = {
  artist: string;
  album: string;
};

export const Menu = ({ artist, album }: MenuProps) => {
  const [IsOpen, setIsOpen] = useState(false);

  const divRef = useRef<HTMLElement>(null);
  const history = useHistory();

  const handleOpenMenu = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(true);
    },
    [IsOpen]
  );

  const handleMenuItem = useCallback(
    (category: string) => (e: React.MouseEvent) => {
      if (category === "artist") {
        history.push(`/player/artist/${artist.replace(/ /g, "_")}`);
        setIsOpen(false);
      } else {
        history.push(`/player/album/${album.replace(/ /g, "_")}`);
        setIsOpen(false);
      }
    },
    [IsOpen]
  );

  const handleClickOutside = useCallback(
    (event) => {
      setIsOpen(false);
    },
    [IsOpen]
  );

  useClickOutside(divRef, handleClickOutside);

  return (
    <MenuLayout
      isOpen={IsOpen}
      ref={divRef}
      handleOpenMenu={handleOpenMenu}
      handleMenuItem={handleMenuItem}
    />
  );
};

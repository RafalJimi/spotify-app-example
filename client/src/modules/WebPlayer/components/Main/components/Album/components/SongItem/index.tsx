import React, { useState, useCallback, useEffect } from "react";
import { useModalContext } from "../../../../context/modalContext";
import { SongItemLayout } from "./layout";

export const SongItem = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const { isOpen, setIsOpen } = useModalContext();

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      setMenuIsOpen(!MenuIsOpen);
      setIsOpen(!isOpen);
    },
    [MenuIsOpen, isOpen]
  );

  useEffect(() => {
    if (!isOpen) setMenuIsOpen(false);
  }, [isOpen]);

  return (
    <SongItemLayout menuIsOpen={MenuIsOpen} handleOnClick={handleOnClick} />
  );
};

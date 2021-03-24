import React, { useCallback, useRef } from "react";
import { useBurgerMenuContext } from "../../../../contexts/BurgerMenu.context";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { BurgerMenuLayout } from "./layout";

export const BurgerMenu = () => {
  const { isOpen, setIsOpen } = useBurgerMenuContext();

  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = useCallback(
    (event) => {
      setIsOpen(false);
    },
    [isOpen]
  );

  useClickOutside(ref, handleClickOutside);

  return <BurgerMenuLayout isOpen={isOpen} ref={ref} />;
};

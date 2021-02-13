import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import disableScroll from "disable-scroll";

type BurgerMenuContextProps = {
  isOpen: boolean;
  handleBurgerMenu: (e: React.MouseEvent) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BurgerMenuContext = createContext<
  BurgerMenuContextProps | undefined
>(undefined);

export const BurgerMenuContextProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerMenu = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [isOpen]);

  const memoizedValue = useMemo(
    () => ({
      isOpen,
      handleBurgerMenu,
      setIsOpen,
    }),
    [isOpen, handleBurgerMenu]
  );

  return (
    <BurgerMenuContext.Provider value={memoizedValue}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export const useBurgerMenuContext = () => {
  const ctx = useContext(BurgerMenuContext);
  if (ctx === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return ctx;
};

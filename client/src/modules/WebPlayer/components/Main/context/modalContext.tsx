import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import disableScroll from "disable-scroll";

type ModalContextProps = {
  isOpen: boolean;
  handleModal: (e: React.MouseEvent) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = useCallback(
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
      handleModal,
      setIsOpen,
    }),
    [isOpen, handleModal]
  );

  return (
    <ModalContext.Provider value={memoizedValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (ctx === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return ctx;
};

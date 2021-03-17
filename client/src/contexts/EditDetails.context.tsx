import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import disableScroll from "disable-scroll";

type EditDetailsContextProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditDetails: (e: React.MouseEvent) => void;
};

export const EditDetailsContext = createContext<
  EditDetailsContextProps | undefined
>(undefined);

export const EditDetailsContextProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEditDetails = useCallback(
    (event) => {
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
      handleEditDetails,
      setIsOpen,
    }),
    [isOpen]
  );

  return (
    <EditDetailsContext.Provider value={memoizedValue}>
      {children}
    </EditDetailsContext.Provider>
  );
};

export const useEditDetailsContext = () => {
  const ctx = useContext(EditDetailsContext);
  if (ctx === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return ctx;
};

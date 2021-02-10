import React, { useState, useCallback } from "react";
import { MainLayout } from "./layout";

export const Main = () => {
  const [Modal, setModal] = useState(false);

  const handleModal = useCallback(
    (e: React.MouseEvent) => {
      setModal(!Modal);
    },
    [Modal]
  );

  /* const [XPos, setXPos] = useState("0px");
    const [YPos, setYPos] = useState("0px");
    const [ShowMenu, setShowMenu] = useState(false);
    const [CloseModal, setCloseModal] = useState(false); */

  /* const handleRMB = useCallback((e: any) => {
      setXPos(e.clientX);
      setYPos(e.clientY);
    }, []); */

  return (
      <MainLayout isOpen={Modal} handleIsOpen={handleModal} />
  );
};;

import React from "react";
import { useModalContext } from "../../context/modalContext";
import { ModalLayout } from "./layout";

export const Modal = () => {
  const { isOpen, handleModal } = useModalContext();

  return <ModalLayout isOpen={isOpen} handleModal={handleModal} />;
};

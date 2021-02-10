import React from "react";
import { ModalContainer } from "./layout.styled";

type ModalLayout = {
  isOpen: boolean;
  handleModal: (e: React.MouseEvent) => void;
};

export const ModalLayout = ({ isOpen, handleModal }: ModalLayout) => {
  return <ModalContainer isOpen={isOpen} onClick={handleModal} />;
};

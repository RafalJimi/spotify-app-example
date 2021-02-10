import styled from "styled-components";

type ModalContainerProps = {
  isOpen: boolean;
};

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  left: 0px;
  top: 0px;
  background-color: transparent;
  width: 100vw;
  height: calc(100vh - 90px);
  z-index: 5;
`;

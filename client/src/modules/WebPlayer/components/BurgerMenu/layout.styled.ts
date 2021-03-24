import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: none;

  @media ${width[990]} {
    display: flex;
    left: 0;
    top: 0;
    position: fixed;
    width: 230px;
    z-index: 10;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #00000080;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0%)" : "translateX(-100%)"};
    transition: ${({ isOpen }) =>
      isOpen
        ? "opacity .2s ease-in-out .1s, transform .01s ease-in"
        : "opacity .2s ease-in-out, transform .5s ease-in .2s"};
  }
`;

export const BurgerMenuContainer = styled.div<ContainerProps>`
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 230px;
  height: 100vh;
  background-color: black;
  z-index: 2;

  @media ${width[470]} {
    width: 100%;
  }
`;

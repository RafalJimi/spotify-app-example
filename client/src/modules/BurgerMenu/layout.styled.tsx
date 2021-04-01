import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.nav<ContainerProps>`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: transparent;
  right: 0;
  top: 0;
  width: 500px;
  height: 100vh;
  text-align: left;
  z-index: 7;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: transform 0.1s linear;
  transform: translateX(-100%);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  transition: ${({ isOpen }) =>
    isOpen
      ? "opacity .2s ease-in-out, transform .01s ease-in"
      : "opacity .2s ease-in-out, transform .01s ease-in .5s"};

  @media ${width[500]} {
    width: 100vw;
  }
`;

export const Menu = styled.menu`
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  padding-top: 40px;

  @media ${width[500]} {
    width: 100%;
  }
`;

export const MenuItem = styled.div`
  font-size: 2.4em;
  font-weight: 500;
  margin: 0px 0px 10px 30px;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.lightGreen};
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  bottom: 30px;
  margin-left: 20px;

  img {
    width: 110px;
    filter: brightness(100);
  }
`;

export const Close = styled.div`
  width: calc(100% - 400px);
  height: 100%;
  background-color: #00000099;

  @media ${width[500]} {
    display: none;
  }
`;

import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 85px 0px 90px 35px;
  overflow-y: hidden;
  height: auto;

  @media ${width[990]} {
    padding: 85px 25px 120px 25px;
  }
`;

export const ButtonsContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: auto;
  height: auto;
  padding: 0px 30px;

  @media ${width[990]} {
    padding: 0px 10px;
  }
`;

type OptionsButtonProps = {
  isPlayButton?: boolean;
};

export const OptionsButton = styled.div<OptionsButtonProps>`
  height: 55px;
  width: 55px;
  color: #a5a5a5;
  font-size: 1.4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: ${({ isPlayButton }) => (isPlayButton ? "20px" : "0px")};

  i {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  :hover {
    color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }

  @media ${width[750]} {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: ${({ isPlayButton }) => (isPlayButton ? "20px" : "0px")};

    :hover {
      box-shadow: none;
    }
  }

  @media ${width[500]} {
    height: 45px;
    width: 45px;
    font-size: 1.2em;
  }
`;

type MenuContainerProps = {
  isOpen: boolean;
};

export const MenuContainer = styled.menu<MenuContainerProps>`
  position: absolute;
  height: auto;
  width: 200px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background.optionsMenu};
  transform: translate(120px, 45px);
  padding: 5px 5px;
  margin: 0px;
  border-radius: 3px;
  z-index: 100;

  @media ${width[500]} {
    width: 150px;
    transform: translate(100px, 45px);
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  font-size: 0.7em;
  color: ${(props) => props.theme.color.secondary};
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  :hover {
    background-color: #ffffff10;
  }
`;
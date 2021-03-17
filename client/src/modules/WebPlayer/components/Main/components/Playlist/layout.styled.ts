import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 85px 35px 90px 35px;
  overflow-y: hidden;
  height: auto;
`;

export const ButtonsContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: auto;
  height: auto;
  padding: 0px 30px;
`;

type OptionsButtonProps = {
  isPlayButton?: boolean;
};

export const OptionsButton = styled.div<OptionsButtonProps>`
  height: 55px;
  width: 55px;
  margin: 20px 0px 30px 0px;
  color: #a5a5a5;
  font-size: 1.4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: none;
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
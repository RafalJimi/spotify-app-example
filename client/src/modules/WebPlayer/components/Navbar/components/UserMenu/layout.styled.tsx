import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  @media ${width[990]} {
    width: 40px;
    margin-right: 30px;
  }
`;

type PanelProps = {
  isOpen: boolean;
};

export const Panel = styled.div<PanelProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ isOpen }) => (isOpen ? "#282828" : "black")};

  :hover {
    cursor: pointer;
    background-color: #282828;
  }
`;

export const UserImgContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  img {
    height: 100%;
  }

  @media ${width[990]} {
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
  }
`;

export const NameContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${(props) => props.theme.color.secondary};
  font-size: 0.8em;
  font-weight: 700;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.secondary};
  margin: 0px 10px;

  @media ${width[990]} {
    display: none;
  }
`;

type UserMenuProps = {
  isOpen: boolean;
};

export const UserMenu = styled.div<UserMenuProps>`
  width: 160px;
  height: 90px;
  position: absolute;
  background-color: #282828;
  top: 50px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: -1px 6px 15px 3px #000000;
  box-shadow: -1px 6px 15px 3px #000000;
  border-radius: 3px;
  padding: 5px 5px;

  @media ${width[990]} {
    display: none;
  }
`;

export const UserMenuItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #b7b7b7;
  padding-left: 15px;
  font-size: 0.9em;
  font-weight: 500;

  :hover {
    color: ${(props) => props.theme.color.secondary};
    background-color: #ffffff20;
    cursor: pointer;
  }
`;

import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  @media ${width[990]} {
    width: 40px;
    margin-right: 30px;
  }
`;

export const Panel = styled.div`
  display: flex;
  width: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;

  :hover {
    cursor: pointer;
  }
`;

export const UserImgContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
  }

  @media ${width[990]} {
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
  }
`;

export const ProfileContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media ${width[990]} {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${width[990]} {
    display: none;
  }
`;

type UserMenuProps = {
  isOpen: boolean;
};

export const UserMenu = styled.div<UserMenuProps>`
  width: 150px;
  height: 80px;
  position: absolute;
  background-color: ${(props) => props.theme.background.main};
  top: 70px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: -4px 5px 33px -8px rgba(0, 0, 0, 0.51);
  box-shadow: -4px 5px 33px -8px rgba(0, 0, 0, 0.51);
  border-radius: 5px;

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
  color: ${(props) => props.theme.color.primary};
  padding-left: 20px;

  :hover {
    color: ${(props) => props.theme.color.lightGreen};
    cursor: pointer;
  }
`;

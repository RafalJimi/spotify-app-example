import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  overflow: hidden;

  @media ${width[990]} {
    margin-left: 40px;
  }

  @media ${width[750]} {
    justify-content: flex-start;
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 15px;
  background-color: ${(props) => props.theme.color.primary};

  i {
    color: ${(props) => props.theme.color.secondary};
  }

  :hover {
    cursor: pointer;
  }
`;

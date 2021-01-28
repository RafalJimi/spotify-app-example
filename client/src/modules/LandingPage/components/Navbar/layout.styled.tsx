import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  z-index: 5;

  @media ${width[990]} {
    height: 50px;
  }
`;

export const NavbarContent = styled.nav`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  padding: 0px 10px 0px 5px;

  @media ${width[1200]} {
    width: 1000px;
  }

  @media ${width[990]} {
    width: 750px;
  }

  @media ${width[750]} {
    width: 100%;
  }
`;
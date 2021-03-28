import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

type ContainerProps = {
  background: string;
};

export const Container = styled.nav<ContainerProps>`
  position: fixed;
  right: 0px;
  top: 0px;
  width: calc(100% - 230px);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  padding: 0px 35px;
  background-color: ${({ background }) => background};

  @media ${width[990]} {
    width: calc(100%);
  }
`;

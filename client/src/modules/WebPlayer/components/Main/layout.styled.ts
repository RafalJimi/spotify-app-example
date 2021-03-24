import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const Container = styled.main`
  display: flex;
  margin-left: 230px;
  width: calc(100vw - 230px);
  min-height: 100%;
  background: rgb(22, 20, 20);
  background: linear-gradient(
    274deg,
    rgba(22, 20, 20, 1) 0%,
    rgba(18, 18, 18, 1) 100%
  );
  z-index: 1;

  @media ${width[990]} {
    margin-left: 0px;
    width: calc(100vw);
  }
`;

import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 85px 35px 90px 35px;
  overflow-y: hidden;
  height: auto;

  @media ${width[990]} {
    padding: 85px 25px 120px 25px;
  }
`;
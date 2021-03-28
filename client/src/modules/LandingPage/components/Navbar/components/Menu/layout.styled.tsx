import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  font-size: 0.95em;
  font-weight: 700;
  letter-spacing: 0.5px;

  span {
    width: 50%;
    text-align: center;
  }

  span:hover {
    color: #1ed760;
    cursor: pointer;
  }

  @media ${width[990]} {
    display: none;
  }
`;

import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  padding-top: 30px;

  @media ${width[470]} {
    width: 100vw;
    padding: 30px 10px 0px 10px;
  }
`;

export const ReferenceTitle = styled.span`
  color: ${(props) => props.theme.color.primary};
  font-size: 1.1em;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ReferenceButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  margin-top: 10px;
  border: ${(props) => props.theme.border.google};
  background-color: ${(props) => props.theme.background.main};
  color: ${(props) => props.theme.color.tertiary};
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.95em;
  transition: background-color 0.2s, color 0.2s;

  :focus {
    outline: none;
    border: none;
  }

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.background.google_hover};
    color: ${(props) => props.theme.color.secondary};
  }
`;

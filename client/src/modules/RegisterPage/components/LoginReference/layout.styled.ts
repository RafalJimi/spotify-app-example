import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const LoginReferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  padding-top: 30px;

  @media only screen and ${width[470]} {
    width: 100vw;
    padding: 30px 10px 0px 10px;
  }
`;

export const ReferenceTitle = styled.span`
  color: ${(props) => props.theme.color.primary};
  font-size: 0.95em;
  font-weight: 400;
  margin-bottom: 10px;

  span {
    text-decoration: underline;
    color: ${(props) => props.theme.background.success};
  }

  span:hover {
    color: ${(props) => props.theme.background.success2};
    cursor: pointer;
  }
`;

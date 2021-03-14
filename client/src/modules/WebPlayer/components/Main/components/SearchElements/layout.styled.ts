import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  color: ${(props) => props.theme.color.secondary};
  margin: 20px 0px 20px 0px;
  font-size: 0.9em;
  letter-spacing: 0.5px;
  h1 {
    margin-bottom: 20px;
  }
`;

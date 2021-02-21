import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 260px;
  font-size: 0.9em;
  color: ${(props) => props.theme.color.secondary};
`;

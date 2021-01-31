import styled from "styled-components";

export const PlayerContainer = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90px;
  background-color: ${(props) => props.theme.webPlayer.secondaryBackground};
  border-top: ${(props) => props.theme.webPlayer.border};
  z-index: 5;
`;

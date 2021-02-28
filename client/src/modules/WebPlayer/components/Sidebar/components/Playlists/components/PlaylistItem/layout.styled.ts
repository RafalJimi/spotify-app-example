import styled from "styled-components";

interface PlaylistItemContainerProps {
  readonly focus?: boolean;
}

export const PlaylistItemContainer = styled.form<PlaylistItemContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;
    font-size: 0.85em;
    padding: 10px 15px;
    letter-spacing: 0.5px;
    color: ${(props) =>
      props.focus ? props.theme.color.primary : props.theme.color.lightGray};
    background-color: ${(props) =>
      props.focus ? props.theme.color.secondary : props.theme.color.primary};
    border: none;
    outline: none;
  }

  input:hover {
    cursor: ${(props) => (props.focus ? "text" : "pointer")};
  }
`;

export const OptionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 200px;
  opacity: 1;
  background-color: ${(props) => props.theme.background.optionsMenu};
  padding: 5px 5px;
  border-radius: 3px;
  z-index: 10;
  -webkit-box-shadow: -7px 9px 24px 0px rgba(0, 0, 0, 0.62);
  box-shadow: -7px 9px 24px 0px rgba(0, 0, 0, 0.62);
`;

export const Option = styled.div`
  width: 100%;
  padding: 10px 10px;
  color: ${(props) => props.theme.color.lightGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  :hover {
    color: ${(props) => props.theme.color.secondary};
    background-color: #ffffff10;
  }

  span > div {
    display: none;
  }

  :hover > div {
    display: flex;
  }
`;

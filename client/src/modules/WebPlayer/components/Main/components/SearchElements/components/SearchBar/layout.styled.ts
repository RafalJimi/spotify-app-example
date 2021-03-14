import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 5px;
  button {
    width: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    :hover {
      cursor: pointer;
    }
  }
  form {
    display: flex;
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.color.primary};
    font-size: 1.1em;
    font-weight: 500;
    padding-left: 10px;
  }
`;

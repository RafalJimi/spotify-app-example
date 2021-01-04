import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;

  @media only screen and ${width[470]} {
    width: 100vw;
    padding: 0px 10px;
  }
`;

export const InputTitle = styled.div`
  width: 100%;
  display: flex;
  font-weight: 700;
  font-size: 0.95em;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1em;
  padding-left: 10px;
  outline: none;
  border: ${(props) => props.theme.border.input};
  border-radius: 3px;
  transition: border 0.2s;
  margin-bottom: 5px;

  :focus {
    outline: none;
    border: ${(props) => props.theme.border.input_hover};
  }
`;

export const InputError = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 300;
  font-size: 0.95em;
  margin-bottom: 5px;
  font-size: 0.8em;
  color: ${(props) => props.theme.color.error};
  letter-spacing: 0.5px;
`;

export const ForgotPasswordReference = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  font-weight: 100;
  font-size: 0.95em;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.color.tertiary};
  text-decoration: underline;
  transition: color 0.2s;
  margin: 10px 0px 20px 0px;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.success};
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 20px 0px;

  button {
    width: 45%;
    background-color: ${(props) => props.theme.background.success};
    border: none;
    outline: none;
    height: 50px;
    color: ${(props) => props.theme.color.secondary};
    border-radius: 25px;
    transition: background-color 0.2s;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-size: 0.9em;

    :hover {
      background-color: ${(props) => props.theme.background.success2};
      cursor: pointer;
    }
  }

  input[type="checkbox"] {
    position: relative;
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.color.success};
    border: ${(props) => props.theme.border.checkbox};
    border-radius: 4px;
    appearance: none;
    outline: 0;
    cursor: pointer;
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: -2px;
      left: 4px;
      width: 8px;
      height: 14px;
      border-style: solid;
      border-color: ${(props) => props.theme.color.secondary};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
    &:checked {
      color: ${(props) => props.theme.color.secondary};
      border-color: ${(props) => props.theme.color.success};
      background: ${(props) => props.theme.color.success};
      &::before {
        opacity: 1;
      }
      ~ label::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  }

  label > input {
    margin-right: 10px;
  }

  label > span {
    color: ${(props) => props.theme.color.tertiary};
    font-size: 0.95em;
    letter-spacing: 0px;
    font-weight: 300;
  }

  @media only screen and ${width[470]} {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: ${(props) => props.theme.border.break};
`;

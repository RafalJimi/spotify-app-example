import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  padding-top: 20px;

  @media ${width[470]} {
    width: 100%;
    padding: 0px 10px;
  }
`;

export const FormHeader = styled.h3`
  margin-bottom: 20px;
  font-size: 1.15em;
`;

export const InputTitle = styled.div`
  width: 100%;
  display: flex;
  font-weight: 700;
  font-size: 0.9em;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  font-size: 0.9em;
  padding-left: 15px;
  outline: none;
  border: ${(props) => props.theme.border.input};
  border-radius: 3px;
  margin-bottom: 5px;

  :focus {
    outline: none;
    border: ${(props) => props.theme.border.input_hover};
  }
`;

export const InputError = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  margin-bottom: 5px;
  font-size: 0.7em;
  color: ${(props) => props.theme.color.error};
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

export const InputAnnotation = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  margin-bottom: 5px;
  font-size: 0.8em;
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

export const BirthDayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .day {
    display: flex;
    flex-direction: column;
    width: 20%;
  }

  .day > span {
    margin-bottom: 10px;
  }

  .month {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  .month > span {
    margin-bottom: 10px;
  }

  .month > select {
    width: 100%;
    height: 45px;
    font-size: 0.9em;
    padding-left: 15px;
    outline: none;
    border: ${(props) => props.theme.border.input};
    border-radius: 3px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.color.tertiary};

    :focus {
      outline: none;
      border: ${(props) => props.theme.border.input_hover};
    }
  }

  .option {
    font-size: 0.9em;
  }

  .year {
    display: flex;
    flex-direction: column;
    width: 20%;
  }

  .year > span {
    margin-bottom: 10px;
  }
`;

export const GenderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;

  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -99px;
  }
  [type="radio"]:checked + span,
  [type="radio"]:not(:checked) + span {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: black;
  }
  [type="radio"]:checked + span:before,
  [type="radio"]:not(:checked) + span:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: ${(props) => props.theme.border.input};
    border-radius: 100%;
    background: ${(props) => props.theme.background.main};
  }
  [type="radio"]:checked + span:after,
  [type="radio"]:not(:checked) + span:after {
    content: "";
    width: 6px;
    height: 6px;
    background: ${(props) => props.theme.background.success};
    position: absolute;
    top: 7px;
    left: 7px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + span:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(2);
  }
  [type="radio"]:checked + span:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    background: ${(props) => props.theme.background.success};
  }

  label {
    margin-right: 30px;
  }

  label > span {
    font-size: 0.85em;
    font-weight: 400;
  }

  label > input {
    margin-top: 3px;
  }
`;

export const RulesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0px 10px 0px;

  input[type="checkbox"] {
    position: relative;
    width: 17px;
    height: 17px;
    color: ${(props) => props.theme.color.success};
    border: ${(props) => props.theme.border.break};
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
      width: 4px;
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
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }

  label > input {
    margin-right: 10px;
  }

  label > p {
    color: ${(props) => props.theme.color.primary};
    letter-spacing: 0px;
    font-weight: 400;
    width: 100%;
    font-size: 0.8em;
    letter-spacing: 0.3px;
  }

  label > p > span {
    text-decoration: underline;
    color: ${(props) => props.theme.background.success};
  }

  label > p > span:hover {
    color: ${(props) => props.theme.background.success2};
  }

  @media ${width[470]} {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  width: 98%;
  background-color: ${(props) => props.theme.background.success};
  border: none;
  outline: none;
  height: 50px;
  color: ${(props) => props.theme.color.secondary};
  border-radius: 25px;
  transition: background-color 0.2s, width 0.2s;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.9em;
  margin-top: 10px;

  :hover {
    background-color: ${(props) => props.theme.background.success2};
    cursor: pointer;
    width: 100%;
  }
`;

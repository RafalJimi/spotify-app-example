import React from "react";
import styled, { StyledFunction } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90px;
  z-index: 5;
`;

export const PlayerButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space;
  justify-content: space-between;
  height: 50%;
  padding-top: 5px;
`;

type ButtonProps = {
  readonly prop?: boolean;
};

export const Button = styled.div<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.prop ? props.theme.color.lightGreen : props.theme.color.lightGray};
  font-size: 0.8em;
  font-weight: 100;
  width: 30px;
  height: 30px;
  margin: 0px 10px;

  :hover {
    cursor: pointer;
    color: ${(props) =>
      props.prop ? props.theme.color.lightGreen : props.theme.color.secondary};
  }
`;

export const PlayButton = styled(Button)`
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.lightGray};
  border-radius: 20px;
  padding-left: 2px;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.secondary};
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 39vw;
  margin: 0px 5px;
  height: 25%;
`;

export const TimeContainer = styled.div`
  font-size: 0.8em;
  color: ${(props) => props.theme.color.lightGray};
  margin: 0px 10px;
`;

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 2px;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    overflow: hidden;
    background-color: black;
    border-radius: 3px;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100px;
    height: 4px;
    cursor: pointer;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
    background: #868686;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.5px;
  }

  input[type="range"]::-moz-range-track {
    width: 100px;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    width: 100px;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-ms-fill-lower {
    background: #0d1f2e;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  }

  input[type="range"]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  }

  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
    height: 8.4px;
  }

  input[type="range"]:focus::-ms-fill-lower {
    background: #3071a9;
  }

  input[type="range"]:focus::-ms-fill-upper {
    background: #96bee1;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
    height: 8.4px;
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: -450px 0 0 450px #b3b3b3;
  }

  input[type="range"]:hover::-webkit-slider-thumb {
    box-shadow: -450px 0 0 450px #1ed760;
  }
`;

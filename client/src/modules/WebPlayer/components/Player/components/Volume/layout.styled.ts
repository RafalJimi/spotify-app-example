import styled from "styled-components";

export const VolumeContainer = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type IconProps = {
  readonly muted: boolean;
};

export const Icon = styled.div<IconProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
   
    props.muted ? props.theme.color.error : props.theme.color.lightGray};
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 3.8px 0;
    overflow: hidden;
    background-color: #404040;
    border-radius: 2px;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 300px;
    height: 3px;
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
    width: 300px;
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
    width: 300px;
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

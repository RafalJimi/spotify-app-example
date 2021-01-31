import React from "react";
import {
  ButtonsContainer,
  PlayerButtonsContainer,
  Button,
  PlayButton,
  ProgressBarContainer,
  TimeContainer,
  BarContainer,
} from "./layout.styled";

export const ButtonsLayout = () => (
  <ButtonsContainer>
    <PlayerButtonsContainer>
      <Button>
        <i className="fas fa-random"></i>
      </Button>
      <Button>
        <i className="fas fa-step-backward"></i>
      </Button>
      <PlayButton>
        <i className="fas fa-play"></i>
      </PlayButton>
      <Button>
        <i className="fas fa-step-forward"></i>
      </Button>
      <Button>
        <i className="fas fa-undo"></i>
      </Button>
    </PlayerButtonsContainer>
    <ProgressBarContainer>
      <TimeContainer>0:00</TimeContainer>
      <BarContainer>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={0.5}
          onChange={() => {}}
        />
      </BarContainer>
      <TimeContainer>0:00</TimeContainer>
    </ProgressBarContainer>
  </ButtonsContainer>
);

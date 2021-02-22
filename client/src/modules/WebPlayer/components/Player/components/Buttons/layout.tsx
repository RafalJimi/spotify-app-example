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
import {
  Duration,
  millisToMinutesAndSeconds,
  alreadyPlayed,
} from "../../../../../../helpers/duration";

type ButtonsLayoutProps = {
  play: boolean;
  handleSetPlay: (e: React.MouseEvent) => void;
  played: number;
  playedInSecs: number;
  SongLengthInSecs: number;
  duration: number;
  loop: boolean;
  handleSetLoop: (e: React.MouseEvent) => void;
  shuffle: boolean;
  handleSetShuffle: (e: React.MouseEvent) => void;
  handleSeekTo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: (e: React.MouseEvent) => void;
  handlePrev: (e: React.MouseEvent) => void;
  handleSetRemaining: (e: React.MouseEvent) => void;
  showRemaining: boolean;
};

export const ButtonsLayout = ({
  play,
  handleSetPlay,
  played,
  playedInSecs,
  SongLengthInSecs,
  duration,
  loop,
  handleSetLoop,
  shuffle,
  handleSetShuffle,
  handleSeekTo,
  handleNext,
  handlePrev,
  handleSetRemaining,
  showRemaining,
}: ButtonsLayoutProps) => (
  <ButtonsContainer>
    <PlayerButtonsContainer>
      <Button prop={shuffle} onClick={handleSetShuffle}>
        <i className="fas fa-random"></i>
      </Button>
      <Button onClick={handlePrev}>
        <i className="fas fa-step-backward"></i>
      </Button>
      <PlayButton onClick={handleSetPlay}>
        {play ? (
          <i
            style={{ paddingLeft: "0px", paddingRight: "2px" }}
            className="fas fa-pause"
          ></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </PlayButton>
      <Button onClick={handleNext}>
        <i className="fas fa-step-forward"></i>
      </Button>
      <Button prop={loop} onClick={handleSetLoop}>
        <i className="fas fa-undo"></i>
      </Button>
    </PlayerButtonsContainer>
    <ProgressBarContainer>
      {showRemaining ? (
        <TimeContainer onClick={handleSetRemaining}>
          - {alreadyPlayed(SongLengthInSecs - playedInSecs)}
        </TimeContainer>
      ) : (
        <TimeContainer onClick={handleSetRemaining}>
          {alreadyPlayed(playedInSecs)}
        </TimeContainer>
      )}
      <BarContainer>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={handleSeekTo}
        />
      </BarContainer>
      <TimeContainer onClick={handleSetRemaining}>
        {showRemaining ? (
          "00:00"
        ) : (
          <Duration className={"test"} seconds={duration} />
        )}
      </TimeContainer>
    </ProgressBarContainer>
  </ButtonsContainer>
);

import React from "react";
import { Container, Icon, Bar } from "./layout.styled";

type VolumeLayoutProps = {
  volume: number;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  muted: boolean;
  handleSetMuted: (e: React.MouseEvent) => void;
  VolumeIcon: string;
};

export const VolumeLayout = ({
  volume,
  handleVolumeChange,
  muted,
  handleSetMuted,
  VolumeIcon,
}: VolumeLayoutProps) => (
  <Container>
    <Icon onClick={handleSetMuted} muted={muted}>
      <i className={VolumeIcon}></i>
    </Icon>
    <Bar className="volumeElement">
      <input
        type="range"
        min={0}
        max={1}
        step="any"
        value={volume}
        onChange={handleVolumeChange}
      />
    </Bar>
  </Container>
);

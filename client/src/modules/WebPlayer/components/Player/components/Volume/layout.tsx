import React from "react";
import { VolumeContainer, Icon, Bar } from "./layout.styled";

export const VolumeLayout = () => (
  <VolumeContainer>
    <Icon>
      <i className="fas fa-volume-off"></i>
    </Icon>
    <Bar className="volumeElement">
      <input
        type="range"
        min={0}
        max={1}
        step="any"
        value={0.5}
        onChange={() => {}}
      />
    </Bar>
  </VolumeContainer>
);

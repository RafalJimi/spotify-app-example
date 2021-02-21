import React, { useState, useCallback, useEffect } from "react";
import { VolumeLayout } from "./layout";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";

export const Volume = () => {
  const [VolumeIcon, setVolumeIcon] = useState("");
  const { Volume, setVolume, Muted, handleSetMuted } = useReactPlayerContext();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value);
    setVolume(value);
  };

  const handleSetVolumeIcon = useCallback(() => {
    if (Muted) setVolumeIcon("fas fa-volume-mute");
    else if (Volume === 0) setVolumeIcon("fas fa-volume-off");
    else if (Volume > 0 && Volume <= 0.6) setVolumeIcon("fas fa-volume-down");
    else if (Volume > 0.6) setVolumeIcon("fas fa-volume-up");
  }, [Volume, Muted]);

  useEffect(() => {
    handleSetVolumeIcon();
  }, [Volume, Muted]);

  return (
    <VolumeLayout
      volume={Volume}
      handleVolumeChange={handleVolumeChange}
      muted={Muted}
      handleSetMuted={handleSetMuted}
      VolumeIcon={VolumeIcon}
    />
  );
};

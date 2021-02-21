import React, { useMemo } from "react";

export const Duration: React.FC<{ className?: string; seconds: number }> = ({
  className,
  seconds,
}) => {
  const memoizedValue = useMemo(() => format(seconds), [seconds]);

  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {memoizedValue}
    </time>
  );
};

function format(seconds: number): string {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
}

function pad(number: number): string {
  return ("0" + number).slice(-2);
}

export const millisToMinutesAndSeconds = (millis: number) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  //@ts-ignore
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const alreadyPlayed = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.ceil(time - Math.floor(time / 60));
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

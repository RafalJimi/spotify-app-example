import React from "react";
import { ServerErrorLayout } from "./layout";

export type ServerErrorProps = {
  error: string;
};

export const ServerError = ({ error }: ServerErrorProps) => {
  return <ServerErrorLayout error={error} />;
};

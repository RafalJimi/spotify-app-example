import React from "react";
import { SectionLayout } from "./layout";

export type SectionProps = {
  title: string;
  subtitle?: string;
  children: JSX.Element | undefined;
};

export const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <SectionLayout title={title} subtitle={subtitle} children={children} />
  );
};

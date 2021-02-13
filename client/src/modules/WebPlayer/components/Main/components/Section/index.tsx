import React, { ReactFragment } from "react";
import { SectionLayout } from "./layout";

export type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactFragment;
};

export const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <SectionLayout title={title} subtitle={subtitle} children={children} />
  );
};

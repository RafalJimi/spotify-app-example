import React from "react";
import { SectionProps } from "./index";
import { Section, SectionTitle, SectionSubtitle } from "./layout.styled";

export const SectionLayout = ({ title, subtitle, children }: SectionProps) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
    {children}
  </Section>
);

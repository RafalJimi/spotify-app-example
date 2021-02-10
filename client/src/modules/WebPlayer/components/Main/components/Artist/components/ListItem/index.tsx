import React from "react";
import { ListItemLayout } from "./layout";

type ListItemProps = {
  borderRadius?: number;
};

export const ListItem = ({ borderRadius }: ListItemProps) => {
  return <ListItemLayout borderRadius={borderRadius} />;
};

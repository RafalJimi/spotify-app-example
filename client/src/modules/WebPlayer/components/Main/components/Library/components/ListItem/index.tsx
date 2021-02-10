import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { ListItemLayout } from "./layout";

type ListItemProps = {
  borderRadius?: number;
  location: string;
};

export const ListItem = ({ borderRadius, location }: ListItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push(location);
  }, []);

  return (
    <ListItemLayout borderRadius={borderRadius} handleOnClick={handleOnClick} />
  );
};

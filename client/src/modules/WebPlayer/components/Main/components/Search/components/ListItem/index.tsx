import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ListItemLayout } from "./layout";

type ListItemProps = {
  borderRadius?: number;
  location: string;
};

export const ListItem = ({ borderRadius, location }: ListItemProps) => {
  const history = useHistory();

  const handleOnClick = useCallback((e) => {
    /* history.push(location); */
    console.log(e);
    console.log("klikniete");
  }, []);

  return (
    <ListItemLayout borderRadius={borderRadius} handleOnClick={handleOnClick} />
  );
};

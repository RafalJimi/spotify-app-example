import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthRX } from "../../../../store/isAuth/selectors";
import { MainLayout } from "./layout";
import { toast } from "react-toastify";

export const Main = () => {
  const history = useHistory();

  const isAuth = useSelector(isAuthRX);

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      if (isAuth) history.push("/player");
      else toast.dark("You are not authenticated - please log in.");
    },
    [isAuth]
  );

  return <MainLayout handleOnClick={handleOnClick} />;
};

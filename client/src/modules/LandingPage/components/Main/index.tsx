import React, { useCallback } from "react";
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { isAuthRX } from "../../../../store/user/isAuth/selectors";
import { toast } from "react-toastify";
import { MainLayout } from "./layout";

export const Main = () => {
  
  const history = useHistory();
  
  const isAuth = useSelector(isAuthRX);
  
  const handleOnClick = useCallback(
    () => {
      if (isAuth) history.push("/player/home");
      else toast.dark("You are not authenticated - please log in.");
    },
    [],
  )
  
  return <MainLayout handleOnClick={handleOnClick} />;
};

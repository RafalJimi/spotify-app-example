import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { LoginFormLayout } from "./layout";

export const LoginForm = () => {
  const [Values, setValues] = useState({ login: "", password: "" });
  const [Changed, setChanged] = useState({ login: false, password: false });
  const [Errors, setErrors] = useState({ login: "", password: "" });
  const [IsChecked, setIsChecked] = useState(false);

  const history = useHistory();

  const handleValues = (input: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...Values, [input]: e.target.value });
  };

  useEffect(() => {
    if (!Changed.login) setChanged({ ...Changed, login: true });
    if (Changed.login) {
      if (!Values.login)
        setErrors({
          ...Errors,
          login: "Enter your Spotify username or email address.",
        });
      else
        setErrors({
          ...Errors,
          login: "",
        });
    }
  }, [Values.login]);

  useEffect(() => {
    if (!Changed.password) setChanged({ ...Changed, password: true });
    if (Changed.password) {
      if (!Values.password)
        setErrors({
          ...Errors,
          password: "Enter your password.",
        });
      else
        setErrors({
          ...Errors,
          password: "",
        });
    }
  }, [Values.password]);

  const handleCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!IsChecked);
    },
    [IsChecked]
  );

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Changed.login || !Values.login)
      setErrors({
        ...Errors,
        login: "Enter your Spotify username or email address.",
      });
    else if (!Changed.password || !Values.password)
      setErrors({
        ...Errors,
        password: "Enter your password.",
      });
    else
      console.log(
        "login:",
        Values.login,
        "password:",
        Values.password,
        "remember me:",
        IsChecked
      );
  };

  const handleRedirect = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return (
    <LoginFormLayout
      handleValues={handleValues}
      values={Values}
      errors={Errors}
      handleCheckbox={handleCheckbox}
      isChecked={IsChecked}
      handleOnSubmit={handleOnSubmit}
      handleRedirect={handleRedirect}
    />
  );
};

import React, {
  memo,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from "react";
import { email, onlyDigits } from "../../../../helpers/formats";
import { RegisterFormLayout } from "./layout";

export const RegisterForm = memo(() => {
  const [Values, setValues] = useState({
    email: "",
    email2: "",
    password: "",
    nickname: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  });

  const [Changed, setChanged] = useState({
    email: false,
    email2: false,
    password: false,
    nickname: false,
    day: false,
    month: false,
    year: false,
    gender: false,
    rules: false,
  });

  const [Errors, setErrors] = useState({
    email: "",
    email2: "",
    password: "",
    nickname: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    rules: "",
    form: "",
  });

  const [IsChecked, setIsChecked] = useState(false);

  const handleValue = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...Values, [key]: e.target.value });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...Values, month: e.target.value });
  };

  const handleError = (key: string, text: string) => {
    setErrors({ ...Errors, [key]: text });
  };

  const handleRulesCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!IsChecked);
    },
    [IsChecked]
  );

  useEffect(() => {
    if (!Changed.email) setChanged({ ...Changed, email: true });
    if (Changed.email) {
      if (!Values.email)
        handleError("email", "Please enter your e-mail address.");
      else if (!email.test(Values.email) && Changed.email)
        handleError("email", "Please enter a valid e-mail.");
      else handleError("email", "");
    }
  }, [Values.email]);

  useEffect(() => {
    if (!Changed.email2) setChanged({ ...Changed, email2: true });
    if (Changed.email2) {
      if (!Values.email2) handleError("email2", "Confirm your e-mail address.");
      else if (Values.email !== Values.email2)
        handleError("email2", "The e-mail addressess provided are different.");
      else handleError("email2", "");
    }
  }, [Values.email2]);

  useEffect(() => {
    if (!Changed.password) setChanged({ ...Changed, password: true });
    if (Changed.password) {
      if (!Values.password) handleError("password", "Enter your password.");
      else if (Values.password.length < 8)
        handleError("password", "Your password is too short.");
      else handleError("password", "");
    }
  }, [Values.password]);

  useEffect(() => {
    if (!Changed.nickname) setChanged({ ...Changed, nickname: true });
    if (Changed.nickname) {
      if (!Values.nickname)
        handleError("nickname", "Enter a username for your profile.");
      else if (Values.nickname.length < 3)
        handleError("nickname", "Your username is too short.");
      else handleError("nickname", "");
    }
  }, [Values.nickname]);

  useEffect(() => {
    if (!Changed.day) setChanged({ ...Changed, day: true });
    if (Changed.day) {
      if (
        !onlyDigits.test(Values.day) ||
        parseInt(Values.day) <= 0 ||
        parseInt(Values.day) >= 32
      )
        handleError("day", "Enter the correct day of the month.");
      else handleError("day", "");
    }
  }, [Values.day]);

  useEffect(() => {
    if (!Changed.month) setChanged({ ...Changed, month: true });
    if (Changed.month) {
      if (Values.month === "0")
        handleError("month", "Please select a month from the list.");
      else handleError("month", "");
    }
  }, [Values.month]);

  useEffect(() => {
    if (!Changed.year) setChanged({ ...Changed, year: true });
    if (Changed.year) {
      if (
        !onlyDigits.test(Values.year) ||
        parseInt(Values.year) <= 1920 ||
        parseInt(Values.year) >= 2021
      )
        handleError("year", "Please enter a valid year.");
      else handleError("year", "");
    }
  }, [Values.year]);

  useEffect(() => {
    if (!Changed.gender) setChanged({ ...Changed, gender: true });
  }, [Values.gender]);

  useEffect(() => {
    if (!Changed.rules) setChanged({ ...Changed, rules: true });
    else if (Changed.rules) {
      if (!IsChecked) handleError("rules", "Accept the terms to continue.");
      else handleError("rules", "");
    }
  }, [IsChecked]);

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const notChanged = Object.keys(Changed).filter((k) =>
        //@ts-ignore
        Changed[k] === false ? k.toString() : null
      );

      const isError = Object.keys(Errors).filter((k) =>
        //@ts-ignore
        Errors[k] !== "" ? k.toString() : null
      );

      if (notChanged.length !== 0) {
        setErrors({ ...Errors, form: "Please fill all fields." });
        setTimeout(() => setErrors({ ...Errors, form: "" }), 5000);
      } else if (notChanged.length === 0 && isError.length !== 0) {
        console.log("Fix errors");
      } else if (notChanged.length === 0 && isError.length === 0) {
        console.log("dispatch action");
      }
    },
    [Values, Changed, Errors]
  );

  return (
    <RegisterFormLayout
      handleValue={handleValue}
      handleSelect={handleSelect}
      handleRulesCheckbox={handleRulesCheckbox}
      values={Values}
      isChecked={IsChecked}
      errors={Errors}
      handleOnSubmit={handleOnSubmit}
    />
  );
});

import React, { ChangeEvent } from "react";
import {
  RegisterFormContainer,
  FormHeader,
  InputTitle,
  Input,
  InputError,
  InputAnnotation,
  BirthDayContainer,
  GenderContainer,
  RulesContainer,
  Button,
} from "./layout.styled";

type RegisterFormLayoutProps = {
  handleValue: (key: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleRulesCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    email: string;
    email2: string;
    password: string;
    nickname: string;
    day: string;
    month: string;
    year: string;
    gender: string;
  };
  isChecked: boolean;
  errors: {
    email: string;
    email2: string;
    password: string;
    nickname: string;
    day: string;
    month: string;
    year: string;
    gender: string;
    rules: string;
    form: string;
  };
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const RegisterFormLayout = ({
  handleValue,
  handleSelect,
  handleRulesCheckbox,
  values,
  isChecked,
  errors,
  handleOnSubmit,
}: RegisterFormLayoutProps) => (
  <RegisterFormContainer onSubmit={handleOnSubmit}>
    <FormHeader>Register with your email address</FormHeader>
    <InputTitle>Your e-mail address</InputTitle>
    <Input
      type={"text"}
      placeholder="Give me you e-mail address"
      onChange={handleValue("email")}
      value={values.email}
    />
    <InputError>{errors.email}</InputError>
    <InputTitle>Confirm your e-mail</InputTitle>
    <Input
      type={"text"}
      placeholder="Please re-enter you e-mail"
      onChange={handleValue("email2")}
      value={values.email2}
    />
    <InputError>{errors.email2}</InputError>
    <InputTitle>Create a password</InputTitle>
    <Input
      type={"password"}
      placeholder="Create a password"
      onChange={handleValue("password")}
      value={values.password}
    />
    <InputError>{errors.password}</InputError>
    <InputTitle>How are we to address you?</InputTitle>
    <Input
      type={"text"}
      placeholder="Enter your username"
      onChange={handleValue("nickname")}
      value={values.nickname}
    />
    {errors.nickname ? (
      <InputError>{errors.nickname}</InputError>
    ) : (
      <InputAnnotation>This name will appear on your profile</InputAnnotation>
    )}
    <InputTitle style={{ marginTop: "20px" }}>Enter your birth date</InputTitle>
    <BirthDayContainer>
      <div className="day">
        <span>Day</span>
        <Input
          type={"text"}
          placeholder="DD"
          onChange={handleValue("day")}
          value={values.day}
        />
      </div>
      <div className="month">
        <span>Month</span>
        <select onChange={handleSelect} value={values.month}>
          <option className="option" value="0">
            Month
          </option>
          <option className="option" value="1">
            January
          </option>
          <option className="option" value="2">
            February
          </option>
          <option className="option" value="3">
            March
          </option>
          <option className="option" value="4">
            April
          </option>
          <option className="option" value="5">
            May
          </option>
          <option className="option" value="6">
            June
          </option>
          <option className="option" value="7">
            July
          </option>
          <option className="option" value="8">
            August
          </option>
          <option className="option" value="9">
            September
          </option>
          <option className="option" value="10">
            October
          </option>
          <option className="option" value="11">
            November
          </option>
          <option className="option" value="12">
            December
          </option>
        </select>
      </div>
      <div className="year">
        <span>Year</span>
        <Input
          type={"text"}
          placeholder="YYYY"
          onChange={handleValue("year")}
          value={values.year}
        />
      </div>
    </BirthDayContainer>
    <InputError>{errors.day}</InputError>
    {errors.month && <InputError>{errors.month}</InputError>}
    {errors.year && <InputError>{errors.year}</InputError>}
    <InputTitle>Your gender?</InputTitle>
    <GenderContainer>
      <label>
        <input
          type="radio"
          value="man"
          name="gender"
          checked={values.gender === "man" ? true : false}
          onChange={handleValue("gender")}
        />
        <span>Man</span>
      </label>
      <label>
        <input
          type="radio"
          value="woman"
          name="gender"
          checked={values.gender === "woman" ? true : false}
          onChange={handleValue("gender")}
        />
        <span>Woman</span>
      </label>
      <label>
        <input
          type="radio"
          value="other"
          name="gender"
          checked={values.gender === "other" ? true : false}
          onChange={handleValue("gender")}
        />
        <span>Other</span>
      </label>
    </GenderContainer>
    <InputError>{errors.gender}</InputError>
    <RulesContainer>
      <label>
        <input
          name="rules"
          type="checkbox"
          checked={isChecked}
          onChange={handleRulesCheckbox}
        />
        <p>
          I agree to Spotify's <span>Terms</span> and{" "}
          <span>Privacy Policy</span>.
        </p>
      </label>
    </RulesContainer>
    {errors.form ? (
      <InputError>{errors.form}</InputError>
    ) : (
      <InputError>{errors.rules}</InputError>
    )}
    <Button type="submit">REGISTER</Button>
  </RegisterFormContainer>
);

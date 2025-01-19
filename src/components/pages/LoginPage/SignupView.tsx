import React, { Fragment } from "react";

import SignUpData from "../../../models/SignUpData";

const SignUpView: React.FC<SignUpData> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  confirmedPassword,
  setConfirmedPassword,
  handleSignUp,
}) => {
  return <Fragment></Fragment>;
};

export default SignUpView;

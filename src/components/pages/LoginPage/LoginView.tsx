import React, { Fragment } from "react";

import LoginData from "../../../models/LoginData";

const LoginView: React.FC<LoginData> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}) => {
  return (
    <Fragment>
      <form onSubmit={handleLogin}>
      </form>
    </Fragment>
  );
};

export default LoginView;

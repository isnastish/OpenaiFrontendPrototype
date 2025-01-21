import React from "react";

import LoginData from "../../../models/LoginData";
import FormInput from "../../common/inputs/FormInput";

const LoginView: React.FC<LoginData> = ({
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    clearAll,
}) => {
    return (
        <form onSubmit={(e) => handleLogin(e)}>
            <h2>Login</h2>
            <div className="my-class">
                <FormInput
                    isAutoFocus={true}
                    labelText="Email"
                    value={email}
                    onChangeHandler={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    labelText="Password"
                    value={password}
                    onChangeHandler={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={clearAll}>Sign In</button>
        </form>
    );
};

export default LoginView;

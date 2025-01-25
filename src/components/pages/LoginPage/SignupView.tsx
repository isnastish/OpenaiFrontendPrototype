import React from 'react';

import SignUpData from '../../../models/SignUpData';
import FormInput from '../../common/inputs/FormInput';

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
    clearAll,
}) => {
    return (
        <form onSubmit={(e) => handleSignUp(e)}>
            <h2>SignUp</h2>
            <div className="my-class">
                <FormInput
                    isAutoFocus={true}
                    labelText="First name"
                    value={firstName}
                    onChangeHandler={(e) => setFirstName(e.target.value)}
                />
                <FormInput
                    labelText="Last name"
                    value={lastName}
                    onChangeHandler={(e) => setLastName(e.target.value)}
                />
                <FormInput
                    labelText="Email"
                    value={email}
                    onChangeHandler={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    labelText="Password"
                    value={password}
                    onChangeHandler={(e) => setPassword(e.target.value)}
                />
                <FormInput
                    labelText="Confirm password"
                    value={confirmedPassword}
                    onChangeHandler={(e) =>
                        setConfirmedPassword(e.target.value)
                    }
                />
            </div>
            {/* TODO: Put in a separte button component */}
            <button className="button" onClick={clearAll}>Create account</button>
        </form>
    );
};

export default SignUpView;

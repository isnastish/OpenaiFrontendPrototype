import React, { Fragment } from 'react';

import SignUpData from '../../../models/SignUpData';
import FormInput from '../../common/inputs/FormInput';
import './LoginPresenter.css';

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
        <Fragment>
            <form id="signup-form" onSubmit={(e) => handleSignUp(e)}>
                <div className="login-presenter-class">
                    <h2>SignUp</h2>
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
            </form>
            <p className="form-actions">
                <button
                    className="button"
                    form="signup-form"
                    onClick={clearAll}
                >
                    Create account
                </button>
            </p>
        </Fragment>
    );
};

export default SignUpView;

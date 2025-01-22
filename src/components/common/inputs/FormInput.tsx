import React, { ChangeEvent } from 'react';

interface FormInputData {
    isAutoFocus?: boolean;

    labelText: string;

    value: string;

    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputData> = ({
    isAutoFocus,
    labelText,
    value,
    onChangeHandler,
}) => {
    return (
        <div className="input-class">
            <label htmlFor="input-label">{labelText}</label>
            <input
                type="text"
                autoFocus={isAutoFocus ? true : false}
                required
                value={value}
                onChange={onChangeHandler}
            ></input>
        </div>
    );
};

export default FormInput;

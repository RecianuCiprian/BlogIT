import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Message from "./MessageErrInput";

const {func, string} = PropTypes;

const Input = ({css, fieldProp, labelText, plHolder, errors, value, handleChange,typeInput}) => {
    return (
        <Fragment>
            <label htmlFor={fieldProp}>{labelText}</label>
            <input
                type={typeInput}
                name={fieldProp}
                placeholder={plHolder}
                value={value}
                onChange={handleChange}/>
            {errors ? <Message color="red" message={errors}/> : null}
        </Fragment>
    );
};

Input.propTypes = {
    plHolder: string,
    value: string.isRequired,
    typeInput:string.isRequired,
    handleChange: func.isRequired,
    fieldProp: string.isRequired,
    labelText: string.isRequired,
    errors: string
};

export default Input;

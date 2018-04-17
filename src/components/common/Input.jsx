import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Message from "./MessageErrInput";

const Input = ({fieldProp, labelText, plHolder, errors, value, handleChange,typeInput}) => {
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
    plHolder: PropTypes.string,
    value: PropTypes.string.isRequired,
    typeInput:PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    fieldProp: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    errors: PropTypes.string,
};

export default Input;

import React from 'react';
import css from './login.scss';
import styleable from "react-styleable";
import Input from "../common/Input";
import PropTypes from "prop-types";

const {object, func} = PropTypes;

const err = " is required";

const LeftForm = ({css, submitForm, handleChange, value}) => {
    const {email, password, submitted} = value;
    return (
        <div className={css['login-box']}>
            <h1 className={css['h1-center']}>Login</h1>
            <form name="form" onSubmit={submitForm} id="text-input-form">
                <Input
                    fieldProp={"email"}
                    labelText={"Email"}
                    typeInput={"email"}
                    value={email}
                    handleChange={handleChange}
                    errors={submitted && !email ? "Username" + err : null}/>
                <Input
                    fieldProp={"password"}
                    labelText={"Password"}
                    typeInput={"password"}
                    handleChange={handleChange}
                    errors={submitted && !password ? "Password" + err : null}
                    value={password}/>
                <button type="submit">Let's Talk</button>
            </form>
        </div>
    );

};

LeftForm.propTypes = {
    handleChange: func.isRequired,
    submitForm: func.isRequired,
    value: object.isRequired,
    css: object.isRequired
};

export default styleable(css)(LeftForm);

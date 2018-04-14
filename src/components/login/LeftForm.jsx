import React from 'react';
import css from './login.css';
import styleable from "react-styleable";

const LeftForm = ({css}) => {

    return (
        <div className={css['login-box']}>

        </div>
    );

}

LeftForm.propTypes = {};
LeftForm.defaultProps = {};

export default styleable(css)(LeftForm);

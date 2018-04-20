import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import styleable from 'react-styleable';

const NavBar = (props) => {
    const {css} = props;
    return (
        <nav className={css['nav']}>
            dest
        </nav>
    );
};

NavBar.propTypes = {
    css:PropTypes.object.isRequired
};
NavBar.defaultProps = {};

export default styleable(css)(NavBar);

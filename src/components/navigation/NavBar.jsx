import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import styleable from 'react-styleable';

import Logout from "../common/Logout";
import UserInfo from "../common/UserInfo";
import SearchPage from "./SearchPage";

const NavBar = (props) => {
    const {css} = props;
    return (
        <nav className={css['nav']}>
            <div className={css['user-controls']}>

                <SearchPage/>
                <UserInfo
                    css={{display: 'inline', marginRight: '5px'}}
                />
                <Logout
                    css={{display: 'inline', marginRight: '10px'}}
                />

            </div>
        </nav>
    );
};

NavBar.propTypes = {
    css: PropTypes.object.isRequired
};
NavBar.defaultProps = {};

export default styleable(css)(NavBar);

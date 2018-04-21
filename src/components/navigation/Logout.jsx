import React from 'react';
import GoSignOut from 'react-icons/lib/go/sign-out';
import PropTypes from 'prop-types';

const innerCSS = {color: '#000', margin: '5px', paddingBottom: '5px'};

function Logout(props) {
    const {css} = props;
    return (
        <div style={css}>
            <GoSignOut style={innerCSS}/>
            Sing Out
        </div>
    );
}

Logout.propTypes = {
    css:PropTypes.object.isRequired
};
Logout.defaultProps = {};

export default Logout;

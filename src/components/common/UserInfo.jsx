import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'react-icons/lib/io/ios-contact';

function UserInfo(props) {
    const {css} = props;
    return (
        <div style={css}>
            <Contact style={{fontSize: '20px', margin: '5px', paddingBottom: '5px'}}/>
            User Name
        </div>
    );
}

UserInfo.propTypes = {
    css: PropTypes.object.isRequired
};
UserInfo.defaultProps = {};

export default UserInfo;

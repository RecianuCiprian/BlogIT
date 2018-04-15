import React from 'react';
import PropTypes from 'prop-types';

const {string} = PropTypes;

const style = {
    color: 'red',
    marginBottom: '20px',
    fontSize: '18px'
};

const MessageErrInput = ({message}) => (
    <div style={style}>
        <small>{message}</small>
    </div>
);

MessageErrInput.propTypes = {
    color: string.isRequired,
    message: string.isRequired
};

export default MessageErrInput;

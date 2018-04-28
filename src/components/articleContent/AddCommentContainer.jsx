import React from 'react';
import PropTypes from 'prop-types';

function AddCommentContainer(props) {
    const {css,placeholder,handleChange,onClick} = props;
    return (
        <div className={css.div}>
            <input
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                className={css.input}
            />
            <button className={css.button} onClick={onClick}>Give it a trie</button>
        </div>
    );
}

AddCommentContainer.propTypes = {
    css:PropTypes.object,
    placeholder:PropTypes.string,
    handleChange:PropTypes.func.isRequired,
    onClick:PropTypes.func.isRequired
};

export default AddCommentContainer;

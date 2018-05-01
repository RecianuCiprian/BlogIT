import React from 'react';
import PropTypes from 'prop-types';

function AddCommentContainer(props) {
    const {css,placeholder,handleChange,submit,value} = props;
    return (
        <div className={css.div}>
            <input
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                className={css.input}
                onKeyPress={submit}
                value={value}
            />
        </div>
    );
}

AddCommentContainer.propTypes = {
    css:PropTypes.object,
    placeholder:PropTypes.string,
    handleChange:PropTypes.func.isRequired,
    submit:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired
};

export default AddCommentContainer;

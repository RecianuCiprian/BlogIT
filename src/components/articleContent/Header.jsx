import React from 'react';
import PropTypes from 'prop-types';
import {Tag} from 'antd';

function Header(props) {
    const {title, tags} = props;

    return (
        <div>
            <h3>{title}</h3>
            {tags.map(tag => (
                <Tag style={{marginTop: '10px'}} key={tag._id} color="#2db7f5">{tag.name}</Tag>
            ))}
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array
};

export default Header;

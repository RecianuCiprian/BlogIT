import React from 'react';
import PropTypes from 'prop-types';
import {Tag} from 'antd';

function Header(props) {
    const {title, tags, category} = props;

    return (
        <div>
            <h3>{title}</h3>
            {tags.map(tag => (
                <Tag style={{marginTop: '10px'}} key={tag._id} color="#FF6500">{tag.name}</Tag>
            ))}
            <div>
                <Tag style={{marginTop: '10px'}} key={category._id} color="#2db7f5">{category.name}</Tag>
            </div>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array,
    category: PropTypes.object
};

export default Header;

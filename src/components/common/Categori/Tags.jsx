import React, {Fragment} from "react";
import {Tag} from 'antd';
import './categori.css';
import PropTypes from "prop-types";

const CheckableTag = Tag.CheckableTag;

export function Tags(props) {
    const {listOfTags, title, tagsSelected} = props;
    return (
        <Fragment>
            <h6 style={headingStyle}>{title}</h6>
            {listOfTags.map(tag => (
                <CheckableTag
                    key={tag._id}
                    checked={tagsSelected.indexOf(tag._id) > -1}
                    onChange={checked => props.handleChangeTags(tag._id, checked)}
                >
                    {tag.name}
                </CheckableTag>
            ))}
        </Fragment>
    );
}

Tags.propTypes = {
    listOfTags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    tagsSelected: PropTypes.array.isRequired,
    handleChangeTags: PropTypes.func.isRequired
};

const headingStyle = {
    fontSize: '12px',
    marginRight: 8,
    display: 'inline'
};
import React, {Fragment} from "react";
import {Tag} from 'antd';
import './tag.css';
import PropTypes from "prop-types";

const CheckableTag = Tag.CheckableTag;

export function Tags(props) {
    const {listOfTags, title, tagsSelected, headingStyle} = props;
    return (
        <Fragment>
            <label style={headingStyle}>{title}</label>
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
    handleChangeTags: PropTypes.func.isRequired,
    headingStyle: PropTypes.object
};

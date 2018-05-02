import React, {Fragment} from 'react';
import {Select} from 'antd';
import PropTypes from 'prop-types';
import './style.css';
import 'antd/lib/select/style/index.css';

const Option = Select.Option;

function SelectCategory(props) {

    const {css, listOfItems, placeholder,title,headerStyle} = props;

    const renderOptions = () => {
        return listOfItems.map(category => (
            <Option key={category._id}>{category.name}</Option>
        ));
    };

    return (
        <Fragment>
            <label style={headerStyle}>{title}</label>
            <Select
                mode="default"
                size={"default"}
                placeholder={placeholder}
                onChange={props.handleChange}
                style={css}
            >
                {renderOptions()}
            </Select>
        </Fragment>
    );
}

SelectCategory.propTypes = {
    handleChange: PropTypes.func.isRequired,
    css: PropTypes.object,
    listOfItems: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    title: PropTypes.string.isRequired,
    headerStyle:PropTypes.object
};

SelectCategory.defaultProps = {
    placeholder: 'Select an item',
    css:{width:'100%'}
};

export default SelectCategory;
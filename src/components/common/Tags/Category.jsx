import React, {Fragment} from 'react';
import {Select} from 'antd';
import PropTypes from 'prop-types';
import './style.css';
import 'antd/lib/select/style/index.css';

const Option = Select.Option;

function SelectCategory(props) {

    const {css, listOfItems, placeholder,title} = props;

    const renderOptions = () => {
        return listOfItems.map(category => (
            <Option key={category._id}>{category.name}</Option>
        ));
    };

    return (
        <Fragment>
            <h6 style={headerStyle}>{title}</h6>
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
    css: PropTypes.object.isRequired,
    listOfItems: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    title: PropTypes.string.isRequired
};

SelectCategory.defaultProps = {
    placeholder: 'Select an item'
};

const headerStyle = {
    fontSize: '12px',
    marginRight: 8,
    display: 'inline',
    paddingTop: '5px'
};

export default SelectCategory;
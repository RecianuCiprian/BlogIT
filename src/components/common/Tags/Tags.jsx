import React, {Fragment} from 'react';
import {Select} from 'antd';
import PropTypes from 'prop-types';
import './style.css';
import 'antd/lib/select/style/index.css';
//import './style.css';


const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function SelectSizesDemo(props) {

    const {css,handleChange} = props;

    return (
        <Fragment>
            <h6 style={{fontSize: '15px', marginRight: 8, display: 'inline',paddingTop:'5px'}}>Tags:</h6>
            <Select
                mode="multiple"
                size={"default"}
                placeholder="Select a tag"
                onChange={handleChange}
                style={css}
            >
                {children}
            </Select>
        </Fragment>
    );
}

SelectSizesDemo.propTypes={
    handleChange:PropTypes.func.isRequired,
    css:PropTypes.object.isRequired
};

export default SelectSizesDemo;
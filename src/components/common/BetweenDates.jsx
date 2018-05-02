import React, {Fragment} from 'react';
import {DatePicker} from 'antd';
import 'antd/lib/date-picker/style/index.css';
import PropTypes from "prop-types";
const {RangePicker} = DatePicker;

function BetweenDates(props) {
    const {title,headerStyle} = props;
    return (
        <Fragment>
            <label style={headerStyle}>{title}</label>
            <RangePicker
                size={'default'}
                onChange={props.onChange}
            />
        </Fragment>
    );
}

BetweenDates.propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    headerStyle:PropTypes.object
};

export default BetweenDates;
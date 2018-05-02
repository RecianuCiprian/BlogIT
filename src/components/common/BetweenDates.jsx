import React, {Fragment} from 'react';
import {DatePicker} from 'antd';
import 'antd/lib/date-picker/style/index.css';
import PropTypes from "prop-types";
const {RangePicker} = DatePicker;

function BetweenDates(props) {
    const {title} = props;
    return (
        <Fragment>
            <h6 style={headerStyle}>{title}</h6>
            <RangePicker
                size={'default'}
                onChange={props.onChange}
            />
        </Fragment>
    );
}

BetweenDates.propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

const headerStyle = {
    fontSize: '12px',
    marginRight: 8,
    display: 'inline',
    paddingTop: '5px'
};

export default BetweenDates;
import React, {Fragment} from 'react';
import {DatePicker} from 'antd';
import 'antd/lib/date-picker/style/index.css';

const {RangePicker} = DatePicker;

function onChange(dates, dateStrings) {
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

function BetweenDates(props) {
    return (
        <Fragment>
            <h6 style={headerStyle}>Date Between:</h6>
            <RangePicker
                size={'default'}
                onChange={onChange}
            />
        </Fragment>
    );
}

const headerStyle = {
    fontSize: '12px',
    marginRight: 8,
    display: 'inline',
    paddingTop: '5px'
};

export default BetweenDates;
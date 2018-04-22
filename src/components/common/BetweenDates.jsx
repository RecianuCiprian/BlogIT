import React from 'react';
import {DatePicker} from 'antd';
import 'antd/lib/date-picker/style/index.css';
const {RangePicker} = DatePicker;

function onChange(dates, dateStrings) {
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

class PickerSizesDemo extends React.Component {

    render() {
        return (
            <div>
                <h6 style={{fontSize: '15px', marginRight: 8, display: 'inline',paddingTop:'5px'}}>Date Between:</h6>
                <RangePicker
                    size={'default'}
                    onChange={onChange}
                />
            </div>
        );
    }
}

export default PickerSizesDemo;
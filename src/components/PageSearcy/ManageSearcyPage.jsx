import React, {Component} from 'react';
import Content from "./SearcyContent";
// eslint-disable-next-line import/named
import {Posts} from "../common/Categori";
import SelectSizesDemo from "../common/Tags/Tags";
import PickerSizesDemo from "../common/BetweenDates";

class ManageSearcyPage extends Component {
    render() {
        return (
            <Content>
                <Posts/>
                <SelectSizesDemo
                    css={tagStyle}
                    handleChange={()=>{}}
                />
                <PickerSizesDemo/>
            </Content>
        );
    }
}

const tagStyle={
    width:'50%'
};

export default ManageSearcyPage;

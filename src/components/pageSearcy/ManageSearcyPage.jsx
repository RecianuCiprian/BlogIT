import React, {Component} from 'react';
import Content from "./SearcyContent";
// eslint-disable-next-line import/named
import {Category} from "../common/Categori";
import Tags from "../common/Tags/Tags";
import BetweenDates from "../common/BetweenDates";

class ManageSearcyPage extends Component {
    render() {
        return (
            <Content>
                <Category/>
                <Tags
                    css={tagStyle}
                    handleChange={() => {
                    }}
                />
                <BetweenDates/>
            </Content>
        );
    }
}

const tagStyle = {
    width: '50%'
};

export default ManageSearcyPage;

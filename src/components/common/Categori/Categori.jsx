import React, {Component, Fragment} from "react";
import {Tag} from 'antd';
import './categori.css';

const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

class Categori extends Component {
    state = {
        selectedTags: [],
    };

    handleChange(tag, checked) {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag] :
            selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({selectedTags: nextSelectedTags});
    }

    render() {
        const {selectedTags} = this.state;
        return (
            <Fragment>
                <h6 style={{fontSize: '15px', marginRight: 8, display: 'inline'}}>Categories:</h6>
                {tagsFromServer.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => this.handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
            </Fragment>
        );
    }
}

export {Categori as Posts};
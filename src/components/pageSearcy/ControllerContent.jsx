import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import '../common/styles/antbuttons.css';
import 'antd/lib/button/style/index.css';

function ControllerContent(props) {
    return (
        <div style={centerDiv}>
            <Button
                type="primary"
                onClick={props.createPost}
                style={{width: '40%', marginRight: '10px'}}
            >Create Post</Button>
            <Button
                onClick={props.resetSearch}
                style={{width: '40%'}}
            >Reset Search</Button>
        </div>
    );
}

const centerDiv = {
    margin: 'auto',
    width: '50%',
};

ControllerContent.propTypes = {
    createPost: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
};
ControllerContent.defaultProps = {};

export default ControllerContent;

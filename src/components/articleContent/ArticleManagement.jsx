import React, {Fragment} from 'react';
import Article from "./Article";
import PropTypes from 'prop-types';
import '../common/styles/antbuttons.css';
import 'antd/lib/button/style/index.css';
import {Button} from 'antd';

function ArticleManagement(props) {
    const {entries} = props;
    return (
        <Fragment>
            {entries.map(post => (
                <Article
                    key={post._id}
                    post={post}
                />
            ))}
            {entries.length > 0 && (<div style={centerDiv}>
                <Button
                    type="primary"
                    onClick={props.onLoadMore}
                    style={{width: '50%'}}
                >Load More</Button>
            </div>)}
        </Fragment>
    );
}

ArticleManagement.propTypes = {
    entries: PropTypes.array.isRequired,
    onLoadMore: PropTypes.func.isRequired
};

const centerDiv = {
    margin: 'auto',
    width: '50%',
    paddingBottom: '20px',
    textAlign: 'center'
};

export default ArticleManagement;

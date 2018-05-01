import React, {Component, Fragment} from 'react';
import Article from "./Article";
import PropTypes from 'prop-types';


class ArticleManagement extends Component {

    render() {
        return (
           <Fragment>
                {this.props.entries.map(post => (
                    <Article
                        key={post._id}
                        post={post}
                    />
                ))}
                <button onClick={this.props.onLoadMore}>Load More</button>
           </Fragment>
        );
    }
}

ArticleManagement.propTypes = {
    entries:PropTypes.array.isRequired,
    onLoadMore:PropTypes.func.isRequired
};

export default ArticleManagement;

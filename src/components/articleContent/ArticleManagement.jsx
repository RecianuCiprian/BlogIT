import React, {Component} from 'react';
// eslint-disable-next-line import/named
import {Query} from "react-apollo/index";
import {getHeader} from "../../querys/article.graphql";
import Article from "./Article";
import style from 'react-styleable';
import css from './style.scss';

class ArticleManagement extends Component {

    render() {
        return (
            <div className={css['container-inside']}>
                <Query query={getHeader}>
                    {({loading, error, data}) => {
                        if (loading) return "Loading...";
                        if (error) return `Error! ${error.message}`;

                        return data.posts.map(post => (
                            <Article
                                key={post._id}
                                post={post}
                                />
                        ));

                    }}
                </Query>
            </div>
        );
    }
}

ArticleManagement.propTypes = {};
ArticleManagement.defaultProps = {};

export default style(css)(ArticleManagement);

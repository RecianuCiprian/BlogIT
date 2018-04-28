import React from 'react';
import PropTypes from 'prop-types';
import ArticleContent from "./ArticleContent";
import Footer from "./Footer";
import Header from "./Header";
import style from 'react-styleable';
import css from './style.scss';

function Article(props) {
    const {post} = props;

    return (
        <div className={css['bottom-lines']}>
            <Header
                title={post.title}
                tags={post.tags}
            />
            <ArticleContent
                description={post.description}
                user={post.user}
                createdAt={post.createdAt}
                cssDiv={css['description']}/>
            <Footer
                divCss={css['footer']}
                comments={post.comments}
                postId={post._id}
            />
        </div>
    );
}

Article.propTypes = {
    post: PropTypes.object.isRequired,
    cssDiv: PropTypes.string
};

export default style(css)(Article);

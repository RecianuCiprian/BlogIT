import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'react-icons/lib/io/ios-contact';
import {getAllCommentByPost} from "../../querys/comments.graphql";
import CoolBlockUi from "../common/CoolBlockUi";
import {Query} from "react-apollo/index";
import style from 'react-styleable';
import css from './style.scss';
import {utils} from '../../utils/formatDate';

function CommentsContent(props) {
    const {postId, css} = props;
    const variable = {
        post: {
            postId
        }
    };
    return (
        <div style={{position: 'relative'}}>

            <Query query={getAllCommentByPost} variables={variable}>
                {({loading, error, data}) => {
                    if (loading) return <CoolBlockUi loading={loading}/>;
                    if (error) return `Error! ${error.message}`;

                    return data.comments.map(comment => (
                        <div key={comment._id} className={css['commnets-container']}>
                            <Contact style={userIcon}/>
                            <div className={css['comment-context']}>
                                {comment.text}
                            </div>
                            <div className={css['comment-date']}>
                                {utils.formatDate(comment.createdAt)}
                            </div>
                        </div>
                    ));

                }}
            </Query>
        </div>
    );
}

CommentsContent.propTypes = {
    postId: PropTypes.string.isRequired,
    css:PropTypes.object.isRequired
};

const userIcon = {
    float: 'left',
    fontSize: '30px',
    margin: '5px',
    paddingBottom: '5px'
};

export default style(css)(CommentsContent);

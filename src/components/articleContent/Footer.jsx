import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from 'react-icons/lib/fa/comments-o';
import Like from 'react-icons/lib/fa/thumbs-o-up';
import Star from 'react-icons/lib/fa/star-o';
import style from 'react-styleable';
import css from './style.scss';
import {Collapse} from 'antd';
import '../common/styles/antCollapse.css';
import CommentsContent from "./CommentsContent";
import AddCommentContainer from "./AddCommentContainer";
import {Mutation} from "react-apollo";
import {addComment} from '../../querys/comments.graphql';
import {connect} from "react-redux";

const Panel = Collapse.Panel;

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            refresh: false
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    onSubmit = (addComment, e) => {
        if (this.state.refresh && e.key.toLowerCase() !== 'enter') {
            this.setState({refresh: false});
        }

        if (e.key.toLowerCase() === 'enter') {
            let CommentCreateInput = {
                "text": this.state.value,
                "userId": localStorage.getItem("user")[0],
                "postId": this.props.postId
            };
            console.info(CommentCreateInput);
            addComment({variables: {data: CommentCreateInput}});
            this.setState({value: '', refresh: true});
        }

    };

    render() {
        const {css, divCss, comments, postId} = this.props;
        const styleContainer = {
            div: css['add-comment'],
            input: css['add-comment-input']
        };

        return (
            <div className={divCss}>
                <div className={css['footer-start']}>
                    <span className={css['start']}>
                        <Star/>
                    </span>
                        192 |
                </div>


                <div className={css['footer-like']}>
                    <Like/>
                    127 |
                </div>


                <Collapse onChange={(key) => {
                    console.log(key);
                }}>
                    <Panel showArrow={false} header={
                        <div className={css['footer-comment']}>
                            <Comment/>
                            {comments.length}
                        </div>
                    } key={postId}>
                        <CommentsContent postId={postId} refresh={this.state.refresh}/>
                    </Panel>

                    <Mutation mutation={addComment}>
                        {(addComment) => (
                            <AddCommentContainer
                                // eslint-disable-next-line react/jsx-no-bind
                                submit={this.onSubmit.bind(this, addComment)}
                                handleChange={this.handleChange}
                                css={styleContainer}
                                value={this.state.value}
                            />
                        )}
                    </Mutation>


                </Collapse>
            </div>
        );
    }
}

Footer.propTypes = {
    css: PropTypes.object.isRequired,
    divCss: PropTypes.string,
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired,
};

export default style(css)(Footer);

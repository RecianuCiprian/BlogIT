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

const Panel = Collapse.Panel;

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = () => {
        console.log('Handle change');
    };

    onClick = () => {
        console.log('On click');
    };

    render() {
        const {css, divCss, comments, postId} = this.props;
        const styleContainer={
            div:css['add-comment'],
            input:css['add-comment-input']
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
                        <CommentsContent postId={postId}/>
                    </Panel>
                    <AddCommentContainer onClick={this.onClick} handleChange={this.handleChange} css={styleContainer}/>
                </Collapse>
            </div>
        );
    }
}

Footer.propTypes = {
    css: PropTypes.object.isRequired,
    divCss: PropTypes.string,
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
};
Footer.defaultProps = {};

export default style(css)(Footer);

import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'react-icons/lib/fa/comments-o';
import Like from 'react-icons/lib/fa/thumbs-o-up';
import Star from 'react-icons/lib/fa/star-o';
import style from 'react-styleable';
import css from './footer.scss';
import {Collapse} from 'antd';
import 'antd/lib/collapse/style/index.css';

const Panel = Collapse.Panel;

function Footer(props) {
    const {css, divCss, comments} = props;
    return (
        <div className={divCss}>
            <div className={css['div-start']}>
                <span className={css['start']}>
                    <Star/>
                </span>
                192 |
            </div>

            <div className={css['div-like']}>
                <Like/>
                127 |
            </div>
            <Collapse onChange={(key) => {
                console.log(key)
            }}>
                <Panel showArrow={false} header={
                    <div className={css['div-comment']}>
                        <Comment/>
                        {comments.length}
                    </div>
                } key="2">
                        {comments.length}
                </Panel>
            </Collapse>
        </div>
    );
}

Footer.propTypes = {
    css:PropTypes.object.isRequired,
    divCss:PropTypes.string,
    comments:PropTypes.array.isRequired
};
Footer.defaultProps = {};

export default style(css)(Footer);

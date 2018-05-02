import React from 'react';
import PropTypes from 'prop-types';
import style from 'react-styleable';
import css from '../common/style.scss';

function InsertArticleContainer(props) {
    const {css,children} = props;
    return (
        <div className={css['container']}>
            {React.Children.map(children, (child) => {
                return (<div className={css['div-container']}>
                    {child}
                </div>);
            })}
        </div>
    );
}

InsertArticleContainer.propTypes = {
    css:PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.array.isRequired
    ])
};

export default style(css)(InsertArticleContainer);

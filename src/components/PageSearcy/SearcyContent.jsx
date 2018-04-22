import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import styleable from 'react-styleable';

function SearcyContent(props) {
    const {css, children} = props;
    return (
        <div className={css['display-bar-1']}>
            {React.Children.map(children, (child, index) => {
                let className = css['bottom-lines'];
                if (index === children.length - 1) {
                    className = css['div-container'];
                }
                return (<div className={className}>
                    {child}
                </div>);
            })}
        </div>
    );
}

SearcyContent.propTypes = {
    css: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired
};

export default styleable(css)(SearcyContent);

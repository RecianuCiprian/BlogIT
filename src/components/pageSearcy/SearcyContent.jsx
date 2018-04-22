import React from 'react';
import PropTypes from 'prop-types';
import css from '../common/style.scss';
import styleable from 'react-styleable';

function SearcyContent(props) {
    const {css, children} = props;
    return (
        <div className={css['container-inside']}>
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
    children: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.array.isRequired
    ])
};

export default styleable(css)(SearcyContent);

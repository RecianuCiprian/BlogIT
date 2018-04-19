import React, {Component} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import styleable from 'react-styleable';

class HomePage extends Component {

    componentDidMount(){
        document.body.classList= this.props.css['bg'];
    }

    render() {
        return (
            <div>Home is Here</div>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default styleable(css)(HomePage);

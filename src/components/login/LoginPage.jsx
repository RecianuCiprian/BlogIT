import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleable from 'react-styleable';
import css from './login.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className={this.props.css['center-div']} ></div>
        );
    }
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export default styleable(css)(LoginPage);

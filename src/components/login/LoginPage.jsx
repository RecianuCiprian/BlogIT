import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleable from 'react-styleable';
import css from './login.css';
import LeftForm from "./LeftForm";

class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={this.props.css['center-div']} >
                <LeftForm/>
                {/*<Logo/>*/}
            </div>
        );
    }
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export default styleable(css)(LoginPage);

import React, {Component} from 'react';
import styleable from 'react-styleable';
import css from './login.css';
import LeftForm from "./LeftForm";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {userActions} from '../../actions'

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    submitForm = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        this.props.actions.login("cipirna","ciprian");
    };

    handleChange = (e) =>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        console.log(this.props.authentication);
        return (
            <div className={this.props.css['center-div']}>
                <LeftForm handleChange={this.handleChange} submitForm={this.submitForm} value = {this.state}/>
                {/*<Logo/>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions,dispatch)
    };
}


const connectedLoginPage = connect(mapStateToProps,mapDispatchToProps)(LoginPage);

export default styleable(css)(connectedLoginPage);

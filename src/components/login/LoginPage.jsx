import React, {Component} from 'react';
import styleable from 'react-styleable';
import css from './login.scss';
import LeftForm from "./LeftForm";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userActions} from '../../actions'
import {history} from '../../store/ConfigureStore';
import PropTypes from "prop-types";
import toastr from 'toastr';



class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            errMessage: ''
        };
    }
    componentDidMount(){
        document.body.classList= this.props.css['bg'];
    }

    submitForm = (e) => {
        e.preventDefault();

        this.setState({submitted: true});
        const {email, password} = this.state;
        if (email && password) {
            this.props.actions.login(email, password).then(() => {
                history.push('/');
            }).catch((error) => {
                toastr.error(error);
                this.setState({
                    email: '',
                    password: '',
                    submitted: false,
                });
            });
        }
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    render() {
        return (
                <div className={this.props.css['center-div']}>
                    <LeftForm
                        handleChange={this.handleChange}
                        submitForm={this.submitForm}
                        value={this.state}
                    />
                    {/*<Logo/>*/}
                </div>
        );
    }
}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {user} = state.authentication;
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}


const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default styleable(css)(connectedLoginPage);

import React, {Component} from 'react';
import styleable from 'react-styleable';
import css from './login.css';
import LeftForm from "./LeftForm";

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
    };

    handleChange = (e) =>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className={this.props.css['center-div']}>
                <LeftForm handleChange={this.handleChange} submitForm={this.submitForm} value = {this.state}/>
                {/*<Logo/>*/}
            </div>
        );
    }
}

export default styleable(css)(LoginPage);

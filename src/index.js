// Set up your application entry point here...
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import index from "./index.css";
import LoginPage from "./components/login/LoginPage";

class App extends Component {
    render() {
        return (
            <LoginPage/>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
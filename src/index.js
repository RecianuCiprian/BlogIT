// Set up your application entry point here...
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from "./store/configureStore";

import index from "./index.css";

import LoginPage from "./components/login/LoginPage";

class App extends Component {
    render() {
        return (
            <LoginPage/>
        );
    }
}

ReactDOM.render(
    <Provider store={configStore()}>
        <App />
    </Provider>,
    document.getElementById('app')
);
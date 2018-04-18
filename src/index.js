// Set up your application entry point here...
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //face bind la store in app
import configStore from "./store/ConfigureStore";

import App from "./components/app/App";
import './index.scss'
import '../node_modules/toastr/build/toastr.min.css'
import {ApolloProvider} from "react-apollo";
import client from './config/ApolloClient'


ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={configStore()}>
            <App/>
        </Provider>
    </ApolloProvider>,
    document.getElementById('app')
);
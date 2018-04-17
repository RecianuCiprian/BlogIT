// Set up your application entry point here...
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //face bind la store in app
import configStore from "./store/configureStore";

import App from "./components/App/App";
import './index.css'
import {ApolloProvider} from "react-apollo";
import client from './constants/apolloClient'


ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={configStore()}>
            <App/>
        </Provider>
    </ApolloProvider>,
    document.getElementById('app')
);
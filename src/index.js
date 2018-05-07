
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //face bind la store in app
import configStore from "./store/ConfigureStore";

import App from "./components/app/App";
import './index.css';
import '../node_modules/toastr/build/toastr.min.css';
import {ApolloProvider} from "react-apollo";
import client from './config/ApolloClient';
import { PersistGate } from 'redux-persist/integration/react'
const configureStore = configStore();

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={configureStore.store}>
            <App/>
           {/* <PersistGate loading={null} persistor={configureStore.persistor}>
                <App/>
            </PersistGate>*/}
        </Provider>
    </ApolloProvider>,
    document.getElementById('app')
);
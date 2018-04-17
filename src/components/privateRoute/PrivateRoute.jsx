import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export default function PrivateRoute({component: Component, logIn, ...rest}) {
    return (<Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>);
};
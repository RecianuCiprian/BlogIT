import React, {Component, Fragment} from 'react';
import LoginPage from "../login/LoginPage";
import {Router, Route, Switch} from 'react-router-dom';
import {history} from '../../store/configureStore';
import {PrivateRoute} from "../privateRoute/PrivateRoute";
import HomePage from "../HomePage/HomePage";
import LoadingDots from "../common/LoadingDots";


import ToDoApp from './ToDoApp';

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Fragment>
                <LoadingDots interval={100} dots={20}/>
                <ToDoApp/>
                <Router history={history}>
                    < Switch >
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </Router>
            </Fragment>
        );
    }
}



export default App;

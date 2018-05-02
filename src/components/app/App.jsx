import React, {Component} from 'react';
import LoginPage from "../login/LoginPage";
import {Route, Router, Switch} from 'react-router-dom';
import {history} from '../../store/ConfigureStore';
import PrivateRoute from '../privateRoute/PrivateRoute';
import HomePage from "../homePage/HomePage";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import BlockUi from 'react-block-ui';
import {Loader} from 'react-loaders';
import '../common/styles/blockUI.css';
import 'loaders.css/loaders.min.css';
import MainRoute from "./MainRoute";
import ManageInsertArticle from "../insertArticle/ManageInsertArticle";

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {loading} = this.props;
        return (
            <BlockUi blocking={loading} loader={<Loader active type={'ball-spin-fade-loader'} color="#02a17c"/>}>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <MainRoute>
                            <PrivateRoute exact path="/" component={HomePage}/>
                            <PrivateRoute path="/addCourse" component={ManageInsertArticle}/>
                        </MainRoute>
                    </Switch>
                </Router>
            </BlockUi>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);

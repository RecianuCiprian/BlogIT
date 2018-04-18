import React, {Component, Fragment} from 'react';
import LoginPage from "../login/LoginPage";
import {Route, Router, Switch} from 'react-router-dom';
import {history} from '../../store/ConfigureStore';
import PrivateRoute from '../privateRoute/PrivateRoute';
import HomePage from "../homePage/HomePage";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import BlockUi from "../../helpers/BlockUI";
import {Loader} from "react-loaders";

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {loading} = this.props;
        return (
            <BlockUi blocking={loading} loader={<Loader active type={'ball-spin-fade-loader'} color="#02a17c"/> }>
                <Fragment>
                    <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage}/>
                                <Route path="/login" component={LoginPage}/>
                            </Switch>
                    </Router>

                </Fragment>
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

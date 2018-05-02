import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import NavBar from "../navigation/NavBar";

class MainRoute extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                {this.props.children}
            </Fragment>
        );
    }
}

MainRoute.propTypes = {
    children: PropTypes.array.isRequired,
};
MainRoute.defaultProps = {};

export default MainRoute;

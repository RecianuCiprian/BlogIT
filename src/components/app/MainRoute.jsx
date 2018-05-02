import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import NavBar from "../navigation/NavBar";
import style from 'react-styleable';
import css from '../common/style.scss';

class MainRoute extends Component {

    componentDidMount() {
        document.body.classList = this.props.css['bg'];
    }


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

export default style(css)(MainRoute);

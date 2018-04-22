import React, {Component, Fragment} from 'react';
import css from './style.scss';
import styleable from 'react-styleable';
import NavBar from "../navigation/NavBar";
import ManageSearcyPage from "../PageSearcy/ManageSearcyPage";

class HomePage extends Component {

    componentDidMount() {
        document.body.classList = this.props.css['bg'];
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <ManageSearcyPage/>
            </Fragment>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default styleable(css)(HomePage);

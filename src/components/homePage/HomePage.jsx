import React, {Component, Fragment} from 'react';
import css from './style.scss';
import styleable from 'react-styleable';
import NavBar from "./NavBar";

class HomePage extends Component {

    componentDidMount() {
        document.body.classList = this.props.css['bg'];
    }

    render() {
        return (
            <div className={this.props.css['wrapper']}>
                <NavBar/>
                <div className={this.props.css['display-bar-1']}>Home is Here</div>
            </div>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default styleable(css)(HomePage);

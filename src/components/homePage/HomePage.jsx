import React, {Component, Fragment} from 'react';
import style from 'react-styleable';
import css from './style.scss';
import NavBar from "../navigation/NavBar";
import ManageSearcyPage from "../pageSearcy/ManageSearcyPage";
import ArticleManagement from "../articleContent/ArticleManagement";
import PropTypes from 'prop-types';

class HomePage extends Component {

    componentDidMount() {
        document.body.classList = this.props.css['bg'];
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className={this.props.css['container']}>
                    <ManageSearcyPage/>
                    <div style={{position:'relative'}}>
                        <ArticleManagement/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

HomePage.propTypes = {
    css: PropTypes.object.isRequired
};

export default style(css)(HomePage);

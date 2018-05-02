import React, {Component} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import styleable from 'react-styleable';
import {history} from '../../store/ConfigureStore';

import Logout from "../common/Logout";
import UserInfo from "../common/UserInfo";
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";

class NavBar extends Component {

    onClick = (e) => {
        e.preventDefault();
        this.props.actions.logout().then(()=>{
            history.push("/login");
        });
    };

    render() {
        const {css} = this.props;
        return (
            <nav className={css['nav']}>
                <div className={css['user-controls']}>
                    <UserInfo
                        css={{display: 'inline', marginRight: '5px'}}
                    />
                    <Logout
                        css={{display: 'inline', marginRight: '10px'}}
                        onClick={this.onClick}
                    />
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    css: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {state};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

const navBarConnect = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default styleable(css)(navBarConnect);

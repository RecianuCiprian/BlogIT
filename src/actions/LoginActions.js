import {userConstants} from './LoginTypes';
import {sessionService} from '../services/SessionService';
import {beginAjaxCall} from "./AjaxStatusActions";

export const userActions = {
    login
};

function login(email, password) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return sessionService.login(email, password).then((data) => {
            dispatch(success(data.user));
        }).catch(err => {
            dispatch(failure());
            throw err;
        });
    };

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user};
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error};
    }
}


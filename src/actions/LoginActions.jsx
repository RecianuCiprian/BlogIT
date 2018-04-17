import { userConstants } from './LoginTypes';
import sessionApi from '../services/service'
import {beginAjaxCall} from "./ajaxStatusActions";

export const userActions = {
    login
};

function login(username, password) {
    return dispatch => {
        dispatch(beginAjaxCall(username));
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
}


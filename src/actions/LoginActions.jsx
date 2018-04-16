import { userConstants } from './LoginTypes';

export const userActions = {
    login
};

function login(username, password) {
    return dispatch => {
        dispatch(success(username));
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user }; }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
}


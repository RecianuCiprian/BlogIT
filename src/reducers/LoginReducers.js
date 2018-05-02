import {userConstants} from "../actions/LoginTypes";
import initialState from './InitialState'

export default function LoginReducers(state = initialState.user, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            const {user} = action;
            return {
                user,
                logIn:true
            };
        case userConstants.LOG_OUT_SUCCESS:
            return {};
        default:
            return state;
    }
}
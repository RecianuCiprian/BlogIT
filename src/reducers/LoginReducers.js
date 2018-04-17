import {userConstants} from "../actions/LoginTypes";
import initialState from './initialState'

export default function LoginReducers(state = initialState.user, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            const {user} = action;
            return  user;
        default:
            return state;
    }
}
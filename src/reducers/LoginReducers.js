import {userConstants} from "../actions/LoginTypes";

const initialState = {};

export default function LoginReducers(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            console.log(action);
            const {user} = action;
            return  user;
        default:
            return state;
    }
}
import {userConstants} from "../actions/LoginTypes";

export default function LoginReducers(state,action){
    switch (action.type){
        case userConstants.LOGIN_SUCCESS:
            return Object.assign({},action.user);
        default:
            return state;
    }
}
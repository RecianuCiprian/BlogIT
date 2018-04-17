import {ajaxConstants} from "../actions/AjaxStatusTypes";
import initialState from './InitialState';

function actionTypeEndsInSuccess(type) {
    const value = type.substring(type.length - 8);
    return (value === '_SUCCESS') || (value === '_FAILURE');
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if (action.type === ajaxConstants.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
}
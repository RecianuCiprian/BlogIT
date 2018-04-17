// Set up your root reducer here...
import {combineReducers} from 'redux';
import authentication from "./LoginReducers";
import ajaxCallsInProgress from './AjaxStatusReducers'


const rootReducer = combineReducers({
    authentication,
    ajaxCallsInProgress,
});
export default rootReducer;
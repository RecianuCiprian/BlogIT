// Set up your root reducer here...
import {combineReducers} from 'redux';
import authentication from "./LoginReducers";
import ajaxCallsInProgress from './AjaxStatusReducers';
import postsQueryData from './PostsReducers';


const rootReducer = combineReducers({
    authentication,
    ajaxCallsInProgress,
    postsQueryData
});
export default rootReducer;
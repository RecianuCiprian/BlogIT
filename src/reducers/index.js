// Set up your root reducer here...
import {combineReducers} from 'redux';
import authentication from "./LoginReducers";
import ajaxCallsInProgress from './ajaxStatusReducers'
import client from '../constants/apolloClient'


const rootReducer = combineReducers({
    authentication,
    ajaxCallsInProgress,

});
export default rootReducer;
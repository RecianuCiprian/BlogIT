// Set up your root reducer here...
import {combineReducers} from 'redux';
import authentication from "./LoginReducers";

const rootReducer = combineReducers({
    authentication
});
export default rootReducer;
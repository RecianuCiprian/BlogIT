import {postConstants} from './PostTypes';
import {sessionService} from '../services/SessionService';
import {beginAjaxCall} from "./AjaxStatusActions";

export const postsActions = {
    getAllPosts,
    filterPosts
};

function getAllPosts(variables) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return sessionService.getAllPosts(variables).then((posts) => {
            dispatch(success(posts));
        }).catch(err => {
            dispatch(failure(err));
            throw err;
        });
    };

    function success(posts) {
        return {type: postConstants.RETRIVE_POSTS_SUCCESS, posts};
    }

    function failure(error) {
        return {type: postConstants.RETRIVE_POSTS_FAILURE, error};
    }
}

function filterPosts(variables) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return sessionService.getAllPosts(variables).then((posts) => {
            dispatch(success(posts));
        }).catch(err => {
            dispatch(failure(err));
            throw err;
        });
    };

    function success(filteredPosts) {
        return {type: postConstants.FILTER_POSTS_SUCCESS, filteredPosts};
    }

    function failure(error) {
        return {type: postConstants.FILTER_POSTS_FAILURE, error};
    }
}


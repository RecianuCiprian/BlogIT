import {postConstants} from './PostTypes';
import {sessionService} from '../services/SessionService';
import {beginAjaxCall} from "./AjaxStatusActions";

export const postsActions = {
    getAllPosts,
    filterPosts,
    getTagsCategory,
    savePost
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

function filterPosts(variables, dateBetween) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return sessionService.getAllPosts(variables).then((data) => {
            console.info("List of posts:");
            console.info(data.posts);
            let {posts} = data;
            if (dateBetween && dateBetween.length > 0) {
                posts = data.posts.filter((posts) => {
                    const createDate = new Date(posts.createdAt).toISOString();
                    const from = dateBetween[0];
                    const to = dateBetween[1];
                    return createDate > from && createDate < to;
                });
            }


            dispatch(success({posts}));
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

function getTagsCategory() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return sessionService.getTagsCategory().then((data) => {
            dispatch(success(data));
        }).catch(err => {
            dispatch(failure(err));
            throw err;
        });
    };

    function success(data) {
        return {type: postConstants.RETRIVE_INPUTS_SUCCESS, data};
    }

    function failure(inputsError) {
        return {type: postConstants.RETRIVE_INPUTS_FAILURE, inputsError};
    }
}

function savePost(title, description, category, tags) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return sessionService.savePost(title, description, category, tags)
            .then((data) => {
                dispatch(success(data.addPost));
            }).catch(err => {
                dispatch(failure(err));
                throw err;
            });
    };

    function success(postData) {
        return {type: postConstants.SAVE_POST_SUCCESS, postData};
    }

    function failure(errorOnSave) {
        return {type: postConstants.SAVE_POST_FAILURE, errorOnSave};
    }
}


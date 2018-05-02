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

function filterPosts(variables,dateBetween) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return sessionService.getAllPosts(variables).then((data) => {
            console.info("List of posts:");
            console.info(data.posts);
            let {posts}=data;
            if(dateBetween.length>0){
                posts=data.posts.filter((posts)=>{
                    const createDate=new Date(posts.createdAt).toISOString();
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


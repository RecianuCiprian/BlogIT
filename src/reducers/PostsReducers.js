import {postConstants} from "../actions/PostTypes";
import initialState from './InitialState';

export default function PostReducers(state = initialState.data, action) {
    switch (action.type) {
        case postConstants.RETRIVE_POSTS_SUCCESS:
            const {posts} = action.posts;
            return {
                posts:[...state.posts,...posts],
                error:''
            };
        case postConstants.FILTER_POSTS_SUCCESS:
            const {filteredPosts} = action;
            return {
                posts:filteredPosts.posts,
                error:''
            };
        case postConstants.RETRIVE_POSTS_FAILURE:
            const {error} = action;
            return {
                error,
                posts:[]
            };
        default:
            return state;
    }
}


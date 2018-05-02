import {postConstants} from "../actions/PostTypes";
import initialState from './InitialState';


function combineData(data){
    return Object.assign({},initialState.data,data);
}

export default function PostReducers(state = initialState.data, action) {
    switch (action.type) {
        case postConstants.RETRIVE_POSTS_SUCCESS:
            const {posts} = action.posts;
            return combineData({
                posts:[...state.posts,...posts]
            });

        case postConstants.FILTER_POSTS_SUCCESS:
            const {filteredPosts} = action;
            return combineData({
                posts:filteredPosts.posts
            });

        case postConstants.RETRIVE_INPUTS_SUCCESS:
            const {data} = action;
            return combineData({
                postCategories:data.postCategories,
                tags:data.tags
            });

        case postConstants.RETRIVE_INPUTS_FAILURE:
            const {inputsError} = action;
            return combineData({
                error: inputsError,
            });

        case postConstants.SAVE_POST_SUCCESS:
            //nu il folosesc deoarece imi returneaza null la multe obtiuni si daca
            //as vrea sa il pun ca prim post, o sa arata urat
            const {postData} = action;
            return combineData({
                posts:[...state.posts],
            });

        case postConstants.SAVE_POST_FAILURE:
            const {errorOnSave} = action;
            return combineData({
                error: errorOnSave,
                postCategories:state.postCategories,
                tags:state.tags
            });

        case postConstants.RETRIVE_POSTS_FAILURE:
            const {error} = action;
            return combineData({
                error: error,
            });
        default:
            return state;
    }
}


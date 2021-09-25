import { Post } from "pages";
import {ADD_NEW_POST, SAVE_POSTS} from "./actionsTypes";

export interface PostsReducerInterface {
    posts: Post[],
}

const InitialState:PostsReducerInterface = {
    posts: []
}

const PostsReducers = (state:PostsReducerInterface = InitialState, action:any) => {
    switch(action.type) {
        case SAVE_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        default:
            return state;
    }
}

export default  PostsReducers
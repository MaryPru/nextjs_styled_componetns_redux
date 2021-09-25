import {combineReducers} from 'redux'
import postsReducer, {PostsReducerInterface} from "./postsReducers/index"

export interface allReducersInterface {
   postsReducer: PostsReducerInterface
}

const rootReducers = combineReducers<allReducersInterface>({
   postsReducer,
})

export default rootReducers;
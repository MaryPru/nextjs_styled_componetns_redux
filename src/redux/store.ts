import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from '../redux/redusers'

const initialState = {};

const store = createStore(rootReducers,initialState,composeWithDevTools(applyMiddleware()))

export default store
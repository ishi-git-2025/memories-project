import { combineReducers } from "redux";

import posts from './posts.js'

export default combineReducers({ // Combining the reducers into a single root reducer
    posts,
})
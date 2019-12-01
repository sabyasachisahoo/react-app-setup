import { combineReducers } from 'redux'
import fetchUserReducer from './fetchUserReducer'
import fetchPostsReducer from './fetchPostsReducer'

export default combineReducers({
    usersData: fetchUserReducer,
    postsData: fetchPostsReducer
})
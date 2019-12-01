const fetchPostsReducer = (state = {}, action) => {
    switch(action.type) {
        // saga
        case "FETCH_POSTS":
            return { ...state, loading: true} 
        case "FETCH_POSTS_SUCCESS":
            return { ...state, posts: action.json, loading: false }
        case "FETCH_POSTS_ERROR":
            return  { ...state }
        default:
            return state
    }
}

export default fetchPostsReducer
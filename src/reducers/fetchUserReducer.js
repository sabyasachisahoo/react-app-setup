const fetchUserReducer = (state = {}, action) => {
    switch(action.type) {
        // thunk
        case "FETCH_USERS":
            return { ...state, loading: true} 
        case "FETCH_USERS_SUCCESS":
            return { ...state, users: action.json, loading: false }
        case "FETCH_USERS_ERROR":
            return  { ...state }
        default:
            return state
    }
}

export default fetchUserReducer
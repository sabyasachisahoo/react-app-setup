const fetchUsersStart = () => {
    return {type: "FETCH_USERS"}
}

const fetchUsersSuccess = (users) => {
    return {type: "FETCH_USERS_SUCCESS", json: users }
}

const fetchUsersError = () =>{
    return {type: "FETCH_USERS_ERROR"}
}

export const fetchPosts = () => {
    return {type: "FETCH_POSTS"}
}

// const fetchUsers = () => dispatch => {
//     dispatch(fetchUsersStart())
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then( res => res.json()) 
//     .then( users => dispatch(fetchUsersSuccess(users)) )
//     .catch( err => dispatch(fetchUsersError()))
// }

export function fetchUsers() {
    return function (dispatch) {
      dispatch(fetchUsersStart());
       return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((users) => { dispatch(fetchUsersSuccess(users)); })
        .catch( err => dispatch(fetchUsersError()))
    };
   }
import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions';

let Users = ({getUsers, users}) => (
    <div>
        <button onClick={getUsers}>Get Users(THUNK)</button>
        {
            users && users.map(user => (
               <div key={user.id}>
                   <h2>{user.name}</h2>
               </div>

            ))
        }
    </div>
)


const mapStateToProps = (state, ownProps) => ({
    users: state.usersData.users
})

const mapDispatchToProps = { 
    getUsers: fetchUsers 
}

Users = connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users;
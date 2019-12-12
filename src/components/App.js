import React , { Component } from 'react';
import '../styles/App.scss';
import fetchUsers$ from '../services/data.service';

class App extends Component {

    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    
    componentDidMount() {
        fetchUsers$.subscribe(res => {
            this.setState({ users : res.data}) 
        });

    }
    render() {
        return (
            <div>
                 <h1>Hello World :) </h1>
                 {
                     this.state.users.map(user => <h1 key={user.id}>{user.name}</h1>)
                 }
            </div>
          
        );
    } 
}

export default App;
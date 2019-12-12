import React , { Component } from 'react';
import '../styles/App.scss';
import fetchUsers$ from '../services/data.service';
import { Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

class App extends Component {

    constructor(){
        super();
        this.state = {
            users:[],
            email: []
        }
    }
    
    componentDidMount() {
        const subject = new Subject();
        const multicasted = fetchUsers$.pipe(multicast(subject));
        multicasted.subscribe({
            next: (v) => this.setState({users : v.data})
        });

        multicasted.subscribe({
            next: (v) => this.setState({email : v.data[0].email})
          });

        
        
        multicasted.connect();

    }
    render() {
        return (
            <div>
                 <h1>Hello World :) </h1>
                 {
                     this.state.users.map(user => <h1 key={user.id}>{user.name}</h1>)
                 }
                 {
                     <h1>Observer 2 {this.state.email}</h1>
                 }
            </div>
          
        );
    } 
}

export default App;
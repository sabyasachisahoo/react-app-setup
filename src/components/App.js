import React , { Component } from 'react';
import '../styles/App.scss'
import Users from '../containers/Users';
import Posts from '../containers/Posts';

class App extends Component {
    render() {
        return (
          <div>
             <Users />
             <Posts />
          </div>
        );
    } 
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, BrowserHistory, Switch } from 'react-router-dom';
import './App.css';
import Login from "../login/Login";
import Home from "../home/Home";

class App extends Component{

  constructor(props){
    super(props);
    
    this.storeUser = this.storeUser.bind(this);

    this.state = {
      currentPage: 'login',
      activeUser: {
        /* user data */
      },
      userLogged: false
    };
  }

  switchPage(target) {
    this.setState(
      {
        currentPage: target,
      }
    );
  }

  storeUser(userData) {

    this.setState(
      {
        activeUser: userData,
        userLogged: true
      }
    );
  }

  render() {
    const userLogged = this.state.userLogged;

    return(
      <div id="App">
        <Router>
          <div id="routes">
            <Route path="/login" render={ () => <Login onLogin={ this.storeUser } /> } />
            <Route path="/home" render={ () => <Home userData={ this.state.activeUser } /> } />
            { !userLogged ? <Redirect to="/login" /> : <Redirect to="/home" /> }
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

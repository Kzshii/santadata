import React, { Component } from 'react';
import './App.css';
import Login from "../login/Login";

class App extends Component{

  constructor(props){
    super(props);
    
    this.storeUser = this.storeUser.bind(this);

    this.state = {
      currentPage: 'login',
      activeUser: {
        /* user data */
      },
    };
  }

  switchPage(target) {
    this.setState(
      {
        currentPage: target,
      }
    );
  }

  storeUser(loginData) {

    this.setState(
      {
        activeUser: loginData,
      }
    );
    
    this.switchPage();
  }

  render(){
    switch(this.state.currentPage){
      case "login":
        return(
          <Login onLogin={ this.storeUser } />
        );
      default:
        return(
          <h1> Página não encontrada </h1>
        );
    }
  }
}

export default App;

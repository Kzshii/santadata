import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import LocalStorage from "../../lib/localStorage";
import Login from "../login/Login";
import Home from "../home/Home";

class App extends Component{

  render() {
    const userLogged = LocalStorage.get("userLogged");

    return(
      <div id="App">
        <Route exact path="/" render={ () => userLogged ? <Redirect to="/inicio" /> : <Redirect to="/login" /> } />
        <Route path="/login" component={Login} />
        <Route path="/inicio" render={ () => <Home/> } />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from "../login/Login";
import Home from "../home/Home";

class App extends Component{

  render() {
    return(
      <div id="routes">          
        {/*
        <Route path="/login" component={Login} />
        <Route path="/home" render={ () => <Home userData={ JSON.parse(localStorage.getItem("userData")) } /> } /> */}
        <Route exact path="/" render={ () => <Redirect to="/inicio" /> } />
        <Home userData={ JSON.parse(localStorage.getItem("userData"))  } />
      </div>
    );
  }
}

export default App;

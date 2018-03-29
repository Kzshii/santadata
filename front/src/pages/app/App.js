import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from "../login/Login";
import Home from "../home/Home";

class App extends Component{

  render() {
    return(
      <div id="App">
        <Router>
          <div id="routes">
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />
            <Route path="/login" component={Login} />
            <Route path="/home" render={ () => <Home userData={ JSON.parse(localStorage.getItem("userData")) } /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

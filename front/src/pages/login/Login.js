import React, { Component } from 'react';
import './Login.css';
import LoginForm from './../../components/loginForm/LoginForm'
import axios from 'axios';

class Login extends Component {

  constructor(props){
    super(props);
    
    this.requestLogin = this.requestLogin.bind(this);

    this.state = {
      user: '',
      pass: '',
      hash: '',
    };
  }

  requestLogin(loginData) {

    var data = {
      'user': 'joaopandolfi',
      'pass': '123'
    }

    data = JSON.stringify(data);
    data = btoa(data);
    console.log(data);
    axios.defaults.baseURL = 'https://31.220.54.251:8443/';

    axios.post(
      'auth/login/',
      "data="+data
    )
    .then(
      function(response) {
        console.log(response.data);
      }
    )
    .catch(
      function(error) {
        console.log(error);
      }
    );
  }

  render() {

    return(
      <div className="loginPage">
        <div className="loginBox">

          <div className="loginHead">
            SD
          </div>

          <LoginForm requestLogin={ this.requestLogin } />

        </div>
      </div>
    );
  }
}
export default Login;

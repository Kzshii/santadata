import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import LoginForm from './../../components/loginForm/LoginForm';
import Post from './../../lib/axios';
import LocalStorage from './../../lib/localStorage';

class Login extends Component {

  constructor(props){
    super(props);
    
    this.requestLogin = this.requestLogin.bind(this);

    this.state = {
      userLogged: false
    };
  }

  requestLogin(loginData) {
    Post.command = (serverResponse) => {
      if(serverResponse.success) {
        const userData = serverResponse.data;
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("userLogged", JSON.stringify(true));
        this.setState({
          userLogged: true
        });
      } else {
        alert("Login ou senha inválidos.");
      }
    };

    Post.data = {
      'user': loginData.user,
      'pass': loginData.pass /* TODO: Passar md5 na pass. Path: ./rest/libs/helper/md5.js */
    };

    Post('login');
  }

  render() {
    return(
      <div className="LoginPage">
        <div className="loginBox container">
          { this.state.userLogged ? <Redirect to="/inicio"/> : <LoginForm requestLogin={ this.requestLogin } /> }
        </div>
      </div>
    );
  }
}

export default Login;

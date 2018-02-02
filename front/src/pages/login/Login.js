import React, { Component } from 'react';
import './Login.css';
import LoginForm from './../../components/loginForm/LoginForm';
import Post from './../../lib/axios';

class Login extends Component {

  constructor(props){
    super(props);
    
    this.requestLogin = this.requestLogin.bind(this);

    this.state = {
      user: '',
      hash: '',
    };
  }

  requestLogin(loginData) {
    Post.command = (serverResponse) => {
      if(serverResponse.success) {
        this.props.onLogin(serverResponse.data);
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

          <div className="loginHead">

            
          </div>

          <LoginForm requestLogin={ this.requestLogin } />

        </div>
      </div>
    );
  }
}

export default Login;

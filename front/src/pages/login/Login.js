import React, { Component } from 'react';
import './Login.css';
import LoginForm from './../../components/loginForm/LoginForm';
import axios from 'axios';
import Base64 from './../../lib/base64';

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

    var data = Base64.encode({
      'user': loginData.user,
      'pass': loginData.pass
    });

    console.log("login data",loginData);
    console.log("data",data);

    axios.defaults.baseURL = 'https://31.220.54.251:8443/';

    /* Dados de teste */
    this.props.onLogin(
      {
        user_id: 1,
        type_user: 'medic',
        hash: '12345',
        name: 'jhon',
        picture: 'none',
      }
    );

    /* axios.post(
      'auth/login/',
      "data="+data
    )
    .then(
      function(response) {
        if(response.data.success === 1){
          // TODO: login success
        } else if(response.data.success === 0){
          // TODO: login failed
        } else {
          // TODO: falha na rota
        }
      }
    )
    .catch(
      function(error) {
        console.log(error);
      }
    ); */
  }

  render() {

    return(
      <div className="loginPage">
        <div className="loginBox">

          <div className="loginHead">

            
          </div>

          <LoginForm requestLogin={ this.requestLogin } />

        </div>
      </div>
    );
  }
}

export default Login;

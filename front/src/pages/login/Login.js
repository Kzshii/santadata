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
      'pass': loginData.pass /* TODO: Passar md5 na pass. Path: ./rest/libs/helper/md5.js */
    });

    axios.defaults.baseURL = 'https://31.220.54.251:8443/';

    /* Bypass */
    /* this.props.onLogin(
      {
        user_id: 1,
        type_user: 1,
        hash: 'MTY2Mjg5N2IzY2IyODBjOTA0NjE4M2QwMzg3ZGYzYzk=',
        name: 'João Carlos',
        picture: 'none',
      }
    ); */

    axios.post(
      'auth/login/',
      "data="+data
    )
    .then(
      (response) => {
        if(response.data.success === 1) {
          console.log("LOGIN SUCCESS",response.data.data);
          this.props.onLogin(response.data.data);
        } else if(response.data.success === 0) {
          alert("Verifique seu usuário e senha!");
        } else {
          // TODO: falha na rota
          console.log("FALHA NA ROTA");
        }
      }
    )
    .catch(
      function(error) {
        console.log("ERRO NO POST",error);
      }
    );
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

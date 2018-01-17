import React, { Component } from 'react';
import './Login.css';
import LoginForm from './../../components/loginForm/LoginForm'

class Login extends Component {

  constructor(props){
    super(props)

    this.state={
      user: {username: null, 
             password: null}
    }
  }

  handleSubmit= (data)=>{
    /* ConecTar com Servidor */
  }

  render() {

    return(
      <div className="loginPage">
        <div className="loginBox">

          <div className="loginHead">
            SD
          </div>

          <LoginForm onSubmit={this.handleSubmit}/>

        </div>
      </div>
    );
  }
}
export default Login;

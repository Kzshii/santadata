import React, { Component } from 'react';
import './LoginForm.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';



class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      user: 'joaopandolfi', /* test only */
      pass: '123',          /* test only */
      remember: false,
    };
  }

  handleChangeEmail(event) {
    this.setState(
      {
        user: event.target.value,
      }
    );
    console.log(this.state);
  }

  handleChangePassword(event) {
    this.setState(
      {
        pass: event.target.value,
      }
    );
  }

  handleSubmit(event) {
    /* Send the login data to parent component */
    event.preventDefault();
    this.props.requestLogin(this.state);
  }

  render() {

    return(
      <div className="LoginForm">
        <form onSubmit={ this.handleSubmit }  >


        
          <input className="textInput" type="text" placeholder="Usuario" value={ this.state.user } onChange={ this.handleChangeEmail }  /> <br/>

          <input className="textInput"type="password" placeholder="Senha" value={ this.state.pass } onChange={ this.handleChangePassword } /> <br/>
          
          <input className="checkbox check" type="checkbox" id="rememberUserCheck" />
          <label className="remember check" htmlFor="rememberUserCheck">Lembre de mim</label> <br/>
          <FontAwesomeIcon icon="rocket"/>

          <input id="LoginButton" type="submit" value="Entrar" />

          <a id="Signup" className="text-align" href="#">
              Novo Cadastro
          </a>
        </form>
      </div>
    );
  }
}

export default LoginForm;

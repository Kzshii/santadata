import React, { Component } from 'react';
import './LoginForm.css';

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
          <input type="text" placeholder="email" value={ this.state.user } onChange={ this.handleChangeEmail }  /> <br/>
          <input type="password" placeholder="senha" value={ this.state.pass } onChange={ this.handleChangePassword } /> <br/>
          <input type="checkbox" id="rememberUserCheck" />
          <label htmlFor="rememberUserCheck">Lembre de mim</label> <br/>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    );
  }
}

export default LoginForm;

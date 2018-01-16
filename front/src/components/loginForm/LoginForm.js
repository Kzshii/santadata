import React, { Component } from 'react';
import './LoginForm.css';
import axios from 'axios';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      user: 'am9yZGFu/', /* test */
      pass: 'MTIz/',     /* test */
    };
  }

  handleChangeEmail(event) {
    this.setState({ user: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ pass: event.target.value });
  }

  handleSubmit(event) {
    /* TO DO: Requisição e tratamento da resposta do server */
    const baseUrl = 'http://restfull.hol.es/les/user/login/';

    axios.get(baseUrl + this.state.user + this.state.pass)
    .then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    });

    event.preventDefault();
  }

  render() {

    return(
      <div className="LoginForm">
        <form onSubmit={ this.handleSubmit } >
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
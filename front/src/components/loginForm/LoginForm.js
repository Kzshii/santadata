import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind();
  }

  handleSubmit(event) {
    alert('login');
    event.preventDefault();
  }

  render() {

    return(
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit} >
          <input type="email" placeholder="email" /> <br/>
          <input type="password" placeholder="senha" /> <br/>
          <input type="checkbox" id="rememberUserCheck" />
          <label htmlFor="rememberUserCheck">Lembre de mim</label> <br/>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
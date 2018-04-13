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

    var styles = {
      textAlign:'center',
    };

    return(
      <div className="LoginForm  ">
        <div className="limiter">
        <div className="container-login100">
        <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
        <form className="login100-form validate-form" onSubmit={ this.handleSubmit }  >

        <img className="logo" src='https://i.imgur.com/AMlgTGl.png'/>


      {/*validade email*/}
          <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required">
            <input className="input100 textInput" type="text" name="email" placeholder="Usuario" value={ this.state.user } onChange={ this.handleChangeEmail } />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <span className="lnr lnr-envelope"></span>
            </span>
          </div>

          <div className="wrap-input100 validate-input m-b-16" data-validate ="Password is required">
            <input className="textInput input100" type="password" placeholder="Senha" value={ this.state.pass } onChange={ this.handleChangePassword }/>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <span className="lnr lnr-lock"></span>
            </span>
          </div>

          <div className="contact100-form-checkbox m-l-4">
            <input className="checkbox check input-checkbox100" id="rememberUserCheck" type="checkbox" name="remember-me"/>
            <label className="remember check label-checkbox100 fa-check:before" htmlFor="rememberUserCheck" >
              Lembre de mim
            </label>
          </div>

          <input id="LoginButton" className="container-login100-form-btn login100-form-btn" type="submit" value="Entrar" />

          <div className="text-center w-full p-t-50">
            <a id="Signup" className="txt1 hov1" href="#">
              Novo Cadastro
            </a>
          </div>

        </form>
        </div>

      </div>
      </div>
      </div>
    );
  }
}

export default LoginForm;

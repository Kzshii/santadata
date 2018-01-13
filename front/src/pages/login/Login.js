import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    
    this.state = {user: "",
                  password: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target= event.target;
    const value= target.value;
    const name= target.name;

    this.setState({
      [name]:value
    })
  }

  handleSubmit(event) {
    alert('Usuário: ' + this.state.user + "\n" +'Senha:' + this.state.password);
    event.preventDefault();
  }

  render(){
    return( 
      <div className="login">
        <div className="login-box">
          <div className="login-header">
            <Logo/>
          </div>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <label>
                Usuário:
                <input type="text" value={this.state.user} onChange={this.handleChange} name="user"/>
              </label>
              <br/>
              <label>
                Senha:
                <input type="text" value={this.state.password} onChange={this.handleChange} name="password"/>
              </label>
              <input type="submit" value="Submit" />
           </form>  
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

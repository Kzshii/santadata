import React, { Component } from 'react';
import './Home.css';
import NewPatient from './../../components/newPatient/NewPatient';

class Home extends Component {
  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentSession: <p>home</p>,
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.switchSession(<NewPatient />);
  }

  switchSession(target) {
    this.setState(
      {
        currentSession: target,
      }
    );
  }

  render() {
    return(
      <div>
        <h1>Homepage</h1>
        <button onClick={ this.handleClick } >
          Novo Paciente
        </button>
        <session>
          { this.state.currentSession }
        </session>

      </div>
    );
  }
}

export default Home;

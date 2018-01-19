import React, { Component } from 'react';
import './Home.css';
import NewPatient from './../../components/newPatient/NewPatient';
import SearchPatient from './../../components/searchPatient/SearchPatient';

class Home extends Component {
  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.switchSession = this.switchSession.bind(this);

    this.state = {
      currentSession: <SearchPatient switchSession={ this.switchSession } />,
    };
  }

  handleClick(event) {
    event.preventDefault();

    switch(event.target.name) {
      case 'newPatient':
        this.switchSession( <NewPatient  /> );
        break;
      case 'searchPatient':
        this.switchSession(<SearchPatient switchSession={ this.switchSession } />);
    }

    
  }

  switchSession(target) {
    console.log("Switch session", target);
    this.setState(
      {
        currentSession: target,
      }
    );
  }

  render() {
    return(
      <div className="Home" >
        <h1>Bem vindo {this.props.userData.name } </h1>
        <button name="newPatient" onClick={ this.handleClick } >
          Novo Paciente
        </button>
        <button name="searchPatient" onClick={ this.handleClick } >
          Buscar Paciente
        </button>
        <section>
          { this.state.currentSession }
        </section>

      </div>
    );
  }
}

export default Home;

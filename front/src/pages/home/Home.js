import React, { Component } from 'react';
import './Home.css';
import NewPatient from './../../components/newPatient/NewPatient';
import SearchPatient from './../../components/searchPatient/SearchPatient';

class Home extends Component {
  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.switchSection = this.switchSection.bind(this);

    this.state = {
      currentSection: <SearchPatient switchSection={ this.switchSection } />,
    };
  }

  handleClick(event) {
    event.preventDefault();

    switch(event.target.name) {
      case 'newPatient':
        this.switchSection( <NewPatient  /> );
        break;
      case 'searchPatient':
        this.switchSection( <SearchPatient switchSection={ this.switchSection } /> );
      default:
        break;
    }

    
  }

  switchSection(target) {
    console.log("Switch section", target);
    this.setState(
      {
        currentSection: target,
      }
    );
    console.log(this.state.currentSection);
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
          { this.state.currentSection }
        </section>

      </div>
    );
  }
}

export default Home;

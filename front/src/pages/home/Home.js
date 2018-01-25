import React, { Component } from 'react';
import './Home.css';
import NewPatient from './../../components/newPatient/NewPatient';
import SearchPatient from './../../components/searchPatient/SearchPatient';
import Intro from './../../components/intro/Intro';

class Home extends Component {
  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.switchSession = this.switchSession.bind(this);

    this.state = {
      currentSession: <Intro />,
    };
  }

  handleClick(event) {
    event.preventDefault();

    switch(event.target.name) {
      case 'intro':
        this.switchSession( <Intro  /> );
        break;
      case 'newPatient':
        this.switchSession( <NewPatient switchSession={ this.switchSession } /> );
        break;
      case 'searchPatient':
        this.switchSession( <SearchPatient switchSession={ this.switchSession } /> );
        break;
      default:
        break;
    }
  }

  switchSession(target) {
    console.log("Switch session", target);
    this.setState(
      {
        currentSession: target,
      }
    );
    console.log(this.state.currentSession)
  }

  render() {
    return(
      <div className="Home" >

        <header className="nav" id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              <a href="#">
                <img src='https://svgshare.com/i/57j.svg' alt='logo' title="" onClick={ this.handleClick } name="intro"/>
              </a> 
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a name="intro" onClick={ this.handleClick }>Painel</a></li>
                <li className="menu-active"><a name="newPatient" onClick={ this.handleClick } >Novo Paciente</a></li>
                <li className="menu-active"><a name="searchPatient" onClick={ this.handleClick } >Buscar Paciente</a></li>
                <li>
                  <a href="#">Usuário</a>
                  <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Log out</a></li>
                    <li><a href="#">Something</a></li>
                    <li><a href="#">BLAH BLAH BLAH</a></li>
                  </ul>
                </li>

                {/*IF WE WANT SOMETHING TO DROPDOWN*/}
              </ul>
            </nav>
            {/*<!-- #nav-menu-container -->*/}
          </div>
        </header>
        {/*<!-- #header -->*/}
   
        <section>
          { this.state.currentSession }
        </section>
      </div>
    );
  }
}

export default Home;

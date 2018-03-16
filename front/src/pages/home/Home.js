import React, { Component } from 'react';
import './Home.css';
import NewPatient from './../../components/newPatient/NewPatient';
import SearchPatient from './../../components/searchPatient/SearchPatient';
import Intro from './../../components/intro/Intro';

class Home extends Component {
  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.switchSection = this.switchSection.bind(this);

    this.state = {
      currentSection: <Intro userData={ this.props.userData } />,
    };
  }

  handleClick(event) {
    event.preventDefault();

    switch(event.target.name) {
      case 'intro':
        this.switchSection( <Intro userData={ this.props.userData } /> );
        break;
      case 'newPatient':
        this.switchSection( <NewPatient switchSection={ this.switchSection } userData={ this.props.userData } /> );
        break;
      case 'searchPatient':
        this.switchSection( <SearchPatient switchSection={ this.switchSection } userData={ this.props.userData } /> );
        break;
      default:
        break;
    }
  }

  switchSection(target) {
    this.setState(
      {
        currentSection: target,
      }
    );
  }

  render() {
    return(

      <div className="Home" >

      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse"><span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span></button>

        
         <a className="navbar-brand" href="#">
                <img className="logo-panel img-responsive" src='https://i.imgur.com/x2KHDKm.png' alt='SantaData' title="" onClick={ this.handleClick } name="intro"/>
              </a> 

      </div>
    </div>
  </nav>

  <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
    <div className="profile-sidebar">
      <div className="profile-userpic">
        <img src="http://placehold.it/50/30a5ff/fff" className="img-responsive" alt=""/>
      </div>
      <div className="profile-usertitle">
        <div className="profile-usertitle-name">João Carlos</div>
        <div className="profile-usertitle-status"><span className="indicator label-success"></span>Online</div>
      </div>
      <div className="clear"></div>
    </div>
    <div className="divider"></div>
    <form role="search">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Pesquisar"/>
      </div>
    </form>
    <ul className="nav menu">


      <li className="menu-active"><a name="intro" onClick={ this.handleClick }><em className="lnr lnr-home fas fa-home">&nbsp;</em>Painel</a></li>
      <li><a href="#"><em className="far fa-calendar">&nbsp;</em> Consultas</a></li>
      <li className="menu-active"><a name="newPatient" onClick={ this.handleClick }><em className="fas fa-plus">&nbsp;</em> Novo Paciente</a></li>
      <li className="menu-active"><a name="searchPatient" onClick={ this.handleClick }><em className="fas fa-search">&nbsp;</em> Buscar Paciente</a></li>

      <li className="parent "><a data-toggle="collapse" href="#sub-item-1">
        <em className="fa fa-navicon">&nbsp;</em> Usuário <span data-toggle="collapse" href="#sub-item-1" className="icon pull-left"><em className="fas fa-user"></em></span>
        </a>
        <ul className="children collapse" id="sub-item-1">
          <li><a className="" href="#">
            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 1
          </a></li>
          <li><a className="" href="#">
            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 2
          </a></li>
          <li><a className="" href="#">
            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 3
          </a></li>
        </ul>
      </li>
      <li><a href="login.html"><em className="fa fa-power-off">&nbsp;</em> Logout</a></li>
    </ul>
  </div>
    
  <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
   
    
    
     

        <section>
          { this.state.currentSection }
        </section>
      </div>
      </div>


    );
  }
}

export default Home;

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

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown"><a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
            <em className="fa fa-envelope"></em><span className="label label-danger">15</span>
          </a>
            <ul className="dropdown-menu dropdown-messages">
              <li>
                <div className="dropdown-messages-box"><a href="profile.html" className="pull-left">
                  <img alt="image" className="img-circle" src="http://placehold.it/40/30a5ff/fff"/>
                  </a>
                  <div className="message-body"><small className="pull-right">3 mins ago</small>
                    <a href="#"><strong>John Doe</strong> commented on <strong>your photo</strong>.</a>
                  <br /><small className="text-muted">1:24 pm - 25/03/2015</small></div>
                </div>
              </li>
              <li className="divider"></li>
              <li>
                <div className="dropdown-messages-box"><a href="profile.html" className="pull-left">
                  <img alt="image" className="img-circle" src="http://placehold.it/40/30a5ff/fff"/>
                  </a>
                  <div className="message-body"><small className="pull-right">1 hour ago</small>
                    <a href="#">New message from <strong>Jane Doe</strong>.</a>
                  <br /><small className="text-muted">12:27 pm - 25/03/2015</small></div>
                </div>
              </li>
              <li className="divider"></li>
              <li>
                <div className="all-button"><a href="#">
                  <em className="fa fa-inbox"></em> <strong>All Messages</strong>
                </a></div>
              </li>
            </ul>
          </li>
          <li className="dropdown"><a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
            <em className="fa fa-bell"></em><span className="label label-info">5</span>
          </a>
            <ul className="dropdown-menu dropdown-alerts">
              <li><a href="#">
                <div><em className="fa fa-envelope"></em> 1 New Message
                  <span className="pull-right text-muted small">3 mins ago</span></div>
              </a></li>
              <li className="divider"></li>
              <li><a href="#">
                <div><em className="fa fa-heart"></em> 12 New Likes
                  <span className="pull-right text-muted small">4 mins ago</span></div>
              </a></li>
              <li className="divider"></li>
              <li><a href="#">
                <div><em className="fa fa-user"></em> 5 New Followers
                  <span className="pull-right text-muted small">4 mins ago</span></div>
              </a></li>
            </ul>
          </li>
        </ul>
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
        <em className="fa fa-navicon">&nbsp;</em> Usuário <span data-toggle="collapse" href="#sub-item-1" className="icon pull-right"><em className="fa fa-plus"></em></span>
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
    <div className="row">
      <ol className="breadcrumb">
        <li><a href="#">
          <em className="fa fa-home"></em>
        </a></li>
        <li className="active">Painel</li>
      </ol>
    </div>
    
    
     

        <section>
          { this.state.currentSection }
        </section>
      </div>
      </div>


    );
  }
}

export default Home;

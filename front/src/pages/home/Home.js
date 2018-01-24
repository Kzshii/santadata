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
        this.switchSession( <SearchPatient switchSession={ this.switchSession } /> );
      case 'intro':
        this.switchSession( <intro switchSession={ this.switchSession } /> );
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

      <header id="header">
      <div className="container">

      <div id="logo" className="pull-left">
        
      <a href="#intro"><img src={'https://svgshare.com/i/57j.svg'} alt={'logo'} title=""/></a> 
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active"><a name="intro" onClick={ this.handleClick }>Painel</a></li>

          <li className="menu-active"><a name="newPatient" onClick={ this.handleClick } > Novo Paciente</a></li>




           <li><a href="">Usuario</a>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Log out</a></li>
              <li><a href="#">Something</a></li>
              <li><a href="#">BLAH BLAH BLAH</a></li>
            </ul>
          </li>
           <section>
          { this.state.currentSession }
          </section>

        {/*IF WE WANT SOMETHING TO DROPDOWN*/}

         
          
        </ul>
      </nav>
       {/*<!-- #nav-menu-container -->*/}
    </div>
  </header>
{/*<!-- #header -->*/}

      

      {/*<body id="intro">

        <div className= "intro-text">

        <div id="SAME-FUCKING-LINE">
      

        <a><img id="doctor"src={'https://plasticsurgeonforkids.com/wp-content/uploads/MAIN-HEADSHOT-Circle1.png'} alt={'logo'} title=""/></a> 

        <div className="welcome">

        <h1>Bem vindo,<br/> {this.props.userData.name } </h1>

        </div>
        </div>

      
       
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
        </body> */}
      </div>
    );
  }
}

export default Home;

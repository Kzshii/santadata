import React, { Component } from 'react';
import './intro.css';
import Base64 from './../../lib/base64';
import axios from 'axios';

render() {
	return(

	<div id="intro">

        <div className= "intro-text">

        <div id="SAME-FUCKING-LINE">
      

        <a><img id="doctor"src={'https://plasticsurgeonforkids.com/wp-content/uploads/MAIN-HEADSHOT-Circle1.png'} alt={'logo'} title=""/></a> 

        <div className="welcome">

        <h1>Bem vindo,<br/> {this.props.userData.name } </h1>

        </div>
        </div>

      
        {/*
        <button name="newPatient" onClick={ this.handleClick } >
          Novo Paciente
        </button>
        <button name="searchPatient" onClick={ this.handleClick } >
          Buscar Paciente
        </button>
        <section>
          { this.state.currentSession }
        </section>
      */}
        </div>
        </div>

        );

}
export default intro;

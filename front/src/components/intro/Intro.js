import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(

      <div className="Intro">

      <div className="row">
      <div className="col-lg-12">
      <h1 className="page-header">Bem vindo, { this.props.userData.name }</h1>


        <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            Calendar
           </div>
          <div className="panel-body">
            <div id="calendar"></div>
          </div>
        </div>
      
    </div>

    </div>
  </div>
   
    
   
 
  </div>  

  
       
    );
  }
}

export default Intro;

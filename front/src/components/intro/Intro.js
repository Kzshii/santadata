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
            <ul className="pull-right panel-settings panel-button-tab-right">
              <li className="dropdown"><a className="pull-right dropdown-toggle" data-toggle="dropdown" href="#">
                <em className="fa fa-cogs"></em>
              </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <ul className="dropdown-settings">
                      <li><a href="#">
                        <em className="fa fa-cog"></em> Settings 1
                      </a></li>
                      <li className="divider"></li>
                      <li><a href="#">
                        <em className="fa fa-cog"></em> Settings 2
                      </a></li>
                      <li className="divider"></li>
                      <li><a href="#">
                        <em className="fa fa-cog"></em> Settings 3
                      </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <span className="pull-right clickable panel-toggle panel-button-tab-left"><em className="fa fa-toggle-up"></em></span></div>
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

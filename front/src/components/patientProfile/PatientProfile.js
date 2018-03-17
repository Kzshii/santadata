import React, { Component } from 'react';
import './PatientProfile.css';
import InfoCard from './../infoCard/InfoCard';
import Button from './../button/Button';
import NewConsult from './../newConsult/NewConsult';
import Post from './../../lib/axios';

class PatientProfile extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      patientData: null,
    };
  }

  componentDidMount() {
    const patientId = this.props.patientId;
    const user_id = this.props.userData.user_id;
    const user_hash = this.props.userData.hash;

    Post.command = (serverResponse) => {
      if(serverResponse.success) {
        this.setState({
          patientData: serverResponse.data[0]
        });
      }
    };

    Post.urlData = [
      patientId,
      user_id,
      user_hash
    ];

    Post('getPatient');
  }

  handleClick(event) {
    event.preventDefault();

    console.log("Aqui",this.state.patientData);
    this.props.switchSection(<NewConsult patient={ this.state.patientData } switchSection={ this.props.switchSection } userData={ this.props.userData } />);
  }

  render() {
    return(

      <div className="PatientProfile">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="col-lg-12">Perfil do Paciente  <button type="submit" className="btn btn-primary btn-md  col-lg-6" name="newConsult" onClick={ this.handleClick }>
                    Nova Consulta</button></h2>
           
               
                 
            
         
          </div>
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">Paciente</div>
              <div className="panel-body">

                 <InfoCard data={ this.state.patientData } />
                 <br>
                 </br>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">Estado Atual</div>
              <div className="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">ICFER</div>
              <div className="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="panel panel-info">
              <div class="panel-heading">Co-Morbilidades</div>
              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat. Donec vestibulum magna a dui pharetra molestie</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="panel panel-info">
              <div class="panel-heading">Info Panel</div>
              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus.Pellentesque ut ante in sapien blandit luctus sed ut lacus.  Fusce et dui urna.</p>
              </div>
            </div>
      </div>
        </div>

      <div className="col-md-12">
        <div className="panel panel-default ">
          <div className="panel-heading"> Linha do Tempo
            <span className="pull-right clickable panel-toggle panel-button-tab-left"><em class="fa fa-toggle-up"></em></span></div>
          <div className="panel-body timeline-container">
            <ul className="timeline">
              <li>
                <div className="timeline-badge primary">2018</div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Lorem ipsum dolor sit amet</h4>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sodales nisl. Donec malesuada orci ornare risus finibus feugiat.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge primary date-size">2017</div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Lorem ipsum dolor sit amet</h4>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge primary">2016</div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Lorem ipsum dolor sit amet</h4>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sodales nisl. Donec malesuada orci ornare risus finibus feugiat.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge primary">2015</div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Lorem ipsum dolor sit amet</h4>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>



        </div>

        
    );
  }
}

export default PatientProfile;

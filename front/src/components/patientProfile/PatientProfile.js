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

  componentDidMount(){
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

  handleClick(event){
    event.preventDefault();

    console.log("Aqui",this.state.patientData);
    this.props.switchSection(<NewConsult patient={ this.state.patientData } switchSection={ this.props.switchSection } userData={ this.props.userData } />);
  }

  render() {
    return(
      <div className="PatientProfile float-left">

        <div className="profile float-left">

          <div className="top-bar">
            <h3>Paciente</h3>
          </div>
          
          <div className="NewConsult top-button-bar">
              <button className="btn btn-outline-primary float-right" name="newConsult" onClick={ this.handleClick }>
                NovaConsulta
              </button>
          </div> 
          <div className="patientData">
            <InfoCard data={ this.state.patientData } />
          </div>

        </div>
{/*
        <div className="allergies float-left">

          <div className="top-bar">
            <h3>Alergias</h3>
          </div> 

          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>

*/}
        <div className="currentState float-left">

          <div className="top-bar">
            <h3>Estado Atual</h3>
          </div> 

          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>

        <div className="ICFER float-left">

          <div className="top-bar">
            <h3>ICFER</h3>
          </div> 

          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>

        <div className="comorbidities float-left">

          <div className="top-bar">
            <h3>Co-Morbilidades</h3>
          </div> 

          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


        </div>

        </div>

        
    );
  }
}

export default PatientProfile;

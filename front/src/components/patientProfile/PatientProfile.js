import React, { Component } from 'react';
import './PatientProfile.css';
import InfoCard from './../infoCard/InfoCard';
import Base64 from './../../lib/base64';
import axios from 'axios';
import Button from './../button/Button';
import NewConsult from './../newConsult/NewConsult';

class PatientProfile extends Component {

  constructor(props) {
    super(props);
    this.searchPatient = this.searchPatient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      patientData: null,
    };
  }

  componentDidMount(){
    this.searchPatient(this.props.id);
  }

  searchPatient(id) {
    var patientId = 4; /* this.props.id */
    
    axios.defaults.baseURL = 'https://31.220.54.251:8443/';
    
    axios.post(
      'gen/get/patient/'+patientId+'/1/MTY2Mjg5N2IzY2IyODBjOTA0NjE4M2QwMzg3ZGYzYzk=/', 
      'data='+Base64.encode(
        {}
      )
    )
    .then(
      (response) => {
        this.setState({
          patientData: response.data.data[0]
        });

      }
    ).catch();
  }

  handleSubmit(event){
    event.preventDefault();

    console.log("Aqui")
    console.log(this.state.patientData)
    this.props.switchSession(<NewConsult patient={this.state.patientData} switchSession={this.props.switchSession}/>)
  }

  render() {
    return(
      <div className="PatientProfile float-left">


      <div className="profile float-left">

        <div className="top-bar">
          <h3>Paciente</h3>
        </div>
        

        <div className="NewConsult top-button-bar">
               <button className="btn btn-outline-primary float-right" name="newConsult" onClick={this.handleSubmit}>
                  NovaConsulta
                </button>

        </div> 
        <div className="patientData">



          <InfoCard data={ this.state.patientData } />
        </div>

        </div>

        <div className="allergies float-left">

          <div className="top-bar">
            <h3>Alergias</h3>
          </div> 

          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>

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

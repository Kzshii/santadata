import React, { Component } from 'react';
import './PatientProfile.css';
import InfoCard from './../infoCard/InfoCard';
import Base64 from './../../lib/base64';
import axios from 'axios';


class PatientProfile extends Component {

  constructor(props){

    super(props)

      
    this.state= {
      userData: null,

    }

    this.searchPatient(1)
    

  }

  searchPatient(id) {
    var patientId= 4 /* this.props.id */
    
    axios.defaults.baseURL = 'https://31.220.54.251:8443/';
    
     axios.post(
      'gen/get/patient/'+patientId+'/1/MTY2Mjg5N2IzY2IyODBjOTA0NjE4M2QwMzg3ZGYzYzk=/', 
      'data='+Base64.encode(
        {}
      )
    )
    .then(
      (response)=>{
        this.setState({
          userData: response.data.data[0]
        })

        console.log(this.state)
      }
    ).catch(); 
    
    
    
    /* test block */
  /*   return({
      data: [
        {name: "Arthur", id: "55"},{name: "Arthur Cristo", id: "58"}
      ]
    }); */
  }









  render() {
    return(
      <div className="PatientProfile">
        <div className="patientData">
          <InfoCard data="" />
        </div>
        <div className="allergies"></div>
        <div className="currentState"></div>
        <div className="ICFER"></div>
        <div className="comorbidities"></div>
        <div className="timeLine"></div>
      </div>
    );
  }
}

export default PatientProfile;

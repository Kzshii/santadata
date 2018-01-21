import React, { Component } from 'react';
import './PatientProfile.css';
import InfoCard from './../infoCard/InfoCard';

class PatientProfile extends Component {

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

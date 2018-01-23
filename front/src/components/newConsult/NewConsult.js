import React, { Component } from 'react';
import './NewConsult.css';
//import axios from 'axios';
import Anamnese from "./anamnese/Anamnese";
import Evidences from "./evidences/Evidences";
import PatientProfile from './../patientProfile/PatientProfile';
import base64 from '../../lib/base64';
import Interventions from "./interventions/Interventions";
/* import Medicines from "./medicines/Medicines"; */

/* import PhysicalExams from "./physicalExams/PhysicalExams";
import Predictor from "./predictors/Predictors";   */

class NewConsult extends Component {

	constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.goToSection = this.goToSection.bind(this);
    this.storeFormData = this.storeFormData.bind(this);
    this.saveConsult= this.saveConsult.bind(this);

    this.sections = [
      <Anamnese title="Anamnese" saveData={ this.storeFormData } />,
      <Evidences title="Evidências" saveData={ this.storeFormData } />,
      <Interventions title="Intervenções" saveData={ this.storeFormData } />,
    ];
			
    this.state = {
      currentSection: 0,

      

      consultData: {},
    };
  }

  storeFormData(param, data) {
    let consultData = this.state.consultData;
    consultData[param] = data;

    this.setState(
      {
        consultData: consultData,
      }
    );
    this.nextSection()

    console.log("CONSULTA:",this.state.consultData);
  }

  nextSection() {
    if(this.state.currentSection < this.sections.length - 1) {
      var i = this.state.currentSection +1;

      this.setState({
        currentSection: i
      });
    }
  }

  prevSection() {
    if(this.state.currentSection > 0 ) {
      var i = this.state.currentSection -1;

      this.setState({
        currentSection: i
      });

    }
  }

  goToSection(section) {
    this.setState({
      currentSection: section
    });
  }
  
  
  saveConsult(){
    //Salvar Consulta

    const consulData= this.state.consultData;


    console.log("paciente aqui: =)")
    console.log(this.props.patient)

 
    const data= base64.encode({

      id_pacient: this.props.patient.idpatient,
      id_user: "",

      data: consulData,

    }) 
      
    alert("Consulta Salva");
    this.props.switchSession(<PatientProfile patient={this.props.patient} switchSession={this.props.switchSession}/>)
  }

	render() {
    return(
			<div className="NewConsult">
				
        <div className="sections">
          {
            this.sections.map(
              (comp,indice) => {
                return(
                  <button key={comp.props.title} name={ comp.props.title}  onClick= { () => { this.goToSection(indice)} } >
                    { comp.props.title }
                  </button>
                );
              }
            )
          }
          <button name="saveConsult" onClick={this.saveConsult}>Salvar Consulta</button>
        </div>

        { this.sections[this.state.currentSection] }
        
        <button name="prev" onClick={ this.prevSection }>Anterior</button>
        <button name="next" onClick={ this.nextSection }>Proximo</button>
				
			</div>
		);
	}
}

export default NewConsult;

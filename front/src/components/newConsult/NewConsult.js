import React, { Component } from 'react';
import './NewConsult.css';
import Anamnese from "./anamnese/Anamnese";
import Evidences from "./evidences/Evidences";
import PatientProfile from './../patientProfile/PatientProfile';
import Interventions from "./interventions/Interventions";
import Predictors from "./predictors/Predictors";
import PhysicalExams from "./physicalExams/PhysicalExams";
import Medicines from "./medicines/Medicines";
import Post from "./../../lib/axios";

class NewConsult extends Component {

	constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.goToSection = this.goToSection.bind(this);
    this.storeFormData = this.storeFormData.bind(this);
    this.saveConsult= this.saveConsult.bind(this);

    this.sections = [
      <Anamnese title="Anamnese" saveData={ this.storeFormData } prepare={ this.prepare } />,
      <Evidences title="Evidências" saveData={ this.storeFormData } prepare={ this.prepare } />,
      <Interventions title="Intervenções" saveData={ this.storeFormData } prepare={ this.prepare } />,
      <PhysicalExams title="Exames Físicos" saveData={ this.storeFormData } prepare={ this.prepare } />,
      <Medicines title="Medicamentos" saveData={ this.storeFormData } prepare={ this.prepare } />,
      <Predictors title="Preditores" saveData={ this.storeFormData } prepare={ this.prepare } />,
    ];

    this.state = {
      currentSection: 0,
      consultData: {},
    };
  }

	componentDidMount(){
		localStorage.setItem("consult", JSON.stringify({}));
	}

  prepare(component, route) {
    Post.command = (serverResponse) => {
      if(serverResponse.success) {
        component.setState({
          prepare: serverResponse.data
        });
        console.log("NEW CONSULT STATE",this.state);
      }
    }

    Post(route);
  }

  storeFormData(param, data) {
    let consultData = this.state.consultData;
    consultData[param] = JSON.parse(JSON.stringify(data));

    this.setState(
      {
        consultData: consultData,
      }
    );

    this.nextSection()

    console.log("CONSULTA FORM GUARDADO:",this.state.consultData);
  }

  nextSection() {
    if(this.state.currentSection < this.sections.length - 1) {
      let i = this.state.currentSection +1;

      this.setState({
        currentSection: i
      });
    }
  }

  prevSection() {
    if(this.state.currentSection > 0 ) {
      let i = this.state.currentSection - 1;

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
    Post.command = (serverResponse) => {
      if(serverResponse.success) {
        alert("Consulta salva com sucesso");
        //this.props.switchSection(<PatientProfile patient={ this.props.patient } switchSection={ this.props.switchSection }/>);
      }
    };

    Post.data = {
      id_patient: this.props.patient.id,
      id_user: this.props.userData.user,
      data: this.state.consultData /* TO DO: Formatar os dados da consulta */
    }

    //Post('saveConsult');
    alert("Consulta salva com sucesso!*");
  }

	render() {
    console.log("NOVA CONSULTA - ESTADO", this.state);
    return(
			<div className="NewConsult">

        <div className="sections">
          {
            this.sections.map(
              (comp,index) => {
                return(
                  <button key={ comp.props.title } name={ comp.props.title }  onClick= { () => { this.goToSection(index) } } >
                    { comp.props.title }
                  </button>
                );
              }
            )
          }
          <button id="SaveConsult" name="saveConsult" onClick={ this.saveConsult }>
            Salvar Consulta
          </button>
        </div>

        <section className="consultSection">
          { this.sections[this.state.currentSection] }
        </section>

        <button name="prev" onClick={ this.prevSection }>Anterior</button>
        <button name="next" onClick={ this.nextSection }>Proximo</button>

			</div>
		);
	}
}

export default NewConsult;

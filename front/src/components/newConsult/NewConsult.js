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
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

class NewConsult extends Component {

	constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.goToSection = this.goToSection.bind(this);
    this.storeFormData = this.storeFormData.bind(this);
    this.saveConsult= this.saveConsult.bind(this);

    this.sections = {
      anamnese: <Anamnese title="Anamnese" saveData={ this.storeFormData } prepare={ this.prepare } prev="preditores" next="evidencias" />,
      evidencias: <Evidences title="Evidências" saveData={ this.storeFormData } prepare={ this.prepare } prev="anamnese" next="intervencoes" />,
      intervencoes: <Interventions title="Intervenções" saveData={ this.storeFormData } prepare={ this.prepare } prev="evidencias" next="exames" />,
      exames: <PhysicalExams title="Exames Físicos" saveData={ this.storeFormData } prepare={ this.prepare } prev="intervencoes" next="medicamentos" />,
      medicamentos: <Medicines title="Medicamentos" saveData={ this.storeFormData } prepare={ this.prepare } prev="exames" next="preditores" />,
      preditores: <Predictors title="Preditores" saveData={ this.storeFormData } prepare={ this.prepare } prev="medicamentos" next="anamnese" />,
    };

    //this.currentSection;

    this.state = {
      currentSection: "anamnese",
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
      } else {
        alert("Erro ao salvar consulta!");
      }
    };

    Post.data = {
      id_patient: this.props.match.params.patientId,
      id_user: this.props.userData.user,
      data: this.state.consultData /* TO DO: Formatar os dados da consulta */
    }

    Post('saveConsult');
    //alert("Consulta salva com sucesso!*");
  }

	render() {
    console.log(this.props);
    console.log("NOVA CONSULTA - ESTADO", this.state);
    return(

        <div className="NewConsult">

          <div className="sections">
            {
              Object.keys(this.sections).map(
                (routeSection) => {
                  return(
                    <Link to={`/paciente/${this.props.match.params.patientId}/nova-consulta/${routeSection}`} key={ routeSection } >
                      <button name={ routeSection } >
                        { this.sections[routeSection].props.title }
                      </button>
                    </Link>
                  );
                }
              )
            }

            <button id="SaveConsult" name="saveConsult" onClick={ this.saveConsult }>
              Salvar Consulta
            </button>
          </div>

          {console.log("section:",Object.keys(this.sections)[this.state.currentSection])}

          <section className="consultSection">
            {this.props.child}
          </section>
          
          <Link to={this.props.prev}><button name="prev" >Anterior</button></Link>
          <Link to={this.props.next}><button name="next" >Proximo</button></Link>
          
        </div>

		);
	}
}

export default NewConsult;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import LocalStorage from "../../lib/localStorage";
import Login from "../login/Login";
import Home from "../home/Home";
import Intro from '../../components/intro/Intro';
import NewPatient from '../../components/newPatient/NewPatient';
import SearchPatient from '../../components/searchPatient/SearchPatient';
import PatientProfile from '../../components/patientProfile/PatientProfile';
import Research from '../research/Research';
import NewConsult from '../../components/newConsult/NewConsult';
import Anamnese from "../../components/newConsult/anamnese/Anamnese";
import Evidences from "../../components/newConsult/evidences/Evidences";
import Interventions from "../../components/newConsult/interventions/Interventions";
import Predictors from "../../components/newConsult/predictors/Predictors";
import PhysicalExams from "../../components/newConsult/physicalExams/PhysicalExams";
import Medicines from "../../components/newConsult/medicines/Medicines";

class App extends Component{

  render() {
		const userLogged = LocalStorage.get("userLogged");
		const userData = LocalStorage.get("userData");

    return(
			<Router>
				<div id="App">
					<Switch>
						<Route exact path="/" render={ () => userLogged ? <Redirect to="/inicio" /> : <Redirect to="/login" /> } />
						<Route exact path="/login" render ={ () => <Login/> } />
						<Route exact path="/inicio" render={ () => <Home child={ <Intro userData = { userData } /> } /> } />
						<Route exact path="/novo-paciente" render={ () => <Home child={ <NewPatient userData = { userData } /> } /> } />
						<Route exact path="/busca-paciente" render={ () => <Home child={ <SearchPatient userData = { userData } /> } /> } />
						<Route exact path="/pesquisa" render={ () => <Home child={ <Research userData = { userData } /> } /> } />
						<Route exact path="/paciente/:patientId" render={ ({match}) => <Home child={ <PatientProfile userData = { userData } match={match} /> } /> } />
						<Route exact path="/paciente/:patientId/nova-consulta" render={ () => <Redirect to="/paciente/:patientId/nova-consulta/anamnese" /> } />
						<Route exact path="/paciente/:patientId/nova-consulta/anamnese" render={ ({match}) => <Home child={ <NewConsult userData = { userData } match={match} child={<Anamnese title="Anamnese" saveData={ this.storeFormData } prepare={ this.prepare } />} prev="/paciente/:patientId/nova-consulta/preditores" next="/paciente/:patientId/nova-consulta/evidencias" /> } /> } />
						<Route exact path="/paciente/:patientId/nova-consulta/evidencias" render={ ({match}) => <Home child={ <NewConsult userData = { userData } match={match} child={<Evidences title="Evidências" saveData={ this.storeFormData } prepare={ this.prepare } />} prev="/paciente/:patientId/nova-consulta/anamnese" next="/paciente/:patientId/nova-consulta/intervencoes" /> } /> } />
						<Route exact path="/paciente/:patientId/nova-consulta/intervencoes" render={ ({match}) => <Home child={ <NewConsult userData = { userData } match={match} child={<Interventions title="Intervenções" saveData={ this.storeFormData } prepare={ this.prepare } />} prev="/paciente/:patientId/nova-consulta/evidencias" next="/paciente/:patientId/nova-consulta/exames" /> } /> } />
						<Route exact path="/paciente/:patientId/nova-consulta/exames" render={ ({match}) => <Home child={ <NewConsult userData = { userData } match={match} child={<PhysicalExams title="Exames Físicos" saveData={ this.storeFormData } prepare={ this.prepare } />} prev="/paciente/:patientId/nova-consulta/intervencoes" next="/paciente/:patientId/nova-consulta/medicamentos" /> } /> } />
						<Route exact path="/paciente/:patientId/nova-consulta/medicamentos" render={ ({match}) => <Home child={ <NewConsult userData = { userData } match={match} child={<Medicines title="Medicamentos" saveData={ this.storeFormData } prepare={ this.prepare } />} prev="/paciente/:patientId/nova-consulta/exames" next="/paciente/:patientId/nova-consulta/preditores" /> } /> } />
						<Route exact path="/paciente/:patientId/nova-consulta/preditores" render={ ({match}) => <Home child={ <NewConsult userData = { userData } match={match} child={<Predictors title="Preditores" saveData={ this.storeFormData } prepare={ this.prepare } />} prev="/paciente/:patientId/nova-consulta/medicamentos" next="/paciente/:patientId/nova-consulta/anamnese" /> } /> } />
					</Switch>
				</div>
			</Router>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './SearchPatient.css';
import Base64 from './../../lib/base64';
import axios from 'axios';
import PatientList from './../../components/patientList/PatientList';
import PatientProfile from './../patientProfile/PatientProfile';
import Post from './../../lib/axios';

class SearchPatient extends Component {
  
  constructor(props) {
    super(props);
    
    this.searchPatient = this.searchPatient.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openPatient = this.openPatient.bind(this);
    
    this.state = {
      show: null, // Vetor de Pacientes que devo exibir na tabela
      search: { // Paciente a ser buscado.
        /*
          @name: Search by name
        */
        name: '',
      }
    };
  }
  
  handleChange(event) {
    let searchData = this.state.search;
    const value = event.target.value;
    
    switch(event.target.name) {
      case "patientName":
        searchData.name = value;
        break;
      
      default:
        break;
    }
    
    this.setState(
      {
        search: searchData,
      }
    );
  }
  
  searchPatient() {
    /*user= {this.props.user} */
    
    
    
    /* test block */
    /* return({
      data: [
        {name: "Arthur", id: "55"},{name: "Arthur Cristo", id: "56"}, {name: "Joao Lopez", id: "57"}, {name: "Ludmyla Almeida", id: "58"}
      ]
    }); */
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const user_id = this.props.userData.user_id;
    const user_hash = this.props.userData.hash;
    
    /* let searchResult = [];
    searchResult = this.searchPatient();
    const searchData = this.state.search;
    var patientsList = [];
    
    for(let i = 0; i < searchResult.length; i++) {
      if((searchResult[i].name).search(searchData.name) !== -1) {
        patientsList.push(searchResult[i]);
      }
    } */

    Post.command = (serverResponse) => {
      if(serverResponse.success) {
        console.log("SEARCH PATIENT SERVER RESPONSE.DATA", serverResponse.data);
        this.setState({
          show: serverResponse.data
          /* show: [{
            idRegister: this.props.userData.user_id,
            patientName: 'Paciente ByPass',
            id: '1',
            cpf: '',
            rg: '',
            mv: '123',
            same:'123',
            sus:'123',
            birthDate: '2010-01-01',
            age:'8',
            gender: 'M',
            ethnicity: 0,
            tel1: 111,
            tel2: 222,
            telE: 333,
            cel: 444,
            cep: '123456',
            street: 'Rua X',
            homeNumber: 10,
            complement:'',
            neighborhood:'B1',
            city:'C1',
            state:'E1',
            country:'Brasél',
          }] */
        });
      }
    };

    Post.data = this.state.search;

    Post.urlData = [
      user_id,
      user_hash
    ];

    Post('searchPatient');
  }

  openPatient(patientId) {
    this.props.switchSection( <PatientProfile patientId={ patientId } switchSection={ this.props.switchSection } userData={ this.props.userData } /> );
  } 
  
  render() {
    return(
      <div className="SearchPatient">

        <form onSubmit={ this.handleSubmit } >
          
          <label htmlFor= "patientName"></label>
          <div className="wrap-input100 validate-input m-b-16">
            <input 
              className="patientName"
              type="text"
              id="patientName" 
              name="patientName"
              placeholder= "Buscar Paciente"
              value={ this.state.search.name }
              onChange={ this.handleChange }
            /> 
            <span className="focus-input100"></span>
            <span className="symbol-input100"></span>

            <button className="button-size" type="submit" value="Buscar">
              <span className="fas fa-search"></span>
            </button>
          </div>
        </form>
        
        <PatientList className="PatientList" data={ this.state.show } itemAction={ this.openPatient } />
      </div>
    );
  }
}

export default SearchPatient;

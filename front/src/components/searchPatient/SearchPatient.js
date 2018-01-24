import React, { Component } from 'react';
import './SearchPatient.css';
import Base64 from './../../lib/base64';
import axios from 'axios';
import PatientList from './../../components/patientList/PatientList';
import PatientProfile from './../patientProfile/PatientProfile';

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
    var searchData = this.state.search;
    var value = event.target.value;
    
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
    
    axios.defaults.baseURL = 'https://31.220.54.251:8443/';
    
    /* axios.post(
      'gen/search/patient/1/MTY2Mjg5N2IzY2IyODBjOTA0NjE4M2QwMzg3ZGYzYzk=/', // this.props.user.id+this.props.user.hash,
      'data='+Base64.encode(
        {
          name: this.state.search.name,
        }
      )
    )
    .then(
      function(response) {
        //const listPatients = response.data;
        console.log("RETORNO: ", response.data);
        return({
          data: response.data.data,
        });
      }
    ).catch(); */
    
    /* test block */
    return({
      data: [
        {name: "Arthur", id: "55"},{name: "Arthur Cristo", id: "58"}
      ]
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    const searchResult = (this.searchPatient()).data;
    const searchData = this.state.search;
    var patientsList = [];
    
    for(let i = 0; i < searchResult.length; i++) {
      if((searchResult[i].name).search(searchData.name) !== -1) {
        patientsList.push(searchResult[i]);
      }
    }
    
    this.setState({
      show: patientsList
    });
  }

  openPatient(patientId) {
    this.props.switchSection( <PatientProfile patientId={ patientId } switchSection={ this.props.switchSection }/> );
  } 
  
  render() {
    return(
      <div className="SearchPatient">
        <h1>Busca de Paciente</h1>
        <form onSubmit={ this.handleSubmit } >
          
          <label htmlFor= "patientName"> Nome </label>
          <input 
            className="patientName"
            type="text"
            id="patientName" 
            name="patientName"
            value={ this.state.search.name }
            onChange={ this.handleChange }
          /> <br/>

          <input type="submit" value="Buscar" />

        </form>
        
        <PatientList data={ this.state.show } itemAction={ this.openPatient } />
      </div>
    );
  }
}

export default SearchPatient;

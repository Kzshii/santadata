import React, { Component } from 'react';
import './NewPatient.css';
import Base64 from './../../lib/base64';
import axios from 'axios';

class NewPatient extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      formData: {
        patientName: '',
        medicalRecord: '',
        mv: '',
        birthDate: '',
        age: '',
        gender: '',
        ethnicity: '',
        tel1: '',
        tel2: '',
        telE: '',
        cel: '',
        address: '',
      },
    }
  }

  handleChange(event) {
    /* recover formData and value*/
    var formData = this.state.formData;
    var value = event.target.value;
    
    /* handle formData */
    switch(event.target.name){
      case 'patientName':
        formData.patientName = value;
        break;
      case 'medicalRecord':
        formData.medicalRecord = value;
        break;
      case 'mv':
        formData.mv = value;
        break;
      case 'birthDate':
        formData.birthDate = value;
        break;
      case 'age':
        formData.age = value;
        break;
      case 'gender':
        formData.gender = value;
        break;
      case 'ethnicity':
        formData.ethnicity = value;
        break;
      case 'tel1':
        formData.tel1 = value;
        break;
      case 'tel2':
        formData.tel2 = value;
        break;
      case 'telE':
        formData.telE = value;
        break;
      case 'cel':
        formData.cel = value;
        break;
      case 'address':
        formData.address = value;
        break;
      default:
        console.log("não deu");
    }

    /* set new state */
    this.setState(
      {
        formData: formData,
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    var formData = this.state.formData;

    var data = Base64.encode(
      {
        id_register: '1',
        nome: formData.patientName,
        nr_prontuario: formData.medicalRecord,
        nr_mv: formData.mv,
        data_nasc: formData.birthDate,
        idade: formData.age,
        sexo: formData.gender,
        etnia: formData.ethnicity, //[Branco, Negro, Pardo, Amarelo]
        tel1: formData.tel1,
        tel2: formData.tel2,
        tel_emerg: formData.telE,
        cel: formData.cel,
        endereco: formData.address,
      }
    );

    axios.defaults.baseURL = 'https://31.220.54.251:8443/';
    axios.post(
      'gen/new/pacient/1/MTY2Mjg5N2IzY2IyODBjOTA0NjE4M2QwMzg3ZGYzYzk=/', /* this.props.user.id+this.props.user.hash, */
      "data="+data
    )
    .then(
      function(response) {
        console.log("RETORNO", response.data);
      }
    )
    .catch(
      function(error) {
        console.log("ERRO", error);
      }
    );
  }

  render() {
    return(
      <div className="NewPatient" >
        <h2>Novo Paciente</h2>

          <form onSubmit={ this.handleSubmit } >

            <label htmlFor="patientName">Nome</label>
            <input
              className="inputText "
              type="text"
              name="patientName"
              id="patientName"
              value={ this.state.formData.patientName }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="medicalRecord">Prontuário</label>
            <input
              className="inputText "
              type="text"
              name="medicalRecord"
              id="medicalRecord"
              value={ this.state.formData.medicalRecord }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="mv">Número MV</label>
            <input
              type="number"
              name="mv"
              id="mv"
              value={ this.state.formData.mv }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              value={ this.state.formData.birthDate }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="age">Idade</label>
            <input
              type="number"
              name="age"
              id="age"
              value={ this.state.formData.age }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="">Sexo</label>
            <input type="radio" name="gender" id="" value="M" onChange={ this.handleChange } required /> Masculino
            <input type="radio" name="gender" id="" value="F" onChange={ this.handleChange } /> Feminino
            <br/>

            <label htmlFor="ethnicity">Etnia</label>
            <select name="ethnicity" id="ethnicity" onChange={ this.handleChange } required >
              <option value="">-- Escolher --</option>
              <option value="0">Branco</option>
              <option value="1">Negro</option>
              <option value="2">Pardo</option>
              <option value="3">Amarelo</option>
            </select>
            <br/>

            <label htmlFor="tel1">Telefone 1</label>
            <input
              type="tel"
              name="tel1"
              id="tel1"
              value={ this.state.formData.tel1 }
              onChange={ this.handleChange }
            /> <br/>

            <label htmlFor="tel2">Telefone 2</label>
            <input
              type="tel"
              name="tel2"
              id="tel2"
              value={ this.state.formData.tel2 }
              onChange={ this.handleChange }
            /> <br/>

            <label htmlFor="telE">Telefone para emergências</label>
            <input
              type="tel"
              name="telE"
              id="telE"
              value={ this.state.formData.telE }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="cel">Celular</label>
            <input 
              type="tel"
              name="cel"
              id="cel"
              value={ this.state.formData.cel }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="address">Endereço</label>
            <input
              className="inputText "
              type="text"
              name="address"
              id="address"
              value={ this.state.formData.address }
              onChange={ this.handleChange }
              required
            /> <br/>

            <input type="submit" value="Salvar"/>

          </form>
      </div>
    );
  }
}

export default NewPatient;

/* 
  nome: "",
	nr_prontuario: 0,
	nr_mv: 0,
	data_nasc: "",
	idade: 0,
	sexo: "",
	etnia: 0, //[Branco, Negro, Pardo, Amarelo]
	tel1: "",
	tel2: "",
	tel_emerg: "",
	cel: "",
	endereco: "",
*/
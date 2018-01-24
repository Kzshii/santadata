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
        cpf: '',
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
      case 'cpf':
        formData.cpf = value;
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
        cpf: formData.cpf,
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
      'gen/new/patient/1/MTY2Mjg5N2IzY2IyODBjOTA0NjE4M2QwMzg3ZGYzYzk=/', /* this.props.user.id+this.props.user.hash, */
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

        <div className="NewPatientHead">
        </div>

        <h2>Novo Paciente</h2>

          <form onSubmit={ this.handleSubmit } >

             {/*<label htmlFor="patientName">Nome</label>*/}

            <input
              className="inputText "
              type="text"
              name="patientName"
              id="patientName"
              placeholder="Nome"
              value={ this.state.formData.patientName }
              onChange={ this.handleChange }
              required
            /> <br/>

            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              name="cpf"
              id="cpf"
              value={ this.state.formData.cpf }
              onChange={ this.handleChange }
            /> <br/>

            <label htmlFor="medicalRecord">Prontuário</label>
            <input
              className="inputText "
              type="text"
              name="medicalRecord"
              id="medicalRecord"
              placeholder= "Prontuário"
              value={ this.state.formData.medicalRecord }
              onChange={ this.handleChange }
              required
            /> <br/>

          <label htmlFor="mv"></label>

            <input
              type="number"
              name="mv"
              id="mv"
              placeholder="Número MV"
              value={ this.state.formData.mv }
              onChange={ this.handleChange }
              required
            /> <br/>


            <div className="same-line">

            <div className="same-line-table">
            <label htmlFor="birthDate"></label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Data de Nascimento"
              value={ this.state.formData.birthDate }
              onChange={ this.handleChange }
              required
            /> <br/>

            <div className="same-line-table">
            <label htmlFor="age"></label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Idade"
              value={ this.state.formData.age }
              onChange={ this.handleChange }
              required
            /> <br/>
            </div>

            </div>

            <label htmlFor="" id="Up"><strong> Sexo </strong></label>
            <input type="radio" name="gender" id="gender" value="M" onChange={ this.handleChange } /><strong> Masculino</strong>
            <input type="radio" name="gender" id="gender" value="F" onChange={ this.handleChange } /> <strong>Feminino</strong>
            <br/>

            <label htmlFor="ethnicity" id="Up"><strong>Etnia</strong></label>
            <select name="ethnicity" id="ethnicity" onChange={ this.handleChange } >
              <option value="">-- Escolher --</option>
              <option value="0">Branco</option>
              <option value="1">Negro</option>
              <option value="2">Pardo</option>
              <option value="3">Amarelo</option>
            </select>
            <br/>

            <label htmlFor="tel1"></label>
            <input
              type="tel"
              name="tel1"
              id="tel1"
              placeholder="Telefone"
              value={ this.state.formData.tel1 }
              onChange={ this.handleChange }
            /> <br/>

            <label htmlFor="cel"></label>
            <input 
              type="tel"
              name="cel"
              id="cel"
              placeholder="Celular"
              value={ this.state.formData.cel }
              onChange={ this.handleChange }
            /> <br/>

            <label htmlFor="telE"> </label>
            <input
              type="tel"
              name="telE"
              id="telE"
              placeholder="Telefone para Emergências"
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

            <label htmlFor="address"></label>
            <input
              className="inputText "
              type="text"
              name="address"
              id="address"
              placeholder="Endereço"
              value={ this.state.formData.address }
              onChange={ this.handleChange }
              required
            /> <br/>

            <input className="Button" type="submit" value="Salvar"/>

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
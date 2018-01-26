import React, { Component } from 'react';
import './NewPatient.css';
import Base64 from './../../lib/base64';
import axios from 'axios';
import Intro from './../intro/Intro';

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
        etiny: '',
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
      case 'etiny':
        formData.etiny = value;
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

    const formData = this.state.formData;

    const data = Base64.encode(
      {
        id_register: this.props.userData.user_id,
        nome: formData.patientName,
        cpf: formData.cpf,
        nr_prontuario: formData.medicalRecord,
        nr_mv: formData.mv,
        data_nasc: formData.birthDate,
        idade: formData.age,
        sexo: formData.gender,
        etnia: formData.etiny, //[Branco, Negro, Pardo, Amarelo]
        tel1: formData.tel1,
        tel2: formData.tel2,
        tel_emerg: formData.telE,
        cel: formData.cel,
        endereco: formData.address,
      }
    );

    const url = 'gen/new/patient/'+this.props.userData.user_id+'/'+this.props.userData.hash+'/';

    axios.defaults.baseURL = 'https://31.220.54.251:8443/';
    axios.post(url,"data="+data)
    .then(
      (response) => {
        console.log("RETORNO", response.data);
        if(response.data.data.success) {
          alert("Paciente cadastrado com sucesso!");
          this.props.switchSection(<Intro userData={ this.props.userData } />);
        } else if(response.data.error) {
          alert("Não foi possível cadastrar o paciente, tente novamente.");
        }
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

    <div className="wrap">
      <div className="NewPatient" >

        <div className="NewPatientHead">
        </div>

        <h2>Novo Paciente</h2>

          <form onSubmit={ this.handleSubmit } >

            
            <label htmlFor="patientName">Nome</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input
              className="input100 textInput"
              type="text"
              name="patientName"
              id="patientName"
              placeholder="Nome"
              value={ this.state.formData.patientName }
              onChange={ this.handleChange }
              required
            /> 
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-user"></span>
                </span>
            </div>

            <label htmlFor="cpf">CPF</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input
              className="input100 textInput"
              type="text"
              name="cpf"
              id="cpf"
              placeholder="CPF"
              value={ this.state.formData.cpf }
              onChange={ this.handleChange }
            /> 
            <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-address-card"></span>
                </span>
            </div>
            


            <label htmlFor="medicalRecord">Prontuário</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input
              className="input100 textInput"
              type="text"
              name="medicalRecord"
              id="medicalRecord"
              placeholder= "Prontuário"
              value={ this.state.formData.medicalRecord }
              onChange={ this.handleChange }
              required
            /> 
             <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-file"></span>
                </span>
            </div>

          <label htmlFor="mv">MV</label>
          <div className="wrap-input100 validate-input m-b-16">

            <input
              className="input100 textInput"
              type="number"
              name="mv"
              id="mv"
              placeholder="Número MV"
              value={ this.state.formData.mv }
              onChange={ this.handleChange }
              required
            /> 
            <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-sort-numeric-down"></span>
                </span>
            </div>


            <label htmlFor="birthDate">Data de Nascimento</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input
              className="input100 textInput"
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Data de Nascimento"
              value={ this.state.formData.birthDate }
              onChange={ this.handleChange }
              required
            /> 
            <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-birthday-cake"></span>
                </span>
            </div>

      

   
      
            <label htmlFor="age">Idade</label>
            <div className="wrap-input100 m-b-16">
            <input
              className="input100 textInput"
              type="number"
              name="age"
              id="age"
              placeholder="Idade"
              value={ this.state.formData.age }
              onChange={ this.handleChange }
              required
            /> 
            <span className="focus-input100"></span>
                
              
            </div>
           

            <label htmlFor="" id="Up">Sexo </label>
            <input type="radio" name="gender" id="gender" value="M" onChange={ this.handleChange } /><strong> Masculino</strong>
            <input type="radio" name="gender" id="gender" value="F" onChange={ this.handleChange } /> <strong>Feminino</strong>
            <br/>

            <label htmlFor="etiny" id="Up">Etnia</label>
            <select name="etiny" id="etiny" onChange={ this.handleChange } >
              <option value="">-- Escolher --</option>
              <option value="0">Branco</option>
              <option value="1">Negro</option>
              <option value="2">Pardo</option>
              <option value="3">Amarelo</option>
            </select>
            <br/>

            <label htmlFor="tel1">Telefone</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input
              className="input100 textInput"
              type="tel"
              name="tel1"
              id="tel1"
              placeholder="Telefone"
              value={ this.state.formData.tel1 }
              onChange={ this.handleChange }
            /> 
            <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-phone"></span>
                </span>
            </div>


            <label htmlFor="cel">Celular</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input 
              className="input100 textInput"
              type="tel"
              name="cel"
              id="cel"
              placeholder="Celular"
              value={ this.state.formData.cel }
              onChange={ this.handleChange }
            /> 
            <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-mobile"></span>
                </span>
            </div>

            <label htmlFor="telE">Contato de Emergência</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input
              className="input100 textInput"
              type="tel"
              name="telE"
              id="telE"
              placeholder="Contato de Emergência"
              value={ this.state.formData.telE }
              onChange={ this.handleChange }
              required
            /> 
            <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-ambulance"></span>
                </span>
            </div>


            <label htmlFor="address">Endereço</label>
            <div className="wrap-input100 validate-input m-b-16">
            <input
              className="input100 textInput"
              type="text"
              name="address"
              id="address"
              placeholder="Endereço"
              value={ this.state.formData.address }
              onChange={ this.handleChange }
              required
            /> 
            <span className="focus-input100"></span>
                <span className="symbol-input100">
                <span className="fas fa-map-marker-alt"></span>
                </span>
            </div>

            <input id="Save" className="Button" type="submit" value="Salvar"/>

          </form>
      </div>
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
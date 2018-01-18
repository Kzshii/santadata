import React, { Component } from 'react';
import './NewPatient.css';

class NewPatient extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {

    }
  }

  handleSubmit(event) {
    event.preventDefault();


  }

  render() {
    return(
      <div className="NewPatient" >
        <h2>Novo Paciente</h2>

          <form onSubmit={ this.handleSubmit } >

            <label htmlFor="patientName">Nome</label>
            <input className="inputText " type="text" name="" id="patientName"/> <br/>

            <label htmlFor="medicalRecord">Prontuário</label>
            <input className="inputText " type="text" name="" id="medicalRecord"/> <br/>

            <label htmlFor="MV">Número MV</label>
            <input type="text" name="" id="MV"/> <br/>

            <label htmlFor="birthDate">Data de Nascimento</label>
            <input type="date" name="" id="birthDate"/> <br/>

            <label htmlFor="age">Idade</label>
            <input type="number" name="" id="age" value={ {/* TO DO: calcular idade a partir da data de nascimento e exibir aqui */} } /> <br/>

            <label htmlFor="">Sexo</label>
            <input type="radio" name="gender" id="" value="M" /> Masculino
            <input type="radio" name="gender" id="" value="F" /> Feminino
            <br/>

            <label htmlFor="ethnicity">Etnia</label>
            <select name="" id="ethnicity">
              <option value="0">Branco</option>
              <option value="1">Negro</option>
              <option value="2">Pardo</option>
              <option value="3">Amarelo</option>
            </select>
            <br/>

            <label htmlFor="tel1">Telefone 1</label>
            <input type="tel" name="" id="tel1"/> <br/>

            <label htmlFor="tel2">Telefone 2</label>
            <input type="tel" name="" id="tel2"/> <br/>

            <label htmlFor="telE">Telefone para emergências</label>
            <input type="tel" name="" id="telE"/> <br/>

            <label htmlFor="cel">Celular</label>
            <input type="tel" name="" id="cel"/> <br/>

            <label htmlFor="location">Endereço</label>
            <input type="text" name="" id="location"/>

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
import React, { Component } from 'react';
import './Anamnese.css';
import Base64 from '../../lib/base64';
import axios from 'axios';

class Evidences extends Component {
  constructor(props){
    super(props);
        
    this.state = {

    }
	}
	
	render(){
		return(
			<div className="Evidences">
				<h2>Evidências</h2>

          <form onSubmit={ this.handleSubmit } >

						<label htmlFor="evidencesRegistry">Queixa principal:</label>
							<select name="evidencesRegistry" id="evidencesResgistry" onChange={ this.handleChange } required >
								<option value="">-- Escolher --</option>
								<option value="0">Primeira consulta</option>
								<option value="1">Em tratamento</option>
								<option value="2">Desistência/Desaparacido</option>
								<option value="3">Reinternação</option>
							</select>
						<br/>

						<label htmlFor="monitoringTime">Tempo de acompanhamento ambulatorial:</label>
            <input
              className="inputText "
              type="text"
              name="monitoringTime"
              id="monitoringTime"
              value={ this.state.formData.monitoringTime }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDate">Data da primeira consulta:</label>
            <input
              type="date"
              name="firstDate"
              id="firstDate"
              value={ this.state.formData.firstDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="etiology">Etiologia</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> A esclarecer
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Doença Arterial Coronariana
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Hipertensão Arterial Sistêmica (HAS)
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Cardiomiopatia Dilatada Idiopática
						<input type="checkbox" name="gender" id="4" value="4" onChange={ this.handleChange } /> Cardiomiopatia Chagásica
						<input type="checkbox" name="gender" id="5" value="5" onChange={ this.handleChange } /> Valvuloplatias
						<input type="checkbox" name="gender" id="6" value="6" onChange={ this.handleChange } /> Alcólica
						<input type="checkbox" name="gender" id="7" value="6" onChange={ this.handleChange } /> Pós-quimioterapia
            <br/>

						<label htmlFor="Comorbidities">Comorbidades</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Hipertensão Arterial Sistêmica (HAS)
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Diabetes Mélitus (DM)
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Dislipidemia (DLP)
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Tabagismo (TBG)
						<input type="checkbox" name="gender" id="4" value="4" onChange={ this.handleChange } /> Doença Arterial Coronariana (DAC)
						<input type="checkbox" name="gender" id="5" value="5" onChange={ this.handleChange } /> Fibrilação Arterial (FA)
						<input type="checkbox" name="gender" id="6" value="6" onChange={ this.handleChange } /> Uso de Anti-coagulante Oral
						<input type="checkbox" name="gender" id="7" value="6" onChange={ this.handleChange } /> Insuficiência Renal Crônica (IRC)
						<input type="checkbox" name="gender" id="7" value="6" onChange={ this.handleChange } /> Tireóide (Hipo ou Hipertireodismo)
            <br/>

						<label htmlFor="adverseEvents">Eventos adversos</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Hipertensão Agudo do Miocárdio (HAM)
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Acidente Vascular Cerebral (AVC)
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Internação (INT)
            <br/>

						<label htmlFor="">Óbito?</label>
            <input type="radio" name="gender" id="Y" value="Y" onChange={ this.handleChange } required /> Sim
            <input type="radio" name="gender" id="N" value="N" onChange={ this.handleChange } /> Não
            <br/>	

						<input type="submit" value="Salvar"/>

					</form>
			</div>


		)
	}

}

export default Evidences;
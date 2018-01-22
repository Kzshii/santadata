import React, { Component } from 'react';
import './Anamnese.css';
import Base64 from '../../lib/base64';
import axios from 'axios';

class Anamnese extends Component {
  constructor(props){
    super(props);
        
    this.state = {

    }
	}
	
	render(){
		return(
			<div className="Anamnese">
				<h2>Anamnese</h2>

          <form onSubmit={ this.handleSubmit } >

						<label htmlFor="mainComplaint">Queixa principal:</label>
						<select name="mainComplaint" id="mainComplaint" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							<option value="0">Dor torácica</option>
							<option value="1">Dispneia</option>
							<option value="2">Síncope</option>
							<option value="3">Palpitações</option>
						</select>
						<br/>

						<label htmlFor="mainComplaintHistory">História da doença atual:</label>
            <input
              className="inputText "
              type="text"
              name="mainComplaintHistory"
              id="mainComplaintHistory"
              value={ this.state.formData.mainComplaintHistory }
              onChange={ this.handleChange }
              required
            /> 
						<br/>
						
						<label htmlFor="patologicHistory">História patológica</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Falta de aderência ao tratamento
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Maior intensidade dos sintomas
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Parada cardio-respiratória revertida
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Redução de função cognitiva
						<input type="checkbox" name="gender" id="4" value="4" onChange={ this.handleChange } /> Caqueixa
						<input type="checkbox" name="gender" id="5" value="5" onChange={ this.handleChange } /> Anorexia
						<input type="checkbox" name="gender" id="6" value="6" onChange={ this.handleChange } /> Síncope
						<input type="checkbox" name="gender" id="7" value="6" onChange={ this.handleChange } /> Apnéia do sono
						<input type="checkbox" name="gender" id="8" value="7" onChange={ this.handleChange } /> Doença pulmonar associada
						<input type="checkbox" name="gender" id="9" value="8" onChange={ this.handleChange } /> Depressão
            <br/>

						<label htmlFor="fisiologicHistory">História fisiológica:</label>
						<select name="fisiologicHistory" id="fisiologicHistory" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							<option value="0">Oligúria</option>
							<option value="1">Anúria</option>
							<option value="2">Poliúria</option>
							<option value="3">Polaciúria</option>
							<option value="4">Nictúria</option>
							<option value="5">Urgência</option>
							<option value="6">Retenção urinária</option>
							<option value="7">Incontinência urinária</option>
						</select>
						<br/>

						<label htmlFor="familyHistory">História familiar</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Enxaqueca
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Diabetes
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Hipertensão Arterial Sistemica(HAS)
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Tuberculose
						<input type="checkbox" name="gender" id="4" value="4" onChange={ this.handleChange } /> Cancer
						<input type="checkbox" name="gender" id="5" value="5" onChange={ this.handleChange } /> Doença Arterial Coronariana
						<input type="checkbox" name="gender" id="6" value="6" onChange={ this.handleChange } /> Acidente Vascular Cerebral (AVC)
						<input type="checkbox" name="gender" id="7" value="7" onChange={ this.handleChange } /> Dislipidemias
						<input type="checkbox" name="gender" id="8" value="8" onChange={ this.handleChange } /> Varizes
            <br/>

						<h3>História psico-social</h3>

						<label htmlFor="">Possui Saneamento básico?</label>
            <input type="radio" name="gender" id="Y" value="Y" onChange={ this.handleChange } required /> Sim
            <input type="radio" name="gender" id="N" value="N" onChange={ this.handleChange } /> Não
            <br/>

						<label htmlFor="economicSituation">Situação econômica:</label>
						<select name="economicSitiation" id="economicSituation" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							<option value="0">Baixa renda</option>
							<option value="1">Moderada</option>
							<option value="2">Renda alta</option>
						</select>
						<br/>

						<label htmlFor="religion">Situação econômica:</label>
						<select name="religion" id="religion" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							<option value="0">Evangélica</option>
							<option value="1">Católica</option>
							<option value="2">Espírita</option>
							<option value="3">Testemunha de Jeová</option>
							<option value="4">Ateu</option>
							<option value="5">Outra</option>
						</select>
						<br/>

						<label htmlFor="educationSituation">Situação econômica:</label>
						<select name="educationSitiation" id="educationSituation" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							<option value="0">Ensino Fundamental</option>
							<option value="1">Ensino Médio</option>
							<option value="2">Ensino Superior</option>
						</select>
						<br/>
						
						<label htmlFor="familiarRelationship">Situação econômica:</label>
						<select name="familiarRelationship" id="familiarRelationship" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							<option value="0">Boa</option>
							<option value="1">Mediana</option>
							<option value="2">Ruim</option>
						</select>
						<br/>
						
						<h3>Estilo de vida</h3>
												
						<label htmlFor="feeding">Alimentação:</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Alimentação quantitativa e qualitativamente adequada
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Consumo de calorias acima das necessidades
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Alimentação com alto teor de gordura
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Baixa ingestão de líquidos
						<input type="checkbox" name="gender" id="4" value="4" onChange={ this.handleChange } /> Reduzida ingesta de fibras
						<input type="checkbox" name="gender" id="4" value="4" onChange={ this.handleChange } /> Reduzida ingesta de verduras e fruta
						<input type="checkbox" name="gender" id="5" value="5" onChange={ this.handleChange } /> Reduzida ingesta de carboidratos
						<input type="checkbox" name="gender" id="6" value="6" onChange={ this.handleChange } /> Reduzida ingesta de proteínas
						<input type="checkbox" name="gender" id="7" value="7" onChange={ this.handleChange } /> Reduzido consumo de gordura
						<input type="checkbox" name="gender" id="8" value="8" onChange={ this.handleChange } /> Alimentação láctea exclusiva
            <br/>

						<label htmlFor="physicalActivity">Atividades físicas:</label>
						<select name="physicalActivity" id="physicalActivity" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							<option value="0">Pessoa Sendentária</option>
							<option value="1">Exerce atividades físicas moderadas</option>
							<option value="2">Exerce atividades físicas intensas e constantes</option>
							<option value="2">Exerce atividades físicas ocasionais</option>
						</select>
						<br/>

						<h3>Fumo</h3>

						<label htmlFor="">Faz uso?</label>
            <input type="radio" name="gender" id="Y" value="Y" onChange={ this.handleChange } required /> Sim
            <input type="radio" name="gender" id="N" value="N" onChange={ this.handleChange } /> Não
            <br/>

						<label htmlFor="smoke">Tipos de fumo:</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Cigarro
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Cachimbo
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Charuto
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Cigarro de palha
            <br/>

						<label htmlFor="dailyCigaretteAmount">Quantidade diária:</label>
            <input
              className="inputText "
              type="text"
              name="dailyCigaretteAmount"
              id="dailyCigaretteAmount"
              value={ this.state.formData.dailyCigaretteAmount }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="smokingFrequency">Frequencia e quantidade de fumo:</label>
            <input
              className="inputText "
              type="text"
              name="smokingFrequency"
              id="smokingFrequency"
              value={ this.state.formData.smokingFrequency }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="startSmoking">Data de início:</label>
            <input
              type="date"
              name="startSmoking"
              id="startSmoking"
              value={ this.state.formData.startSmoking }
              onChange={ this.handleChange }
              required
            /> 
						<br/>
						
						<label htmlFor="smokingTime">Tempo que fuma:</label>
            <input
              type="number"
              name="smokingTime"
              id="smokingTime"
              value={ this.state.formData.smokingTime }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<h3>Alcool</h3>

						<label htmlFor="">Faz uso?</label>
						<input type="radio" name="gender" id="Y" value="Y" onChange={ this.handleChange } required /> Sim
						<input type="radio" name="gender" id="N" value="N" onChange={ this.handleChange } /> Não
						<br/>

						<label htmlFor="alcoholicBeverages">Tipos de bebidas:</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Cerveja
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Vinho
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Licor
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Vodka
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Uisque
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Cachaça
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Gin
            <br/>

						<label htmlFor="alcoholicBevFrequency">Frequencia e quantidade de bebidas alcólicas:</label>
            <input
              className="inputText "
              type="text"
              name="alcoholicBevFrequency"
              id="alcoholicBevFrequency"
              value={ this.state.formData.alcoholicBevFrequency }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="startDrinking">Data de início:</label>
            <input
              type="date"
              name="startDrinking"
              id="startDrinking"
              value={ this.state.formData.startDrinking }
              onChange={ this.handleChange }
              required
            /> 
						<br/>
						
						<label htmlFor="drinkingTime">Tempo que bebe:</label>
            <input
              type="number"
              name="drinkingTime"
              id="drinkingTime"
              value={ this.state.formData.drinkingTime }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<h3>Drogas</h3>

						<label htmlFor="">Faz uso?</label>
						<input type="radio" name="gender" id="Y" value="Y" onChange={ this.handleChange } required /> Sim
						<input type="radio" name="gender" id="N" value="N" onChange={ this.handleChange } /> Não
						<br/>

						<label htmlFor="smoke">Tipos de drogas:</label>
            <input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Cigarro
            <input type="checkbox" name="gender" id="1" value="1" onChange={ this.handleChange } /> Cachimbo
						<input type="checkbox" name="gender" id="2" value="2" onChange={ this.handleChange } /> Charuto
						<input type="checkbox" name="gender" id="3" value="3" onChange={ this.handleChange } /> Cigarro de palha
            <br/>

						<label htmlFor="drugsFrequency">Frequencia e quantidade de drogas:</label>
            <input
              className="inputText "
              type="text"
              name="drugsFrequency"
              id="drugsFrequency"
              value={ this.state.formData.drugsFrequency }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="startDrugs">Data de início:</label>
            <input
              type="date"
              name="startDrugs"
              id="startDrugs"
              value={ this.state.formData.startDrugs }
              onChange={ this.handleChange }
              required
            /> 
						<br/>
						
						<label htmlFor="drugsTime">Tempo:</label>
            <input
              type="number"
              name="drugsTime"
              id="drugsTime"
              value={ this.state.formData.drugsTime }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<input type="submit" value="Salvar"/>

					</form>
			</div>


		)
	}

}

export default Anamnese;
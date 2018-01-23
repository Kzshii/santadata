import React, { Component } from 'react';
import './Anamnese.css';
import Base64 from './../../../lib/base64';
import axios from 'axios';

class Anamnese extends Component {
  constructor(props){
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
        
    this.state = {
			prepare: {},
			formData: {},
    }
	}
	
	componentWillMount() {
		axios.defaults.baseURL = 'https://31.220.54.251:8443/';
		axios.post(
			"prepare/anamnese/",
			{}
		).then(
			function(response) {
				this.setState(
					{
						prepare: response.data.data,
					}
				);
			}
		).catch();

		this.setState(
			{
				prepare: {

					// Queixa principal
					qp_type: [
						{id: 0, label: "Dor torácica"},
						{id: 1, label: "Dispneia"},
						{id: 2, label: "Síncope"},
						{id: 3, label: "Palpitações"}
					],

					// História patológica
					hist_pat: [
						{id: 0,label: "Falta de aderência ao tratamento"},
						{id: 1,label: "Maior intensidade dos sintomas"},
						{id: 2,label: "Parada cardio-respiratória revertida"},
						{id: 3,label: "Redução de função cognitiva"},
						{id: 4,label: "Caquexia"},
						{id: 5,label: "Anorexia"},
						{id: 6,label: "Síncope"},
						{id: 7,label: "Apnéia do sono*"},
						{id: 8,label: "Doença pulmonar associada"},
						{id: 9,label: "Depressão"}
					],

					// Historia Fisiológica
					hist_fis:[
						{id: 0,label: "Oligúria"},
						{id: 1,label: "Anúria"},
						{id: 2,label: "Poliúria"},
						{id: 3,label: "Polaciúria"},
						{id: 4,label: "Nictúria"},
						{id: 5,label: "Urgência"},
						{id: 6,label: "Retenção Urinária"},
						{id: 7,label: "Incontinência Urinária"}
					],

					// Historia familiar
					hist_fam:[
						{id: 0,label: "Enxaqueca"},
						{id: 1,label: "Diabetes"},
						{id: 2,label: "Hipertensão Arterial Sistemica (HAS)"},
						{id: 3,label: "Tuberculose"},
						{id: 4,label: "Cancer"},
						{id: 5,label: "Doenca Arterial Coronariana (DAC)"},
						{id: 6,label: "Acidente Vascular Cerebral (AVC)"},
						{id: 7,label: "Dislipidemias"},
						{id: 8,label: "Varizes"}
					],

					// História psico-social
					san_basico:[
						{id: 0,label: "Sim"},
						{id: 1,label: "Não"}
					],			

					socio_econ:[
						{id: 0,label: "Baixa Renda"},
						{id: 1,label: "Moderada"},
						{id: 2,label: "Renda Alta"}
					],

					cultural:[
						{id: 0,label: "Evangélica"},
						{id: 1,label: "Católica"},
						{id: 2,label: "Espírita"},
						{id: 3,label: "Testemunha de Jeová"},
						{id: 4,label: "Ateu"},
						{id: 5,label: "Outra"}
					],

					escolar:[
						{id: 0,label: "Ensino Fundamental"},
						{id: 1,label: "Ensino Médio"},
						{id: 2,label: "Ensino Superior"}
					],

					relacao_fam:[
						{id: 0,label: "Boa"},
						{id: 1,label: "Mediana"},
						{id: 2,label: "Ruim"}
					],

				},
			}
		);
	}

	handleChange(event) {
		let formData = this.state.formData;
		formData[event.target.name] = event.target.type === 'checkbox' ? ()=>{} : event.target.value;
		this.setState({
			formData: formData,
		});
		console.log("STATE", this.state);
	}

	render(){
		return(
			<div className="Anamnese">
				<h2>Anamnese</h2>

          <form onSubmit={ () => this.props.saveData("anamnese",this.state.formData) } >

						<label htmlFor="qp_type">Queixa principal:</label>
						<select name="qp_type" id="qp_type" onChange={ this.handleChange } required >
							<option value="">-- Escolher --</option>
							{
								this.state.prepare.qp_type.map(
									(qp_type) => {
										return(
											<option key={ qp_type.id } value={ qp_type.id }>{ qp_type.label }</option>
										);
									}
								)
							}
						</select>
						<br/>

						<label htmlFor="hda">História da doença atual:</label>
            <textarea
              className="inputText "
              type="text"
              name="hda"
              id="hda"
							value={ this.state.formData.hda }
              onChange={ this.handleChange }
              required
            />
						<br/>
						
						<label htmlFor="hist_pat">História patológica:</label>
						{ 
							this.state.prepare.hist_pat.map(
								(hist_pat) => {
									return(
										<div key={ hist_pat.id }>
											<input type="checkbox" name="hist_pat" value={ hist_pat.id } onChange={ this.handleChange } />
											<label htmlFor="">{ hist_pat.label }</label>
										</div>
									);
								}
							)
						}
						<br/>
						
						<label htmlFor="fisiologicHistory">História fisiológica:</label>
						<select name="hist_fis" id="fisiologicHistory" onChange={ this.handleChange } required >
							{
								this.state.prepare.hist_fis.map(
									(hist_fis) => {
										return(
											<option key={ hist_fis.id } value={ hist_fis.id }>{ hist_fis.label }</option>
										);
									}
								)
							}
						</select>
						<br/>

						<label htmlFor="">Possui Saneamento básico? </label>
						{
							this.state.prepare.san_basico.map(
								(san_basico) => {
									return(
										<div key={ san_basico.id }>
											<input type="radio" value={ san_basico.id } onChange={ this.handleChange }/>
											<label htmlFor="">{ san_basico.label }</label>
										</div>
									);
								}
							)
						}
            <br/>

            {/*

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
						<br/> */}

						<input type="submit" value="Salvar"/>

					</form>
			</div>


		)
	}

}

export default Anamnese;
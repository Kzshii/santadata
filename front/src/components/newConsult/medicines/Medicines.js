import React, { Component } from 'react';
import './Medicines.css';
//import Base64 from '../../lib/base64';
//import axios from 'axios';

class Medicines extends Component {
  constructor(props){
    super(props);
        
		this.handleChange = this.handleChange.bind(this);

    this.state = {
			prepare: {},
			formData: {},
    };
  }

  componentWillMount() {
		axios.defaults.baseURL = 'https://31.220.54.251:8443/';
		axios.post(
			"prepare/evidences/",
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

					// Registro de Evidencias
					ev_estado:
					[
						{id: 0,label: "Primeira consulta"},
						{id: 1,label: "Em tratamento"},
						{id: 2,label: "Desistente/Desaparecido"},
						{id: 3,label: "Reinternação"},
					],

					// Tempo do acompanhamento Ambulatorial
					amb_start_time: "", //


					// Data Primeira Consulta
					date_consult: "00/00/0000",


					// Etiologia
					ev_etiologia:
					[								
						{id: 0,label: "A Esclarecer"},
						{id: 1,label: "Doença Arterial Coronariana (DAC)"},
						{id: 2,label: "Hipertensão Arterial Sistêmica (HAS)"},
						{id: 3,label: "Cardiomiopatia Dilatada Idiopática"},
						{id: 4,label: "Cardiomiopatia Chagásica"},
						{id: 5,label: "Valvulopatias"},
						{id: 6,label: "Alcoólica"},
						{id: 7,label: "Pós Quimioterapia"},
					],

					// Co-morbidades
					ev_comorbidades:
					[
						{id: 0,label: "Hipertensão Arterial Sistemica (HAS)"},
						{id: 1,label: "Diabetes Mélitus (DM)"},
						{id: 2,label: "Dislipidemia (DLP)"},
						{id: 3,label: "Tabagismo (TBG)"},
						{id: 4,label: "Doença Arterial Coronariana (DAC)"},
						{id: 5,label: "Fibrilação atrial (FA)"},
						{id: 6, label: "Uso de Anti-coagulante Oral"},
						{id: 7,label: "Insuficiência Renal Crônica (IRC)"},
						{id: 8,label: "Tireóide (hipo ou hipertireoidismo)"},
					],

					// Eventos Adversos
					ev_adversos:
					[
						{id: 0,label: "Infarto Agudo do Miocárdio (IAM)"},
						{id: 1,label: "Acidente Vascular Cerebral (AVC)"},
						{id: 2,label: "Internação (INT)"},
					],

					// Obito
					ev_obito:
					[
						{id: 0,label: "Sim"},
						{id: 1,label: "Nao"},
					],
				},
			}
		);
	}  

  handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value

		let formData = this.state.formData;
		
		if(target.type === 'checkbox') {
			if(target.checked) {
				/* insere */
				if(formData[name] == null) {
					formData[name] = [value];
				} else {
					formData[name].push(value);
				}
			} else {
				/* remove */
				let index = formData[name].indexOf(value);
				formData[name].splice(index, 1);
			}

		} else {
			formData[name] = value;
		}
		
		this.setState({
			formData: formData,
		});
		console.log("STATE", this.state);
	}	
	
	render(){
		return(
			<div className="Medicines">
				<h2>Medicamentos</h2>

          <form onSubmit={ this.handleSubmit } >

						<h3>Remédios ministrados</h3>

						<label htmlFor="ieca">IECA</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Captopril
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Enalapril
						<input type="radio" name="gender" id="3" value="3" onChange={ this.handleChange } /> Lisinopril
						<input type="radio" name="gender" id="4" value="4" onChange={ this.handleChange } /> Cilazapril
						<input type="radio" name="gender" id="5" value="5" onChange={ this.handleChange } /> Ramipril
						<input type="radio" name="gender" id="6" value="6" onChange={ this.handleChange } /> Trandolapril
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="bra">BRA</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Losartana
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Valsartana
						<input type="radio" name="gender" id="3" value="3" onChange={ this.handleChange } /> Candersatan
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="betaBlockers">Beta-bloqueadores</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Carvedilol
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Metropolol
						<input type="radio" name="gender" id="3" value="3" onChange={ this.handleChange } /> Bisoprolol
						<input type="radio" name="gender" id="4" value="4" onChange={ this.handleChange } /> Propanolol
            <br/>

						<label htmlFor="canaiscaBlockers">Bloqueadores de Canaisca</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Verapamil
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Diltiazem
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="diureticos">Diuréticos</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Hidroclorotiazida
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Furosemida
						<input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Espirolactona
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="digitalico">Digitalico</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Digoxina
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="aas">AAS:</label>
						<input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Uso

						<label htmlFor="estatina">Estatina</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Sinvarstatina
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Atorvarstatina
            <br/>

						<label htmlFor="hidralazina">Hidralazina</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Apresolina
						<br/>

						<label htmlFor="nitrato">Nitrato</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Apresolina
						<br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
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

export default Medicines;
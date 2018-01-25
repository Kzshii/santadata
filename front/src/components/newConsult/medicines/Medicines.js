import React, { Component } from 'react';
import './Medicines.css';
import Base64 from '../../../lib/base64';
import axios from 'axios';

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
			"prepare/medicines/",
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
          //Medicamentos ministrados no paciente
          
          //ministrados:
					IECA: 
					{
 
						select: // 1
						[ 
							{id: 0,label: "Captopril"}, 
							// Dose inicial = 6,24mg 
							// Dose alvo = 50mg 
							// Duração = 8h/8h
							{id: 1,label: "Enalapril"},
							// Dose inicial = 2,5mg 
							// Dose alvo = 10mg 
							// Duração 12/12h
							{id: 2,label: "Lisinopril"},
							{id: 3,label: "Cilazapril"},
							{id: 4,label: "Ramipril"},
							{id: 5,label: "Trandolapril"},
						],

						input: // 1
						{
							//{droga:drogas.void},
							date:"00/00/0000",
							hour:"00:00",
							charge: "50mg",
							gap: 12, // horas
						},
					},
			
					BRA:
					{
						select:
						[
							{id: 0,label: "Losartana"}, 
							// Dose inicial = 25mg
							// Dose alvo = 50 a 150mg
							// Duração = 1x ao dia
							{id: 1,label: "Valsartana"},
							// Dose inicial = 20mg
							// Dose alvo = 160mg 
							// Duração 12 em 12 horas
							{id: 2,label: "Candersatan"},
						],
						
						input:
						{
							//droga:drogas.void,
							date:"00/00/0000",
							hour:"00:00",
							charge: "50mg",
							gap: 12, // horas
						}
					},
			
					beta_bloqueadores:
					{
						select:
						[
							{id: 0,label: "Carvedilol"}, 
							// Dose inicial = 3,125mg
							// Dose Alvo = 25 a 50mg
							// Duração = 12 em 12 horas
							{id: 1,label: "Metroprolol"},
							{id: 2,label: "Bisoprolol"},
							{id: 3,label: "Propanolol"},
						],

						input:
						{
							//droga:drogas.void,
							date:"00/00/0000",
							hour:"00:00",
							charge: "50mg",
							gap: 12, // horas
						}
					},
					
					bloq_canaisca:
					{
						select:
						[
							{id: 0,label: "Verapamil"},
							{id: 1,label: "Diltiazem"},
						],
						
						input:
						{
							//droga:drogas.void,
							date:"00/00/0000",
							hour:"00:00",
							charge: "50mg",
							gap: 12, // horas
						}
					},
			
					diureticos:
					[
						{id: 0,label: "Hidroclorotiazida"},
						{id: 1,label: "Furosemida"},
						{id: 2,label: "Espirolactona"},
						// Dose inicial = 12,5mg
						// Dose Alvo = 50mg
			
						{
							//droga:drogas.void,
							date:"00/00/0000",
							hour:"00:00",
							charge: "50mg",
							gap: 12, // horas
						}
					],
				
					digitalico:
					[
						{id: 0,label: "digoxina"},
					
						{
							//droga:drogas.void,
							date:"00/00/0000",
							hour:"00:00",
							charge: "50mg",
							gap: 12 // horas
						}
					],
			
					AAS: 
					[
						{id: 0,label: "Uso"},
					],
			
					estatina:
					[			
						{id: 0,label: "Sinvastatina"},
						{id: 1,label: "Atorvastatina"},
					],
			
					hidralazina: 
					[
						{id: 0,label: "Apresolina"},
					],
			
					nitrato:
					[
						{id: 0,label: "Dinitrato de Isossorbida"},
					],
			
					anticoagulante: 
					[
						{id: 0,label: "Heparina"},
						{id: 0,label: "Dabigatran"},
					],
			
					antiarritmico: 
					[
						{id: 0,label: "Amiodarona"},
					],
				
			
					//Medicamentos prescritos para o paciente
					//prescritos: 
			
					sarcubitril_valsartana:
					[
						{id: 0,label: "Entresto"},
						// Dose inicial = 49/51mg 
						// Dose alvo = 97 mg/103 mg 
						// Duração = duas vezes ao dia
						{
							//droga:drogas.void,
							date:"00/00/0000",
							hour:"00:00",
							charge: "50mg",
							total_charge: 1, //qtd de doses
							gap: 12, // horas
						}
					]
				}
			},
		);
	} 

  handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

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
	
	render() {
		return(
			<div className="medicines">
				<h2>Medicamentos</h2>

          <form onSubmit={ () => this.props.saveData("medicines",this.state.formData) } >

						<h3>Remédios ministrados</h3>

						<label htmlFor="ieca">IECA</label>
						{
							this.state.prepare.IECA.select.map(
								(row) => {
									return(
										<div key={ row.id }>
											<input type="radio" name="IECA" value={ row.id } onChange={ this.handleChange }/>
											<label htmlFor="">{ row.label }</label>
										</div>
									);
								}
							)
						}
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.prepare.IECA.input.date }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.prepare.IECA.input.hour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.prepare.IECA.input.charge }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.prepare.IECA.input.gap }
              onChange={ this.handleChange }
              required
            /> 
						<br/>
						<br/>

						<label htmlFor="bra">BRA</label>
						{
							this.state.prepare.BRA.select.map(
								(row) => {
									return(
										<div key={ row.id }>
											<input type="radio" name="BRA" value={ row.id } onChange={ this.handleChange }/>
											<label htmlFor="">{ row.label }</label>
										</div>
									);
								}
							)
						}
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.prepare.BRA.input.date }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.prepare.BRA.input.hour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.prepare.BRA.input.charge }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.prepare.BRA.input.gap }
              onChange={ this.handleChange }
              required
            /> 
						<br/>
						<br/>

						<label htmlFor="betaBlockers">Beta-bloqueadores</label>
						{
							this.state.prepare.beta_bloqueadores.select.map(
								(row) => {
									return(
										<div key={ row.id }>
											<input type="radio" name="beta_bloqueadores" value={ row.id } onChange={ this.handleChange }/>
											<label htmlFor="">{ row.label }</label>
										</div>
									);
								}
							)
						}
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.prepare.beta_bloqueadores.input.date }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.prepare.beta_bloqueadores.input.hour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.prepare.beta_bloqueadores.input.charge }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.prepare.beta_bloqueadores.input.gap }
              onChange={ this.handleChange }
              required
            /> 
						<br/>
						<br/>

						<label htmlFor="canaiscaBlockers">Bloqueadores de Canaisca</label>
						{
							this.state.prepare.bloq_canaisca.select.map(
								(row) => {
									return(
										<div key={ row.id }>
											<input type="radio" name="bloq_canaisca" value={ row.id } onChange={ this.handleChange }/>
											<label htmlFor="">{ row.label }</label>
										</div>
									);
								}
							)
						}
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.prepare.bloq_canaisca.input.date }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.prepare.bloq_canaisca.input.hour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.prepare.bloq_canaisca.input.charge }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.prepare.bloq_canaisca.input.gap }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						{/*

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

						*/}

						<input type="submit" value="Salvar"/>

					</form>
			</div>
		);
	}
}

export default Medicines;

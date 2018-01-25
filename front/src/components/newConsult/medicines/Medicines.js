import React, { Component } from 'react';
import './Medicines.css';
import Base64 from '../../../lib/base64';
import axios from 'axios';
import Ieca from './Ieca.js';

class Medicines extends Component {
  constructor(props){
    super(props);
        
		this.handleChange = this.handleChange.bind(this);
		this.addNewMedicine= this.addNewMedicine.bind(this);
		this.selectMedicine= this.selectMedicine.bind(this);


    this.state = {
			prepare: {},
			formData: {},
			newMedicine: "IECA"
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
 
						select: [ 
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

						input: 
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
	

	

	addNewMedicine(medicine){
		
	}

	selectMedicine(event){
		this.setState({
			newMedicine: event.target.value
		})
	}

	render() {

		const medicinesTypes= {
			IECA: <Ieca form={this.state.prepare["IECA"]} title="IECA"/>,
		}

		console.log(medicinesTypes)

		const medicines= Object.keys(this.state.prepare)
		return(
			<div className="Medicines">
				<h2>Adicionar Medicamento:</h2>
				<form onSubmit={this.addNewMedicine}>
					<select name="medicinesType" id="medicinesType" onChange={this.selectMedicine}>
						{
							
							medicines.map(
								medicine => {
									return(
									<option key={medicine} value={medicine}>{medicine}</option>
									)
								}
							)
						}
					</select>
					<input type="submit" value="adicionar"/>
				</form>
				{medicinesTypes[this.state.newMedicine]}
			</div>
		)
	}
}

export default Medicines;

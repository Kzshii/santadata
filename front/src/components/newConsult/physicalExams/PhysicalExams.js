import React, { Component } from 'react';
import './PhysicalExams.css';
import Base64 from '../../../lib/base64';
import axios from 'axios';


class PhysicalExams extends Component {
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
			"prepare/physicalExams/",
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

					bioquimico: {
						
						//Creatina
						creatina: // texto numerico
						{
							basal: 0.0,
							ultima: 0.0,
							delta: 0.0,
							clearence_atual: 0.0,
						},

						//Sangue
						sangue: // texto numerico
						{
							hemoglobina: 0.0,
							linfocitos: 0.0,
							sodio: 0.0,
							outros: "", // Plain Text
						},
					},

					complementar:{

						//ECG
						eletro: // 0..*
						[ 
							{id: 0, label: "Bloqueio de Ramo Direito (BRD)"},
							{id: 1, label: "Bloqueio de Ramo Esquerdo (BRE)"},
							{id: 2, label: "Supra do Segmento ST"},
							{id: 3, label: "Sobrecarga Atrial (SA)"},
							{id: 3, label: "Sobrecargo de Ventrículo (SV)"},
							{id: 3, label: "Flutter Atrial"},
							{id: 3, label: "Fibrilação Atrial (FA)"},
						],

						//Ecocardiograma
						primeira_FE: "", // texto numérico
						primeiro_VE_diast: "",
						primeiro_VE_sist: "",

						ultima_FE: "", // texto numérico
						ultima_VE_diast: "",
						ultima_VE_sist: "",		

						delta_FE: "", // diferença entre ultima_FE - primeira_FE
						delta_VE: "", // diferença entre ultima_VE_sist - primeira_FE_sist
						ps_ap: "", // texto numérico

						
					},
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

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveData("anamnese",this.state.formData);
	}

	render(){
		return(
			<div className="physicalExams">
				<h2>Exames Físicos</h2>

					<form onSubmit={ () => this.props.saveData("physicalExams",this.state.formData) }>
						
					</form>
					
			</div>
		)
	}
}

export default PhysicalExams;
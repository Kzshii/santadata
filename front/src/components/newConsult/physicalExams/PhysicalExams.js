import React, { Component } from 'react';
import './PhysicalExams.css';
import Base64 from '../../../lib/base64';
import axios from 'axios';
import Bioquimic from "./bioquimic/Bioquimic";
import Cardio from "./cardio/Cardio";
import Complementary from "./complementary/Complementary";
import General from "./general/General";


class PhysicalExams extends Component {
  constructor(props){
    super(props);
        
		this.handleChange = this.handleChange.bind(this);
		this.addNewExam= this.addNewExam.bind(this);
		this.selectExam= this.selectExam.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);

    this.state = {
			prepare: {},
			formData: {},
			newExam: "Geral",
    };
  }

  componentWillMount() {
	  /*
		axios.defaults.baseURL = 'https://31.220.54.251:8443/';
		axios.post(
			"prepare/exam/physical",
			{}
		).then(
			(response) => {
				this.setState(
					{
						prepare: response.data.data,
					}
				);
				console.log(this.state.prepare)
			}
		).catch();
		*/
		this.setState(
			{
				prepare: {

					geral:
					{
						//void: {id: -1, label: "Vazio"},
						estado: "",

						//Tipos de edemas fisicos 
						edemas: // 1
							[
								{ id: 0, label: "Sem Edema" },
								{ id: 1, label: "+/++++" },
								{ id: 2, label: "++/++++" },
								{ id: 3, label: "+++/++++" },
								{ id: 4, label: "++++/++++" },
							],

						//Auscutas respiratorias
						auscultas_resp: // 1
							[
								{ id: 0, label: "Nenhum" },
								{ id: 1, label: "MV Fisiológico" },
								{ id: 2, label: "Creptações basais" },
								{ id: 3, label: "Creptações difusas" },
							],

						refl_heptojugular:
							[
								{ id: 0, label: "Sim" },
								{ id: 1, label: "Não" },
							],

						turg_jugular:
							[
								{ id: 0, label: "Sim" },
								{ id: 1, label: "Não" },
							],

						ascite:
							[
								{ id: 0, label: "Sim" },
								{ id: 1, label: "Não" },
							],

						peso: 0.0,
						altura: 0.0,
						imc: 0.0, // peso/altura^2 
						//void: {id: -1, label: "Vazio"},
						estado: "",

						//Tipos de edemas fisicos 
						edemas: // 1
							[
								{ id: 0, label: "Sem Edema" },
								{ id: 1, label: "+/++++" },
								{ id: 2, label: "++/++++" },
								{ id: 3, label: "+++/++++" },
								{ id: 4, label: "++++/++++" },
							],

						//Auscutas respiratorias
						auscultas_resp: // 1
							[
								{ id: 0, label: "Nenhum" },
								{ id: 1, label: "MV Fisiológico" },
								{ id: 2, label: "Creptações basais" },
								{ id: 3, label: "Creptações difusas" },
							],

						refl_heptojugular:
							[
								{ id: 0, label: "Sim" },
								{ id: 1, label: "Não" },
							],

						turg_jugular:
							[
								{ id: 0, label: "Sim" },
								{ id: 1, label: "Não" },
							],

						ascite:
							[
								{ id: 0, label: "Sim" },
								{ id: 1, label: "Não" },
							],

						peso: 0.0,
						altura: 0.0,
						imc: 0.0, // peso/altura^2 
					},

					cardio: 
					{
						//Ritmo cardiovascular
						ritmo: // 1
							[
								{ id: 0, label: "Regular" },
								{ id: 1, label: "Irregular" },
							],

						//Inpecao cardiovascular
						inspecao: // 1
							[
								{ id: 0, label: "Ictus Cordis Visivel" },
								{ id: 1, label: "Ictus de VD" },
								{ id: 2, label: "Movimento em bascula" },
							],

						//Bulhas
						bulhas: // 1
							[
								{ id: 0, label: "B1 e B2" },
								{ id: 1, label: "B3" },
								{ id: 2, label: "B4" },
								{ id: 3, label: "B3 e B4" },
							],


						auscuta: "",

						//Palpacao
						palpacao: // 1..*
							[
								{ id: 0, label: "Ictus não palpável" },
								{ id: 1, label: "Ictus palpável" },
								{ id: 2, label: "Desviado E para Baixo" },
								{ id: 3, label: "LHC 5 EIEC" },
							],

						fc: 0,

						pressao_arterial: 0,
					},

					bioquimico:
					{
						creatina:
						{
							basal: 0.0,
							ultima: 0.0,
							delta: 0.0,
							clearence_atual: 0.0,
		
						},

						sangue:
						{
							hemoglobina: 0.0,
							linfocitos: 0.0,
							sodio: 0.0,
							outros: "", // Plain Text
						}
					},

					complementario:
					{
						//ECG
						eletro: // 0..*
						[ 
							{id: 0, label: "Bloqueio de Ramo Direito (BRD)"},
							{id: 1, label: "Bloqueio de Ramo Esquerdo (BRE)"},
							{id: 2, label: "Supra do Segmento ST"},
							{id: 3, label: "Sobrecarga Atrial (SA)"},
							{id: 4, label: "Sobrecargo de Ventrículo (SV)"},
							{id: 5, label: "Flutter Atrial"},
							{id: 6, label: "Fibrilação Atrial (FA)"},
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
					}
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

	addNewExam(name,exam){
		
		var data= this.state.formData;
		data[name] = exam;

		this.setState({
			formData: data,
		});
	}

	selectExam(event){
		this.setState({
			newExam: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveData("physicalExams",this.state.formData);
	}

	render(){

		const examTypes = 
		{
			Geral: <General title="Gerais" form={this.state.prepare["geral"]} saveData={ this.storeFormData }/>,
			Cardio: <Cardio title="Cardiovasculares" form={this.state.prepare["cardio"]} saveData={ this.storeFormData }/>,
			Bioquímico: <Bioquimic title="Bioquímicos" form={this.state.prepare["bioquimico"]} saveData={ this.storeFormData }/>,
			Complementários: <Complementary title="Complementares" form={this.state.prepare["complementario"]} saveData={ this.storeFormData }/>,
		}

		const exams = Object.keys(this.state.prepare);

		return(
			
			<div className="physicalExams">
				<h2>Exames Físicos</h2>

					<form onSubmit={this.handleSubmit}>
						<General title="Gerais" form={this.state.prepare["geral"]} addNewExam={ this.addNewExam }/>,
						<Cardio title="Cardiovasculares" form={this.state.prepare["cardio"]} addNewExam={ this.addNewExam }/>,
						<Bioquimic title="Bioquímicos" form={this.state.prepare["bioquimico"]} addNewExam={ this.addNewExam }/>,
						<Complementary title="Complementários" form={this.state.prepare["complementario"]} addNewExam={ this.addNewExam }/>,
						
						{/* 						
						<select name="examsType" id="examsType" onChange={this.selectExam}>
							{			
								exams.map(
									(row) => {
										return(
											<option key={row} value={row}>{row}</option>
										)
									}
								)
							}
						</select> 
						*/}
						
						<input type="submit" value="Salvar"/>
					</form>
					{examTypes[this.state.newExam]}
			</div>
		)
	}
}

export default PhysicalExams;
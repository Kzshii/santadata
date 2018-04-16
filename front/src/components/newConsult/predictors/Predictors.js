import React, { Component } from 'react';
import './Predictors.css';
import Form from './../../form/Form';

class Predictors extends Component {

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);

		this.formData = {
			geral: {},
			outros: {}
		};

		this.state = {
			prepare: null,
		};
  }

	componentDidMount() {
    //this.props.prepare(this, "prepPredictors");

		/* test only */

		this.setState({

			prepare: {

				geral: {
					// Morte súbita recuperada
					morte_subita: {
						type: "radio",
						title: "Morte súbita recuperada",
						options: [
							{id: 0,label: "Sim"},
							{id: 1,label: "Nao"}
						]
					},

					// Episódio de taquicardia ventricular sustentada
					ep_taq: {
						type: "radio",
						title: "Episódio de taquicardia ventricular sustentada",
						options: [
							{id: 0,label: "Sim"},
							{id: 1,label: "Nao"}
						]
					},

					// Disfunção ventricular com fração de ejeção ≤ 35% e o paciente se encontra sintomático.
					disf_vent: {
						type: "radio",
						title: "Disfunção ventricular com fração de ejeção ≤ 35% e o paciente se encontra sintomático",
						options:[
							{id: 0,label: "Sim"},
							{id: 1,label: "Nao"}
						]
					}
				},

				outros:{

					// Integração Identificação
					int_id: {
						type: "radio",
						title: "Integração identificação",
						options: [
							{id: 0,label: "Acima de 65 anos"},
							{id: 1,label: "Abaixo de 65 anos"}
						]
					},

					// Integração Evidências
					int_ev: {
						type: "radio",
						title: "Integração evidências",
						options: [
							{id: 0,label: "Etiologia Chagásica"},
							{id: 1,label: "Etiologia Isquemica"}
						]
					},

					// Integração Anamnese
					int_anamnese:{
						type: "checkbox",
						title: "Integração Anamnese",
						options: [
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
						]
					},

					// Integração Exame Clínico
					int_exame_fisico: {
						type: "checkbox",
						title: "Integração Exame Clínico",
						options: [
							{id: 0,label: "Má perfusão"},
							{id: 0,label: "Congestão"}, // MV
							{id: 0,label: "Hipotensão"}, // Pressão Abaixo de 120/80mmHg
							{id: 0,label: "Taquicardia"}, // Ritmo Acima de 100bpm
							{id: 0,label: "Presença de B3"}
						]
					}

					// Integração Capacidade Física

					// Integração Estrutural e Funcional dos Exames Complementares

					// Integração Eletrofisiológica dos Exames Complementares

					// Integração Hemodinâmica dos Exames Complementares

					// Integração Exames Laboratoriais

					//
				}
			}
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveData(this.formData,"consult","predictors");
	}

	render() {
		if(!this.state.prepare){
			return(
				<div>Loading</div>
			);
		}
		return(
			<div className="Predictors">
			<h2>Preditores</h2>

				<Form
					InputList={ this.state.prepare.geral }
					Storage={ (data) => {
						this.formData.geral = JSON.parse(JSON.stringify(data));
					}}
          Config={{
            Select:{
              OptionValue: "id"
            },
            Checkgroup:{
              OptionValue: "id"
            },
            Radiogroup:{
              OptionValue: "id"
            }
          }}
				/>
				<Form
					InputList={ this.state.prepare.outros }
					Storage={ (data) => {
						this.formData.outros = JSON.parse(JSON.stringify(data));
					}}
          Config={{
            Select:{
              OptionValue: "id"
            },
            Checkgroup:{
              OptionValue: "id"
            },
            Radiogroup:{
              OptionValue: "id"
            }
          }}
				/>

        <form onSubmit={ this.handleSubmit }>
          <input className="Button" type="submit" value={"Salvar "+ this.props.title +" e Continuar"}/>
        </form>

			</div>
		);
	}
}

export default Predictors;

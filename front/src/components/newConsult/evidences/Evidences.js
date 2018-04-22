import React, { Component } from 'react';
import Form from "../../form/Form";
import './Evidences.css';
import LocalStorage from "./../../../lib/localStorage/localStorage";
class Evidences extends Component {
  constructor(props) {
    super(props);

    /* METHODS */
    this.handleSubmit = this.handleSubmit.bind(this);

    /* VARS */
    this.formData = {};

    /* STATE */
    this.state = {
			prepare: null,
    };
	}

	componentDidMount() {
    //this.props.prepare(this, "prepEvidences");

    /* test only */
		this.setState(
			{
				prepare: {

					// Registro de Evidencias
					ev_estado: // 1
					{
            type: "select",
            title: "Estado",
            required: "true",
            options:
            [
					  	{id: 0,label: "Primeira consulta"},
						  {id: 1,label: "Em tratamento"},
						  {id: 2,label: "Desistente/Desaparecido"},
              {id: 3,label: "Reinternação"},
            ]
          },

					// Tempo do acompanhamento Ambulatorial
          amb_start_time:
          {
            type: "number",
            title: "Tempo do acompanhamento Ambulatorial"
          }, //

					// Data Primeira Consulta
          date_consult:
          {
            type: "date",
            title: "Data Primeira Consulta",
          },

					// Etiologia
					ev_etiologia: // 0..*
					{
            type: "checkbox",
            title: "Etiologia",
            required: "true",
            options:[
              {id: 0,label: "A Esclarecer"},
              {id: 1,label: "Doença Arterial Coronariana (DAC)"},
              {id: 2,label: "Hipertensão Arterial Sistêmica (HAS)"},
              {id: 3,label: "Cardiomiopatia Dilatada Idiopática"},
              {id: 4,label: "Cardiomiopatia Chagásica"},
              {id: 5,label: "Valvulopatias"},
              {id: 6,label: "Alcoólica"},
              {id: 7,label: "Pós Quimioterapia"},
            ]
          },

					// Co-morbidades
					ev_comorbidades: // 0..*
					{
            type: "checkbox",
            title: "Co-morbidades",
            required: "true",
            options:
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
            ]
          },

					// Eventos Adversos
					ev_adversos: // 0..*
					{
            type: "checkbox",
            title: "Eventos adversos",
            required: "true",
            options:
            [
              {id: 0,label: "Infarto Agudo do Miocárdio (IAM)"},
              {id: 1,label: "Acidente Vascular Cerebral (AVC)"},
              {id: 2,label: "Internação (INT)"},
            ]
          },

					// Obito
          ev_obito: // 1
					{
            type: "radio",
            title: "Óbito",
            required: "true",
            options:
            [
              {id: 0,label: "Sim"},
              {id: 1,label: "Nao"},
            ]
          }
				},
			}
		);
	}

	handleSubmit(event) {
		event.preventDefault();
    LocalStorage.save(this.formData,"consult","evidences");
    this.props.saveData("evidences",this.formData);
	}

	render(){
    //console.log("EVIDENCES X:",this.x);
    if(!this.state.prepare) {
      return(
        <div>LOADING</div>
      );
    }

		return(
			<div className="Evidences">
        <h2>Evidências</h2>

        <Form
          OnSubmit = {null}
          InputList = { this.state.prepare }
          Storage={ (data) => {
            this.formData = JSON.parse(JSON.stringify(data));
          }}
          SubmitValue ="Salvar evidências"
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

export default Evidences;

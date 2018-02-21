import React, { Component } from 'react';
import Form from "../../form/Form";
import './Evidences.css';

class Evidences extends Component {
  constructor(props) {
    super(props);
    
    /* METHODS */
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    /* VARS 
    this.InputList = {};
    */

    /* STATE */
    this.state = {
			prepare: null,
			formData: {},
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
  
  handleSubmit(event) {
		event.preventDefault();
    this.props.saveData("evidences",this.state.formData);
	}
  
	render(){
    console.log("PROPS", this.props)
    console.log("EVIDENCES STATE:", this.state);
    console.log("MOUNT INPUT LIST - EVIDENCES STATE", this.state.prepare)
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
          OnSubmit = { this.handleSubmit }
          InputList = { this.state.prepare }     
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
      </div>
		);
	}
}

export default Evidences;

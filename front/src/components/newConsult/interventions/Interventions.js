import React, { Component } from 'react';
import './Interventions.css';
import Form from './../../form/Form';
import LocalStorage from "./../../../lib/localStorage";

class Interventions extends Component {
  constructor(props){
    super(props);

		this.handleSubmit = this.handleSubmit.bind(this);

    this.formData = {};

		this.state = {
			prepare: null,
		};
  }

  componentDidMount() {
		//this.props.prepare(this, "prepInterventions");

		/* Test only */
		this.setState(
			{
				prepare: {

					// Tipos de intervenções
					angio:
					{
						type: "select",
						title: "Angio",
						required: "true",
						options:
						[
							{id: 0,label: "Cirurgia de Revascularização do Miocárdio (CRM) prévia"},
							{id: 1,label: "Intervenção Coronária Percutanea (ICP) prévia"},
						]
					},

					implantes:
					{
						type: "select",
						title: "Implantes",
						required: "true",
						options:
						[
							{id: 0,label: "Marcapasso Definitivo (MPD)"},
							{id: 1,label: "Cardiodesfibrilador Implantável (CDI)"},
							{id: 2,label: "Tratamento por Ressincronização Cardíaca (TRC)"},
						]
					},
				}
			},
		);
	}

	handleSubmit(event) {
		event.preventDefault();
    LocalStorage.save(this.formData,"consult","interventions");
		this.props.saveData("interventions",this.formData);
	}

	render(){
		if(!this.state.prepare) {
			return(
				<div></div>
			);
		}
		return(
			<div className="interventions">
				<h2>Intervenções</h2>

				<Form
					OnSubmit={null}
					InputList={ this.state.prepare }
					Storage={ (data) => {
            this.formData = JSON.parse(JSON.stringify(data));
          }}
					SubmitValue="Salvar intervenções"
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
          <input className="Button" type="submit" value={"Salvar "+ this.props.title}/>
        </form>

			</div>
		)
	}
}

export default Interventions;

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
		this.props.saveData("physicalExams",this.state.formData);
	}

	render(){
		return(
			<div className="physicalExams">
				<h2>Exames Físicos</h2>

				{/*
					<form onSubmit={ () => this.props.saveData("physicalExams",this.state.formData) }>
						
					</form>
				*/}

				<General/>
				<Cardio/>
				<Bioquimic/>
				<Complementary/>

			</div>
		)
	}
}

export default PhysicalExams;
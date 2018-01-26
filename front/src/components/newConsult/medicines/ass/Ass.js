import React, { Component } from 'react';
import Base64 from '../../../../lib/base64';
import axios from 'axios';

class Ass extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			formData: {
				name: this.props.title,
			}
		};
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

	handleSubmit(event){
		event.preventDefault();

		this.props.addMedicine(this.state.formData);
	}

	render(){
		
		if(this.props.form) {
			return(
				<div className="ass">
					<form onSubmit={this.handleSubmit}>

						<label htmlFor="ass">Ass</label>
						{
							this.props.form.map(
								(row) => {
									return(
										<div key={ row.id }>
											<input type="radio" name="diureticos" value={ row.id } onChange={ this.handleChange }/>
											<label htmlFor="">{ row.label }</label>
										</div>
									);
								}
							)
						}
						<br/>
						<input type="submit" value="Adicionar Medicamento"/>
					</form>
				</div> 
			)
		} else {
			return("");
		}
	}
}

export default Ass;

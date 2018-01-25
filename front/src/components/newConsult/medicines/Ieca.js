import React, { Component } from 'react';
import Base64 from '../../../lib/base64';
import axios from 'axios';

class Ieca extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);

		this.state = {
			formData: {}
		};
	}
	
	componentDidMount() {
		/* this.setState({
			formData: this.props.form.input
		}) */
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

	render(){
		
		if(this.props.form) {
			return(
				<div className="ieca">
					<form>
						<label htmlFor="ieca">IECA</label>
						{
							this.props.form.select.map(
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
							name="date"
							id="firstDosageDate"
							value={ this.state.formData.date }
							onChange={ this.handleChange }
							required
						/> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
						<input
							type="number"
							name="hour"
							id="firstDosageHour"
							value={this.state.formData.hour }
							onChange={ this.handleChange }
							required
						/> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
						<input
							type="number"
							name="charge"
							id="dosage"
							value={ this.state.formData.charge }
							onChange={ this.handleChange }
							required
						/> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
						<input
							type="number"
							name="gap"
							id="gapDosage"
							value={ this.state.formData.gap }
							onChange={ this.handleChange }
							required
						/> 
						<br/>
						<br/>
					</form>
				</div> 
			)
		} else {
			return("");
		}
	}
}

export default Ieca;

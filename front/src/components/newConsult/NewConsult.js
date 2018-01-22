import React, { Component } from 'react';
import './NewConsult.css';
import Base64 from '../../lib/base64';
import axios from 'axios';

class NewConsult extends Component {
  constructor(props) {
    super(props);
        
    this.state = {

    };
	}
	
	render() {
		return(
			<div className="NewConsult">
				<h1>NovaConsulta</h1>
				{console.log(this.props)}
				{/* anamnese */}
				{/* evidences */}
				{/* interventions */}
				{/* medicines */}
				{/* physicalExams */}
				{/* predictors */}
			</div>
		);
	}
}

export default NewConsult;

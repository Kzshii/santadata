import React, { Component } from 'react';
import './NewConsult.css';
import Base64 from '../../lib/base64';
import axios from 'axios';

class NewConsult extends Comment{
  constructor(props){
    super(props);
        
    this.state = {

    }
	}
	
	render(){
		return(
			<div className="NewConsult">
				{/* anamnese */}
				{/* evidences */}
				{/* medicines */}
			</div>


		)
	}

}

export default NewConsult;

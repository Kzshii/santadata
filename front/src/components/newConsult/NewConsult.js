import React, { Component } from 'react';
import './NewConsult.css';
import Base64 from '../../lib/base64';
import axios from 'axios';
import Anamnese from "./anamnese/Anamnese";
import Evidences from "./evidences/Evidences";
import Interventions from "./interventions/Interventions";
import Medicines from "./medicines/Medicines";
import PhysicalExams from "./physicalExams/PhysicalExams";
import Predictor from "./predictors/Predictors";

class NewConsult extends Component {
	constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
			
		this.state = {
			currentSection: 0,

			sections: [
					<Anamnese/>,
					<Evidences/>,
         ] 
		};
  }
  

  goTo(command){

    switch(command){
      case "next":
        var i = this.state.currentSection + 1;
        console.log(this.state.sections[i])
        this.setState({
          currentSection: i,
        })
      case "prev":
        var i= this.state.currentSection - 1;
        this.setState({
          currentSection: i,
         })
      default:
        this.setState({
          currentSection: command
        })
    }

  }
	
	render() {
		return(
			<div className="NewConsult">
				

        <button name="Anterior" onClick={()=> {this.goTo("prev")}}>Anterior</button>
        <button name="Proximo" onClick={()=> {this.goTo("next")}}>Proximo</button>

        {console.log(this.state.sections[this.state.currentSection])}
				{this.state.sections[(this.state.currentSection)+1]}
				
			</div>
		);
	}
}

export default NewConsult;

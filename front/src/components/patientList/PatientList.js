import React, { Component } from 'react';
import './PatientList.css';

class PatientList extends Component {

  constructor(props) {
    super(props);
	
	}

	componentDidMount(event){
    /* TODO: */
    {console.log(this.props)}
	}
	
	dbConnect(event) {
    /* TODO:Connection with db */
  }

  render() {
    {console.log(this.props.patients)}
    if (this.props.patients != null){
      return(
        <div className="patientList">
          <h1>Tabela de Pacientes</h1>
          <table>
            <tr><th>Paciente</th><th>Id</th></tr> 
            
          </table>
        </div>
      );
    }
    else{
      return("pesquisar...")
    }
  }
}

export default PatientList;

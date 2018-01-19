import React, { Component } from 'react';
import './PatientList.css';

class PatientList extends Component {

  constructor(props) {
    super(props);
	
	}

	componentDidMount(event){
    /* TODO: */
	}
	
	dbConnect(event) {
    /* TODO:Connection with db */
  }

  render() {
   
    if (this.props.patients != null){
      {console.log(this.props.patients.map(
        function(patient){
          return patient.Name
        }
      ))}
      return(
        <div className="patientList">
          <h1>Tabela de Pacientes</h1>
          <table>
            <thead>
            <tr><th>Paciente</th><th>Id</th></tr> 
            </thead>
            <tbody>
            {this.props.patients.map(
              function(patient){
                return(
                  <tr key={patient.Id}>
                    <td>{patient.Name}</td>
                    <td>{patient.Id}</td>
                  </tr>
                )
              }
            )}
            </tbody>
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

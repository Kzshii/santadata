import React, { Component } from 'react';
import './PatientList.css';

class PatientList extends Component {

  render() {
   
    if (this.props.data != null) {
      
      console.log("Log da lista",this.props.data.map(
        function(patient){
          return patient.name;
        }
      ));

      return(
        <div className="PatientList">
          {/* <h1>Tabela de Pacientes</h1> */}
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Id</th>
              </tr>
            </thead>
            <tbody>
              { this.props.data.map(
                (patient) => {
                  return(
                    <tr key={ patient.id } onClick={ this.props.itemAction } >
                      <td>{ patient.name }</td>
                      <td>{ patient.id }</td>
                    </tr>
                  );
                }
              ) }
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

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

          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>

                <th scope="col">Paciente</th>
                <th scope="col">Id</th>
                
              </tr>
            </thead>
            <tbody>
              {
                this.props.data.map(
                  (patient) => {
                    return(
                      <tr key={ patient.idpatient } onClick={ () => {this.props.itemAction(patient.idpatient)} } >  
                                    
                        <td>{ patient.name }</td>
                        <td>{ patient.idpatient }</td>
                      </tr>
                    );
                  }
                )
              }
            </tbody>
          </table>
      
        </div>
      );
    }
    else{
      return("");
    }
  }
}

export default PatientList;

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

                <th scope="col">Prontuário</th>
                <th scope="col">Paciente</th>
                
              </tr>
            </thead>
            <tbody>
              {
                this.props.data.map(
                  (patient) => {
                    return(
                      <tr key={ patient.id } onClick={ () => { this.props.itemAction(patient.id) } } >
                                    
                        <td>{ patient.mv }</td>
                        <td>{ patient.patientName }</td>
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

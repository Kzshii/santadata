import React, { Component } from 'react';
import './PatientList.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";

class PatientList extends Component {

  render() {

    if (this.props.data != null) {

  
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
                        <tr key={ patient.idpatient } >
                          <td>
                            <Link to={`/paciente/${patient.idpatient}`}>
                              { patient.name }
                            </Link>
                          </td>
                          <td>
                            { patient.nr_mv }
                          </td>
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

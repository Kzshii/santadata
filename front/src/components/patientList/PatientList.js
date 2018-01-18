import React, { Component } from 'react';
import './PatientList.css';

class PatientList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {

    };
	}

	componentDidMount(event){
		/* TODO: */
	}
	
	dbConnect(event) {
    /* TODO:Connection with db */
  }

  render() {

    return(
      <div className="PatientList">
				{/*this.dbConnect*/}
        <table>
					<tr>
						<th>Nome</th>
						<th>Sobrenome</th>
						<th>Idade</th>
						<th>Número do prontuário</th> 
						<th>Urgência</th>
					</tr>
					<tr>
						<td>Edson</td>
						<td>Simões Boldrini</td> 
						<td>21</td>
						<td>00000001</td>
						<td>não ~sinal vermelho~</td>
					</tr>
        </table>
      </div>
    );
  }
}

export default PatientList;

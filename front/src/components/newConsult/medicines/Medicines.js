import React, { Component } from 'react';
import './Medicines.css';
//import Base64 from '../../lib/base64';
//import axios from 'axios';

class Medicines extends Component {
  constructor(props){
    super(props);
        
    this.state = {

    }
	}
	
	render(){
		return(
			<div className="Medicines">
				<h2>Medicamentos</h2>

          <form onSubmit={ this.handleSubmit } >

						<h3>Remédios ministrados</h3>

						<label htmlFor="ieca">IECA</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Captopril
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Enalapril
						<input type="radio" name="gender" id="3" value="3" onChange={ this.handleChange } /> Lisinopril
						<input type="radio" name="gender" id="4" value="4" onChange={ this.handleChange } /> Cilazapril
						<input type="radio" name="gender" id="5" value="5" onChange={ this.handleChange } /> Ramipril
						<input type="radio" name="gender" id="6" value="6" onChange={ this.handleChange } /> Trandolapril
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="bra">BRA</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Losartana
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Valsartana
						<input type="radio" name="gender" id="3" value="3" onChange={ this.handleChange } /> Candersatan
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="betaBlockers">Beta-bloqueadores</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Carvedilol
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Metropolol
						<input type="radio" name="gender" id="3" value="3" onChange={ this.handleChange } /> Bisoprolol
						<input type="radio" name="gender" id="4" value="4" onChange={ this.handleChange } /> Propanolol
            <br/>

						<label htmlFor="canaiscaBlockers">Bloqueadores de Canaisca</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Verapamil
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Diltiazem
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="diureticos">Diuréticos</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Hidroclorotiazida
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Furosemida
						<input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Espirolactona
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="digitalico">Digitalico</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Digoxina
            <br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="aas">AAS:</label>
						<input type="checkbox" name="gender" id="0" value="0" onChange={ this.handleChange } /> Uso

						<label htmlFor="estatina">Estatina</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Sinvarstatina
            <input type="radio" name="gender" id="2" value="2" onChange={ this.handleChange } /> Atorvarstatina
            <br/>

						<label htmlFor="hidralazina">Hidralazina</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Apresolina
						<br/>

						<label htmlFor="nitrato">Nitrato</label>
						<input type="radio" name="gender" id="0" value="0" onChange={ this.handleChange } /> Nenhum
            <input type="radio" name="gender" id="1" value="1" onChange={ this.handleChange } /> Apresolina
						<br/>

						<label htmlFor="firstDosageDate">Data da primeira dose:</label>
            <input
              type="date"
              name="firstDosageDate"
              id="firstDosageDate"
              value={ this.state.formData.firstDosageDate }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="firstDosageHour">Hora de início:</label>
            <input
              type="number"
              name="firstDosageHour"
              id="firstDosageHour"
              value={ this.state.formData.firstDosageHour }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="dosage">Dose:</label>
            <input
              type="number"
              name="dosage"
              id="dosage"
              value={ this.state.formData.dosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<label htmlFor="gapDosage">Intervalo entre doses:</label>
            <input
              type="number"
              name="gapDosage"
              id="gapDosage"
              value={ this.state.formData.gapDosage }
              onChange={ this.handleChange }
              required
            /> 
						<br/>

						<input type="submit" value="Salvar"/>

					</form>
			</div>


		)
	}

}

export default Medicines;
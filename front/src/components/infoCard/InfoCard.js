import React, { Component } from 'react';
import './infoCard.css';

class InfoCard extends Component {

  constructor(props){
    super(props)
    
    
  }

  render() {

    if((this.props.data) != null){

      const date= new Date(this.props.data.dtnasc).toLocaleDateString() /* passando data para formato padrão */
      
    return(
      <div className="InfoCard">

        <div className="patientImg">
          <span>Imagem Aqui...</span>
        </div>

       <div className="pacientName">
        <h4>Paciente</h4>
        <p>{this.props.data.name}</p>
       </div>

       <div className="pacientProntuario">
        <h4>N° Prontuário</h4>
        <p>{this.props.data.nr_prontuario}</p>
       </div>

       <div className="patientBirth">
        <h4>Data de Nascimento</h4>
        <p>{date}</p>
       </div>

      <div className="patientEtiny">
        <h4>Etinia</h4>
        <p>{this.props.data.etiny}</p>
       </div>

       <div className="patientAdress">
        <h4>Endereço</h4>
        <p>{this.props.data.address}</p>
       </div>

       <div className="patientTell">
        <h4>Telefone</h4>
        <p>{this.props.data.tel1}</p>
       </div>

       <div className="emegercyTell">
        <h4>Telefone de Emergência</h4>
        <p>{this.props.data.tel_emerg}</p>
       </div>


      </div> 
      
    );
    }else{
      return(
        <div className="infoCard">
        </div>
      )
    }
  }
}

export default InfoCard;

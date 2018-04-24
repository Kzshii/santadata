import React, { Component } from 'react';
import './ResearchPage.css';
import LocalStorage from '../../lib/localStorage/localStorage';
import { Link } from "react-router-dom";
import StoredList from '../../components/storedList/StoredList';
import FormFactory from '../../components/formFactory/FormFactory';
//import FormFactory from '../../components/formFactory/FormFactory';


class ResearchPage extends Component {
  constructor(props){
    super(props);

    this.addInList = this.addInList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      prepare: [],
      storedList: [],
    }
  }


	componentDidMount() {
    // this.props.prepare(this, "prepAnamnese");

		/* test only */
		this.setState(
			{
        prepare: [

          {
            fieldType:"CheckGroup",
            fieldLabel:"Historia patologica",
            fieldName:"hist_pat",
            id:"hist_pat",
            options: [
              {
                fieldName:"Reducao de funcao cognitiva",
                fieldLabel:"Reducao de funcao cognitiva",
                id:"0"
              },
              {
                fieldName:"Caquexia",
                fieldLabel:"Caquexia",
                id:"1"
              },
              {
                fieldName:"Anorexia",
                fieldLabel:"Anorexia",
                id:"2"
              },
              {
                fieldName:"Sincope",
                fieldLabel:"Sincope",
                id:"3"
              },
              {
                fieldName:"Apneia do sono",
                fieldLabel:"Apneia do sono",
                id:"4"
              },
              {
                fieldName:"Doenca pulmonar associada",
                fieldLabel:"Doenca pulmonar associada",
                id:"5"
              },
              {
                fieldName:"Depressao",
                fieldLabel:"Depressao",
                id:"6"
              },
            ]
          },
        ],
			}
		);
  }

  
  addInList(){

  }

  removeFromList(){

  }

  handleChange(formData){
    console.log("FormData:", formData);
    /* 
    Object.keys(formData).map(
      (field) => {
        console.log(field);
      }
    ) */
  }

  render() {
    
    return (
      <div>
        <h2>Pesquisa</h2>

        {/* {console.log("this.state.prepare:", this.state.prepare)} */}

        <FormFactory formTemplate={ this.state.prepare } onSubmit={this.handleChange}/>

        {/* <StoredList title="Caracteristicas selecionadas" list={this.state.storedList} remove={this.removeFromList}/> */}

        <Link to="/resultado-pesquisa">Pesquisar</Link>
      </div>
    );
  }
}

export default ResearchPage;
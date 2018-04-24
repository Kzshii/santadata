import React, { Component } from 'react';
import StoredList from './../../storedList/StoredList';
import Popup from './../../popup/Popup';
import LocalStorage from "./../../../lib/localStorage/localStorage";


class ConsultSection extends Component{

  constructor(props){
    super(props);

    this.myPopup= this.myPoup.bind(this);
    this.closePopup= this.closePopup.bind(this);
    this.showPopup= this.showPopup.bind(this);
    this.myStoredList= this.myStoredList.bind(this);

    this.formData= {};
    this.inputList= {};
    this.forms= [];

    this.state= {
        showPopup: false,
        popupForm: null,
        storedForms: [],
        selectedsForms: []
    }

  }

  closePopup(){
    this.setState({
      showPopup: false,
    })
  }

  showPopup(){
    this.setState({
      showPopup: true,
    })
  }

  myPoup(){
    return(
      this.state.showPopup ?
            <Popup
              title="Editar Exame"
              close={()=>{this.closePopup()}}
              content={
                "TESTE"
              }/>  : null );
    }

    myStoredList(props){
      return(
        props.props.meta.editavel?
        <StoredList title={props.props.meta.title + " Guardados"}
                    list={this.state.storedForms}
                    remove={this.removeForm}
                    showPopup={this.ShowPopup}/>
        : null
      )
    }


  render(){
    const props= {
      "props":{

        "meta": {
          "title": "Medicamentos",
          "editavel": true,
          "prepareSelectLabel":"Tipo de Medicamento",
          "prepareSelectName":"medtype"
        },

        "prepare": {
          "IECA": {
            "AP": [
              {
                "fieldType":"",
                "fieldName":"",
                "fieldLabel":"",
                "id":""
              },
              {
                "fieldType":"",
                "fieldName":"",
                "fieldLabel":"",
                "id":""
              },
            ],
            "PA": [
              {
                "fieldType":"",
                "fieldName":"",
                "fieldLabel":"",
                "id":""
              },
              {
                "fieldType":"",
                "fieldName":"",
                "fieldLabel":"",
                "id":""
              },
            ]
          },
          "BRA": {
            "BB": {
              "XXX": [
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                }
              ],
              "YYY": [
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                }
              ]
            },
            "CC": {
              "ZZZ": [
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                }
              ],
              "AAA": [
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                },
                {
                  "fieldType":"",
                  "fieldName":"",
                  "fieldLabel":"",
                  "id":""
                }
              ]
            }
          }
        }
      }
    };


    return(
      <div className= "ConsultSection">

      <h1>

      {props.props.meta.title}
      </h1>

      {this.myPopup()}
      {this.myStoredList(props)}





      </div>
    )
  }

}

export default ConsultSection;

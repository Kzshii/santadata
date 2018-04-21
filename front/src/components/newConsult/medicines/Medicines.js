import React, { Component } from 'react';
import './Medicines.css';
import Form from './../../form/Form';
import Select from './../../form/select/Select';
import Radiogroup from './../../form/radiogroup/Radiogroup';
import StoredList from './../../storedList/StoredList';
import Popup from './../../popup/Popup';
import LocalStorage from "./../../../lib/localStorage/localStorage";

/*
  Medicines retorna um array com os medicamentos adicionados.
  medicines: [
    0: {
      name: text,
      type: numeric,
      date: date,
      charge: numeric,
      gap: numeric,
      hour: [0, 2]
    },
    1: {

    },
  ]
*/

class Medicines extends Component {
  constructor(props){
    super(props);

    /* METHODS */
    this.mountSelectOptions = this.mountSelectOptions.bind(this);
    //this.selectFormType = this.selectFormType.bind(this);
    this.selectForm = this.selectForm.bind(this);
    this.mountInputList = this.mountInputList.bind(this);
    this.storeForm = this.storeForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
    this.ShowPopup = this.ShowPopup.bind(this);
    this.editForm= this.editForm.bind(this);

    /* VARS */
    this.inputList = {};
    this.selectOptions = null;
    this.forms = [];

    /* STATE */
    this.state = {
      showPopup: false,
			prepare: null,
			storedForms:[],
      //selectedFormType: "Escolher",
      selectedForm: "choose",
      inputList: null,
      popupForm: null
    };
  }

  componentDidMount() {
    //this.props.prepare(this, "prepMedicines");

    this.setState(
      {
        prepare: {
          //Medicamentos ministrados no paciente


          commom: {

            /*
            title:{
               type: 'label',
               value: ""
            },
            */

            date: {
              type: "date", // data
              title: "Data",
              required: "true"
            },

            charge: {
              type: "number", // mg
              title: "Carga",
              unity: "mg"
            },

            gap: {
              type: "number", // horas
              title: "Intervalo",
              unity: "h"
            },

            // Acrescentar momento do dia 0*...

            // 0...*
            hour: {
              type: "checkbox",
              title: "Horários",
              options: [
                {id: 0,label: "Manhã"},
                {id: 1,label: "Após o almoço"},
                {id: 2,label: "Tarde"},
                {id: 3,label: "Noite"},
              ],
            },

            submit: {
              type: "submit"
            }
          },

          choose:{
            title: {
              type: "label",
              value: "Escolher medicamento"
            },
          },

          ieca: {
            title: {
              type: "label",
              value: "IECA"
            },

            type: "IECA",

            name: {
              type: "select",
              title: "Nome",
              options:[
                {id: "",label: "Escolher"},
                {id: 0,label: "Captopril",dose_inicial:"6,24",dose_alvo:"50",intervalo:"8"},
                // Dose inicial = 6,24mg
                // Dose alvo = 50mg
                // Duração = 8h/8h
                {id: 1,label: "Enalapril",dose_inicial:"2,5",dose_alvo:"10",intervalo:"12"},
                // Dose inicial = 2,5mg
                // Dose alvo = 10mg
                // Duração 12/12h
                {id: 2,label: "Lisinopril"},
                {id: 3,label: "Cilazapril"},
                {id: 4,label: "Ramipril"},
                {id: 5,label: "Trandolapril"},
              ],
            }
          },

          bra: {
            title: {
              type: "label",
              value: "BRA"
            },

            type: "BRA",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: "",label: "Escolher"},
                {id: 0,label: "Losartana",dose_inicial:"25",dose_alvo:"50 a 150",intervalo:"24"},
                // Dose inicial = 25mg
                // Dose alvo = 50 a 150mg
                // Duração = 1x ao dia
                {id: 1,label: "Valsartana",dose_inicial:"20",dose_alvo:"160",intervalo:"12"},
                // Dose inicial = 20mg
                // Dose alvo = 160mg
                // Duração 12 em 12 horas
                {id: 2,label: "Candersatan"},
              ],
            }
          },

          beta_bloqueadores: {
            title: {
              type: "label",
              value: "Beta Bloqueadores"
            },

            type: "Beta Bloqueador",

            name: {
              type: "select",
              title: "Nome",
                options: [
                  {id: "",label: "Escolher"},
                  {id: 0,label: "Carvedilol",dose_inicial:"3,125",dose_alvo:"25 a 50",intervalo:"12"},
                  // Dose inicial = 3,125mg
                  // Dose Alvo = 25 a 50mg
                  // Duração = 12 em 12 horas
                  {id: 1,label: "Metroprolol"},
                  {id: 2,label: "Bisoprolol"},
                  {id: 3,label: "Propanolol"},
                ],
            }
          },

          bloq_canaisca: {
            title: {
              type: "label",
              value: "Bloqueador de Canal de Cálcio"
            },

            type: "Bloqueador de Canal",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: "",label: "Escolher"},
                {id: 0,label: "Verapamil"},
                {id: 1,label: "Diltiazem"},
              ],
            }
          },

          diureticos: {
            title: {
              type: "label",
              value: "Diuréticos"
            },

            type: "Diuréticos",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: "",label: "Escolher"},
                {id: 0,label: "Hidroclorotiazida"},
                {id: 1,label: "Furosemida"},
                {id: 2,label: "Espirolactona"},
                // Dose inicial = 12,5mg
                // Dose Alvo = 50mg
              ],
            }
          },

          digitalico: {
            title: {
              type: "label",
              value: "Digitálico"
            },

            type: "Digitalico",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: 0,label: "digoxina"},
              ],
            }
          },

          AAS: {
            title: {
              type: "label",
              value: "AAS"
            },

            type: "AAS",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: 0,label: "Uso"},
              ]
            }
          },

          estatina: {
            title: {
              type:"label",
              value:"Estatina"
            },

            type: "Estatina",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: "",label: "Escolher"},
                {id: 0,label: "Sinvastatina"},
                {id: 1,label: "Atorvastatina"},
              ],
            }
          },

          hidralazina: {
            title: {
              type: "label",
              value: "Hidralazina"
            },

            type: "Hidralazina",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: 0,label: "Apresolina"},
              ],
            }
          },

          nitrato: {
            title: {
              type: "label",
              value: "Nitrato"
            },

            type: "Nitrato",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: 0,label: "Dinitrato de Isossorbida"},
              ],
            }
          },

          anticoagulante: {
            title: {
              type: "label",
              value: "Anticoagulante"
            },

            type: "Anticoagulante",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: "",label: "Escolher"},
                {id: 0,label: "Heparina"},
                {id: 1,label: "Dabigatran"},
                ],
            }
          },

          antiarritmico: {
            title: {
              type: "label",
              value: "Antiarrítmico"
            },

            type: "Antiarrítimico",

            name: {
              type: "select",
              title: "Nome",
              options: [
                {id: 0,label: "Amiodarona"},
              ],
            }
          },


          //Medicamentos prescritos para o paciente
          //prescritos:

          sarcubitril_valsartana: {
            title: {
              type: "label",
              value: "Sarcubitril Valsartana"
            },

            type: "Sarcubitil Valsartana",

            name: {
              type: "select",
              title: "Nome",
              options:
              [
                {id: 0,label: "Entresto",dose_inicial:"49 a 51",dose_alvo:"97 a 103",intervalo:"12"},
                // Dose inicial = 49/51mg
                // Dose alvo = 97 mg/103 mg
                // Duração = duas vezes ao dia
              ],
            }
          }
        }
      }
    );
  }

  mountSelectOptions(selectType){
    let options = Object.keys(this.state.prepare);
    let selectOptions= [];

    for (let index = 1; index < options.length; index++) {
      selectOptions.push({
        id: index,
        value: options[index],
        label: this.state.prepare[options[index]].title.value
      });
    }

    this.selectOptions = selectOptions;

    console.log("selectOptions:",selectOptions)
    console.log("options:",options)

    /*
    let form = this.state.prepare[this.state.selectedFormType]

    options = Object.keys(form);

    selectOptions = [];

    for (let index = 1; index < options.length; index++) {
      selectOptions.push({
        id: index - 1,
        value: options[index],
        label: form[options[index]].title.value
      });

      this.forms=selectOptions;
    }
    */
	}

  mountInputList(){

    if (this.state.selectedForm!="choose"){
      const form = this.state.prepare[this.state.selectedForm];
      const formKeys = Object.keys(form);
      const commom = this.state.prepare["commom"];
      const commomKeys = Object.keys(commom);
      let inputList = {};

      for(let i = 0; i < formKeys.length; i++) {
        inputList[formKeys[i]] = form[formKeys[i]];
      }

      for(let i = 0; i < commomKeys.length; i++) {
        inputList[commomKeys[i]] = commom[commomKeys[i]];
      }

      this.inputList = inputList;
      console.log("INPUTLIST FEITA");
      console.log(this.inputList);
    }


    /*
    if (form!=null && formType!=null){

      this.inputList = this.state.prepare[formType][form];

      this.inputList["submit"]={
        type:"submit"
      }
    }
    */
  }

  /*
  selectFormType(event) {
    let forms = Object.keys(this.state.prepare[event.target.value]);
    let form = forms[1];

    this.setState({
      selectedFormType: event.target.value,
      selectedForm: form
    });
  }
  */

  selectForm(event){
    //console.log("event", event);

    this.setState({
      selectedForm: event.target.value
    });

  }

  storeForm(form){
    let store = this.state.storedForms;

    form.name = this.state.selectedForm;
    //form.type = this.state.selectedForm;
    LocalStorage.save(form,"consult","medicines",form.name);
    store.push(form);

    this.setState({
      storedForms: store
    });
  }

  editForm(form){
    console.log("Medicamento Editado");
    console.log(form);

    let storedForms= this.state.storedForms;
    storedForms[this.state.popupForm.index]=form;

    this.setState({
      showPopup: false,
      storedForms:storedForms
    })

    console.log("xD")
    console.log(this.state.storedForms)
  }

  ShowPopup(index){
    let form= this.state.storedForms[index];

    console.log("form",form);

    form["submit"]={
      type:"submit"
    }
    this.setState({
      showPopup: true,
      popupForm: {
        form: form,
        index: index
      }
    })
  }

  removeForm(index){
    let list= this.state.storedForms;
    list.splice(index,1);
    this.setState({
      storedForms: list
    })
  }

  handleSubmit(data) {
    this.props.saveData("medicines", this.state.storedForms);
  }

  render() {
		if(!this.state.prepare){
			return(
				<div>Loading</div>
			);
    }

    this.mountSelectOptions();
    this.mountInputList();

    return(
      <div className="InputMedicine">
        <h2>Medicamentos</h2>

        {/*
        {console.log("selectOptions", this.selectOptions)}
        {console.log("selectFormType", this.selectFormType)}

        <Radiogroup
          Label="Tipo de Medicamento"
          Options={ this.selectOptions }
          OptionValue="value"
          KeyTag="selectForm"
          OnChange={ this.selectFormType }
          Name= "MedsTypes"
        />
        */}

        {/*
        {console.log("selectForm", this.selectForm)}
        {console.log("forms", this.forms)}


        {console.log("selectedForm", this.state.selectedForm)}
        */}

        <Select
          Label="Medicamentos"
          Options={ this.selectOptions }
          OptionValue="value"
          KeyTag="meds"
          OnChange={ this.selectForm }
        />

        {console.log("inputList", this.inputList)}

        {this.state.selectedForm!="choose" ?
          <Form
            OnSubmit={ this.storeForm }
            InputList={ this.inputList }
            SubmitValue="Guardar Medicamento"
            Config={{
              Select:{
                OptionValue: "id"
              },
              Checkgroup:{
                OptionValue: "id"
              },
              Radiogroup:{
                OptionValue: "id"
              }
            }}
        /> : null}


        <StoredList title="Medicamentos Guardados" list={this.state.storedForms} remove={this.removeForm} showPopup={this.ShowPopup}/>

        {console.log("storedForms", this.state.storedForms)}

        {this.state.showPopup ?
          <Popup
            title="Editar Medicamento"
            close={()=>{this.setState({showPopup: false})}}
            content={
              <Form OnSubmit={this.editForm}
                InputList={this.state.popupForm.form}
                SubmitValue="Salvar Edição"
                Config={
                  {
                    Select:{
                      OptionValue: "id"
                    },
                    Checkgroup:{
                      OptionValue: "id"
                    },
                    Radiogroup:{
                      OptionValue: "id"
                    }
                  }}/>
            }/>  : null}

        <form onSubmit={ this.handleSubmit} >
          <input className="Button" type="submit" value="Salvar Medicamentos e Continuar" onMouseUp={ this.handleSubmit }/>
        </form>

      </div>
    );
  }
}

export default Medicines;

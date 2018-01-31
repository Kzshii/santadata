import React, { Component } from 'react';
import './Medicines.css';
import Form from './../../form/Form';
import Select from './../../form/select/Select';
/* import Ieca from './ieca/Ieca.js';
import Bra from './bra/Bra.js';
import BetaBloqueadores from './betaBloqueadores/BetaBloqueadores.js';
import BloqCanaisca from './bloqCanaisca/BloqCanaisca.js';
import Digitalico from './digitalico/Digitalico.js';
import Diureticos from './diureticos/Diureticos.js';
import Ass from './ass/Ass.js';
import Estatina from './estatina/Estatina.js';
import Nitrato from './nitrato/Nitrato.js';
import Antiarritmico from './antiarritmico/Antiarritmico.js';
import Anticoagulante from './anticoagulante/Anticoagulante.js';
import Hidralazina from './hidralazina/Hidralazina.js';
import SarcubitrilValsartana from './sarcubitrilValsartana/SarcubitrilValsartana.js'; */



class Medicines extends Component {
  constructor(props){
    super(props);
    
    /* METHODS */
		this.handleChange = this.handleChange.bind(this);
		this.addNewMedicine = this.addNewMedicine.bind(this);
		this.selectMedicine = this.selectMedicine.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mountInputList = this.mountInputList.bind(this);
    this.mountSelectOptions = this.mountSelectOptions.bind(this);
    
    /* VARS */
    this.InputList = {};
    this.SelectOptions = [];
    
    /* STATE */
    this.state = {
			prepare: null,
			formData: {},
			trash: [],
      selectedMedicine: "IECA",
      InputList: null
    };
  }
  
  componentDidMount() {
    /*
		axios.defaults.baseURL = 'https://31.220.54.251:8443/';
		axios.post(
			"prepare/medicines/",
			{}
		).then(
			(response) => {
				this.setState(
					{
						prepare: response.data.data,
					}
				);
			}
		).catch();
		*/
    this.setState(
      {
        prepare: {
          //Medicamentos ministrados no paciente
              
          commom: {
            date: {
                type: "date", // data
                title: "Data",
            },
                  
            charge: {
              type: "number", // mg
              title: "Carga",
              unity: "mg",
            },
                  
            gap: {
              type: "number", // horas
              title: "Intervalo",
              unity: "h",
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
            }
          },

          IECA: {
            title: {
              type: "label",
              value: "IECA"
            },
            
            type: {
              type: "select",
              title: "Tipo",
              options:[ 
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
    
          BRA: {
            title: {
              type: "label",
              value: "BRA"
            },
              
            type: {
              type: "select",
              title: "Tipo",
              options: [
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
              
            type: {
                type: "select",
                title: "Tipo",
                options: [
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
            
            type: {
              type: "select",
              title: "Tipo",
              options: [
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
            
            type: {
              type: "select",
              title: "Tipo",
              options: [
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
            
            type: {
              type: "checkbox",
              title: "Tipo",
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
            
            type: {
              type: "checkbox",
              title: "Tipo",
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
            
            type: {
              type: "select",
              title: "Tipo",
              options: [
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
            
            type: {
              type: "checkbox",
              title: "Tipo",
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
            
            type: {
              type: "checkbox",
              title: "Tipo",
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
            
            type: {
              type: "select",
              title: "Tipo",
              options: [
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
            
            type: {
              type: "checkbox",
              title: "Tipo",
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
            
            type:{
              type:"checkbox",
              title:"Tipo",
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

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    let formData = this.state.formData;
    
    if(target.type === 'checkbox') {
      if(target.checked) {
        /* insere */
        if(formData[name] == null) {
          formData[name] = [value];
        } else {
          formData[name].push(value);
        }
      } else {
        /* remove */
        let index = formData[name].indexOf(value);
        formData[name].splice(index, 1);
      }
      
    } else {
      formData[name] = value;
    }
    
    this.setState({
      formData: formData,
    });
    console.log("STATE", this.state);
  }	


  addNewMedicine(medicine) {
    var data = this.state.formData;
    data[medicine.name] = medicine;
    this.state.trash.push(medicine);
    this.setState({
      formData: data,
      trash: this.state.trash
    });
  }

  selectMedicine(event) {
    this.setState({
      selectedMedicine: event.target.value
    });
  }

  mountSelectOptions() {
    let options = Object.keys(this.state.prepare);
    let selectOptions = [];

    for(let i = 1; i < options.length; i++) {
      let option = options[i];
      selectOptions.push({
        id: i,
        value: option,
        label:this.state.prepare[option].title.value
      });
    }

    this.SelectOptions = selectOptions;
  }

  mountInputList() {
    const med = this.state.selectedMedicine;
    const meds = this.state.prepare[med];
    console.log("MOUNT INPUT LIST MED:", meds);
    const commom = this.state.prepare.commom;
    const medKeys = Object.keys(meds);
    const commomKeys = Object.keys(commom);
    let InputList = {};

    for(let i = 0; i < medKeys.length; i++) {
      InputList[medKeys[i]] = meds[medKeys[i]];
    }

    for(let i = 0; i < commomKeys.length; i++) {
      InputList[commomKeys[i]] = commom[commomKeys[i]];
    }

    console.log("MEDICINES MOUNT INPUT LIST:", InputList);

    this.InputList = InputList;
    console.log("MOUNT INPUT LIST - MEDICINES STATE",this.state.InputList);
  }

  handleSubmit(data) {
    this.props.saveData("medicines", this.state.formData);
  }

  render() {

    console.log("MEDICINES RENDER STATE", this.state);
    if(!this.state.prepare) {
      return(
        <div>Loading</div>
      );
    }
    this.mountInputList();
    this.mountSelectOptions();

    return(
      <div className="Medicines">
        <Select
          Label="Escolha o tipo de medicamento"
          Options={ this.SelectOptions }
          OptionValue="value"
          KeyTag="SelectMedicine"
          OnChange={ this.selectMedicine }
        />

        <Form
          OnSubmit={ this.handleSubmit }
          InputList={ this.InputList } 
          SubmitValue="Guardar medicamento"
          Config={{
            Select:{ 
              OptionValue: "id"
            },
            Checkgroup:{
              OptionValue: "id"
            }
          }}
        />

        <input className="Button" type="submit" value="Salvar medicamentos e continuar" onMouseUp={ this.handleSubmit }/>
      </div>
    );
    
    
    /* const medicinesTypes= {
      IECA: <Ieca form={this.state.prepare["IECA"]} title="IECA" addMedicine={this.addNewMedicine}/>,
      BRA: <Bra form={this.state.prepare["BRA"]} title="BRA" addMedicine={this.addNewMedicine}/>,
      beta_bloqueadores: <BetaBloqueadores form={this.state.prepare["beta_bloqueadores"]} title="beta_bloqueadores" addMedicine={this.addNewMedicine}/>,
      bloq_canaisca: <BloqCanaisca form={this.state.prepare["bloq_canaisca"]} title="bloq_canaisca" addMedicine={this.addNewMedicine}/>,
      diureticos: <Diureticos form={this.state.prepare["diureticos"]} title="Diuréticos" addMedicine={this.addNewMedicine}/>,
      digitalico: <Digitalico form={this.state.prepare["digitalico"]} title="Digitalico" addMedicine={this.addNewMedicine}/>,
      AAS: <Ass form={this.state.prepare["AAS"]} title="AAS" addMedicine={this.addNewMedicine}/>,
      estatina: <Estatina form={this.state.prepare["estatina"]} title="Estatina" addMedicine={this.addNewMedicine}/>,
      nitrato: <Nitrato form={this.state.prepare["nitrato"]} title="Nitrato" addMedicine={this.addNewMedicine}/>,
      anticoagulante: <Anticoagulante form={this.state.prepare["anticoagulante"]} title="Anticoagulante" addMedicine={this.addNewMedicine}/>,
      antiarritmico: <Antiarritmico form={this.state.prepare["antiarritmico"]} title="Antiarritmico" addMedicine={this.addNewMedicine}/>,
      sarcubitril_valsartana: <SarcubitrilValsartana form={this.state.prepare["sarcubitril_valsartana"]} title="Sarcubitril Valsartana" addMedicine={this.addNewMedicine}/>,
      Hidralazina: <Hidralazina form={this.state.prepare["hidralazina"]} title="Hidralazina" addMedicine={this.addNewMedicine}/>,
    } */
    
    //console.log(medicinesTypes)
    /* const medicines= Object.keys(this.state.prepare)
    
    return(
      <div className="medicines">
      <label htmlFor="">Selecione o tipo de medicamento</label>
      <select name="medicinesType" id="medicinesType" onChange={this.selectMedicine}>
      {			
        medicines.map(
          (medicine) => {
            return(
              <option key={medicine} value={medicine}>{medicine}</option>
            )
          }
        )
      }
      </select>
      {medicinesTypes[this.state.newMedicine]}
      <center>
      <br></br>
      <table name="list-medicines" padding="5px" text-align="center">
      <tr><td> Nome </td> <td>| Carga </td><td>| Intervalo </td></tr>
      {
        console.log(this.state.trash)
      }
      {
        this.state.trash.map((m)=>{
          return(<tr><td align="center">{m.name}</td> <td align="center">{m.charge}</td > <td align="center">{m.gap}</td></tr>)
        })
      }
      </table>
      <br>
      </br>
      </center>
      <form onSubmit={this.handleSubmit}>
      <input className="Button" type="submit" value="Salvar"/>
      </form>
      </div>
    ) */
  }
}

export default Medicines;

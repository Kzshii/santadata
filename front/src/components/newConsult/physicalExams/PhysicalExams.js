import React, { Component } from 'react';
import './PhysicalExams.css';
import Select from './../../form/select/Select';
import Form from './../../form/Form';
import Radiogroup from './../../form/radiogroup/Radiogroup';
import StoredList from './../../storedList/StoredList';
import Popup from './../../popup/Popup';


class PhysicalExams extends Component {
  constructor(props){
    super(props);

    this.mountSelectOptions = this.mountSelectOptions.bind(this);
    this.selectExam = this.selectExam.bind(this);
    this.selectExamType = this.selectExamType.bind(this);
    this.mountInputList = this.mountInputList.bind(this);
    this.storeExam = this.storeExam.bind(this);
    this.removeExam = this.removeExam.bind(this);
    this.ShowPopup = this.ShowPopup.bind(this);
    this.editExam= this.editExam.bind(this);

    this.inputList = {};
    this.SelectOptions = [];
    this.exams = [];

    this.state = {
      showPopup: false,
			prepare: null,
			storedExams:[],
      selectedExamType: null,
      selectedExam: null,
      inputList: null,
      popupExam: null
    };
  }

  componentDidMount() {
    //this.props.prepare(this, "prepExams");

		this.setState(
			{


				prepare: {



          fisico: {

            title:{
              type: 'label',
              value: "Exame Físico"
            },

            geral:
            {
              //void: {id: -1, label: "Vazio"},

              title:{
                type: 'label',
                value: "Exame Físico Geral"
              },

              estado: {
                type: "text",
                title: "Estado"
              },

              //Tipos de edemas fisicos
              edemas: {// 1
                type:"select",
                title:"Edemas",
                options:
                [
                  {id: "", label: "Escolher"},
                  { id: 0, label: "Sem Edema" },
                  { id: 1, label: "+/++++" },
                  { id: 2, label: "++/++++" },
                  { id: 3, label: "+++/++++" },
                  { id: 4, label: "++++/++++" },
                ],
              },

              //Auscutas respiratorias
              auscultas_resp:{ // 1
                type: "select",
                title: "Ascultas Respiratórias",
                options:
                [
                  { id: "", label: "Escolher" },
                  { id: 0, label: "Nenhum" },
                  { id: 1, label: "MV Fisiológico" },
                  { id: 2, label: "Creptações basais" },
                  { id: 3, label: "Creptações difusas" },
                  { id: 4, label: "Edema Agudo do Pulmão" },
                ],
              },

              refl_heptojugular:{
                type:"radio",
                title: "Reflexo Heptojugular",
                options:
                [
                  { id: 0, label: "Sim" },
                  { id: 1, label: "Não" },
                ],
              },

              turg_jugular:{
                type: "radio",
                title:"Turgência Jugular",
                options:
                [
                  { id: 0, label: "Sim" },
                  { id: 1, label: "Não" },
                ],
              },

              ascite:{
                type: "radio",
                title: "Ascite",
                options:
                [
                  { id: 0, label: "Sim" },
                  { id: 1, label: "Não" },
                ],
              },

              perfusao:{
                type: "radio",
                title:"Perfusão",
                options:[
                  {id: 0 , label: "Normal"},
                  {id: 1, label: "Baixa"},
                ]
              },

              freq_respiratoria: {
                type: "number",
                title: "Frequência Repiratória"
              },

              derrame_pleural:{
                type: "radio",
                title: "Derrame Pleural",
                options:[
                  {id:0, label:"Sim"},
                  {id:1, label:"Nao"},
                ]
              },

              peso: {
                type:"text",
                title: "Peso (kg)"
              },
              altura: {
                type: "text",
                title: "Altura (m)"
              },
              imc:{
                type: "text",
                title:"IMC"
              }  // peso/altura^2
            },

            cardio:
            {
              title:{
                type: 'label',
                value: "Exame  Cardio"
              },



              //Ritmo cardiovascular
              ritmo: {// 1
                type: "radio",
                title:"Rítmo",
                options:
                [
                  { id: 0, label: "Regular" },
                  { id: 1, label: "Irregular" },
                ],
              },

              //Inpecao cardiovascular
              inspecao:{ // 1

                type:"select",
                title:"Inspeção",
                options:
                [
                  { id: 0, label: "Ictus Cordis Visivel" },
                  { id: 1, label: "Ictus de VD" },
                  { id: 2, label: "Movimento em bascula" },
                ],
              },
              //Bulhas
              bulhas:{ // 1
                type:"select",
                title:"bulhas",
                options:
                [
                  { id: 0, label: "B1 e B2" },
                  { id: 1, label: "B3" },
                  { id: 2, label: "B4" },
                  { id: 3, label: "B3 e B4" },
                ],
              },


              auscuta: {
                type: "text",
                title:"Ascuta"
              }
              ,

              //Palpacao
              palpacao: {// 1..*

                type:"checkbox",
                title:"Palpação",
                options:
                [
                  { id: 0, label: "Ictus não palpável" },
                  { id: 1, label: "Ictus palpável" },
                  { id: 2, label: "Desviado E para Baixo" },
                  { id: 3, label: "LHC 5 EIEC" },
                ],
              },

              fc:{
                type:"text",
                title:"Frequência Cardiaca",

              },

              pressao_arterial:{
                type:"text",
                title:"Pressão Arterial"
              },
            },
          },
					bioquimico:
					{
						title:{
							type: 'label',
							value: "Exame Bioquímico"
						},

						creatina:
						{
							title:{
								type:"label",
								value: "Creatina"
							},

							basal:{
								type:"text",
								title:"Basal"
							},
							ultima:{
								type:"text",
								title:"Ultima"
							},
							delta: {
								type:"text",
								title:"Delta"
							},
							clearence_atual:{
								type:"text",
								title:"Clearence Atual"
							}

						},

						sangue:
						{
							title:{
								type:"label",
								value:"Exame de Sangue"
							},

							hemoglobina: {
								type: "text",
								title:"Hemoglobina"
							},
							linfocitos: {
								type: "text",
								title: "Linfócitos"
							},
							sodio: {
								type:"text",
								title:"Sódio"
							},
							outros: {
								type: "text",
								title: "Outros"
							}, // Plain Text
						}
					},
					complementar:
					{
						title:{
							type:"label",
							value:"Exame Complementar"
            },
            
            eletro:{ // 0..*
              
              title:{
								type:"label",
								value:"Eletrocardiograma"
							},
              
              eletro: {
                type: "checkbox",
                title:"Detalhes",
                options:
                [
                  {id: 0, label: "Bloqueio de Ramo Direito (BRD)"},
                  {id: 1, label: "Bloqueio de Ramo Esquerdo (BRE)"},
                  {id: 2, label: "Supra do Segmento ST"},
                  {id: 3, label: "Sobrecarga Atrial (SA)"},
                  {id: 4, label: "Sobrecargo de Ventrículo (SV)"},
                  {id: 5, label: "Flutter Atrial"},
                  {id: 6, label: "Fibrilação Atrial (FA)"},
                ],
              },
            },

            eco:{
              title:{
								type:"label",
								value:"Ecocardiograma"
              },
              
              //Ecocardiograma
              primeira_FE: {
                type: "text",
                title:"Primeira FE"
              }, 
              primeiro_VE_diast: {
                type: "text",
                title:"Primeiro VE Diast"
              },
              primeiro_VE_sist: {
                type: "text",
                title: "Primeiro VE"
              },

              ultima_FE: {
                type: "text",
                title:"Ultima FE"
              }, 
              ultima_VE_diast: {
                type: "text",
                title: "Ultima Ve Diast"
              },
              ultima_VE_sist: {
                type: "text",
                title: "Ultima Ve Sist"
              },

              delta_FE: {
                type: "text",
                title: "delta Fe"
              }, // diferença entre ultima_FE - primeira_FE
              delta_VE: {
                type:"text",
                title:"delta VE"
              }, // diferença entre ultima_VE_sist - primeira_FE_sist
              ps_ap: {
                type: "text",
                title: "ps_ap",
              }, 
            }
					}
				},
			}
		);
  }

  selectExamType(event) {
    let exams = Object.keys(this.state.prepare[event.target.value]);
    let exam = exams[1];

    this.setState({
      selectedExamType: event.target.value,
      selectedExam: exam
    });
  }

  selectExam(event){
    this.setState({
      selectedExam: event.target.value
    });
  }

  editExam(exam){
    console.log("ExameEditado");
    console.log(exam);

    let storeds= this.state.storedExams;
    storeds[this.state.popupExam.index]=exam;

    this.setState({
      showPopup: false,
      storedExams:storeds
    })

    console.log("xD")
    console.log(this.state.storedExams)
  }

	mountSelectOptions(selectType){
    let options = Object.keys(this.state.prepare);
    let selectOptions= [];

    for (let index = 0; index < options.length; index++) {
      selectOptions.push({
        id: index,
        value: options[index],
        label: this.state.prepare[options[index]].title.value
      });
    }
    this.SelectOptions = selectOptions;
    
    console.log("options:",options)
    console.log("selectOptions:",selectOptions)
    
    let exam = this.state.prepare[this.state.selectedExamType]

    if (exam!=null){
      options = Object.keys(exam);
      
      selectOptions = [];

      for (let index = 1; index < options.length; index++) {
        selectOptions.push({
          id: index - 1,
          value: options[index],
          label: exam[options[index]].title.value
        });
      }
      this.exams=selectOptions;
    }
    
	}

  mountInputList(){

    let exam = this.state.selectedExam;
    let examType = this.state.selectedExamType;

    console.log("exam:",exam)
    console.log("examType:",examType)

    if (exam!=null && examType!=null){

      this.inputList = this.state.prepare[examType][exam];

      
      this.inputList["submit"]={
        type:"submit"
      }
    }

  }

  storeExam(Exam){
    let store = this.state.storedExams;


    Exam.name = this.state.selectedExam;
    Exam.type = this.state.selectedExamType;

    store.push(Exam);

    this.setState({
      storedExams: store
    });
  }

  ShowPopup(index){
    let exam= this.state.storedExams[index];
    
    exam["submit"]={
      type:"submit"
    }
    this.setState({
      showPopup: true,
      popupExam: {
        exam: exam,
        index: index}
    })

  }

<<<<<<< HEAD
  removeExam(index){
    let list= this.state.storedExams;
    list.splice(index,1);
    this.setState({
      storedExams: list
    })
  }

=======
  handleSubmit(event) {
    event.preventDefault();
    this.props.saveData("exams", this.storedExams);
  }
  
>>>>>>> NewConsult-NewFormPattern
	render(){
		if(!this.state.prepare){
			return(
				<div>Loading</div>
			);
    }

    this.mountSelectOptions();
    this.mountInputList();


    return(
      <div className="InputExam">
        <h2>Exames Físicos</h2>
        <Radiogroup
          Label="Tipo de Exame"
          Options={ this.SelectOptions }
          OptionValue="value"
          KeyTag="selectExam"
          OnChange={ this.selectExamType }
          Name= "ExamsTypes"
        />

        <Select
          Label="Exames"
          Options={ this.exams }
          OptionValue="value"
          KeyTag="exams"
          OnChange={ this.selectExam }
        />

        <Form
          OnSubmit={ this.storeExam }
          InputList={ this.inputList }
          SubmitValue="Guardar Exame"
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
        />
<<<<<<< HEAD
        <StoredList title="Exames Guardados" list={this.state.storedExams} remove={this.removeExam} showPopup={this.ShowPopup}/>

        {this.state.showPopup ?
          <Popup
            title="Editar Exame"
            close={()=>{this.setState({showPopup: false})}}
            content={
              <Form OnSubmit={this.editExam}
                    InputList={this.state.popupExam.exam}
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

        <input className="Button" type="submit" value="Salvar Exames e Continuar" onMouseUp={ this.handleSubmit }/>
=======
        <form onSubmit={ this.handleSubmit} >
          <input className="Button" type="submit" value="Salvar Exames e Continuar" onMouseUp={ this.handleSubmit }/>
        </form>
>>>>>>> NewConsult-NewFormPattern
      </div>
    );
  }
}

export default PhysicalExams;

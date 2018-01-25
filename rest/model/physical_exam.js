/*
* Modelo de exame fisico
* 
* (C) João Carlos Pandolfi Santana - 24/11/2017
* joaopandolfi@gmail.com
*/
var Base = require( './base_consult.js' );

//Herança
var Exame_fisico = Object.create(Base);

Exame_fisico.types = {
	void: {id: -1, label: "Vazio"},

	geral: {
		//Tipos de edemas fisicos 
		edemas: [ // 1
			{id: 0,label: "Sem Edema"},
			{id: 1,label: "+/++++"},
			{id: 2,label: "++/++++"},
			{id: 3,label: "+++/++++"},
			{id: 4,label: "++++/++++"}
		],

		//Auscutas respiratorias
		auscultas_resp:[ // 1
			{id: 0,label: "Nenhum"},
			{id: 1,label: "MV Fisiológico"},
			{id: 2,label: "Creptações basais"},
			{id: 3,label: "Creptações difusas"}
		]
	},

	cardiovascular:{ // 1
		//Ritmo cardiovascular
		ritmo:[
			{id: 0, label: "Regular"},
			{id: 1, label: "Irregular"}
		],

		//Inpecao cardiovascular
		inspecao:[ // 1
			{id: 0, label: "Ictus Cordis Visivel"},
			{id: 1, label: "Ictus de VD"},
			{id: 2, label: "Movimento em bascula"}
		],

		//Bulhas
		bulhas:[ // 1
			{id: 0, label: "B1 e B2"},
			{id: 1, label: "B3"},
			{id: 2, label: "B4"},
			{id: 3, label: "B3 e B4"},
		],

		//Palpacao
		palpacao:[ // 1...*
			{id: 0, label: "Ictus não palpável"},
			{id: 1, label: "Ictus palpável"},
			{id: 2, label: "Desviado E para Baixo"},
			{id: 3, label: "LHC 5 EIEC"}
		]
	},

	complementar:{
		eletro:[ // 0*...
			{id: 0, label: "Bloqueio de Ramo Direito (BRD)"},
			{id: 1, label: "Bloqueio de Ramo Esquerdo (BRE)"},
			{id: 2, label: "Supra do Segmento ST"},
			{id: 3, label: "Sobrecarga Atrial (SA)"},
			{id: 3, label: "Sobrecargo de Ventrículo (SV)"},
			{id: 3, label: "Flutter Atrial"},
			{id: 3, label: "Fibrilação Atrial (FA)"}
		]
	}
}

//Dados medicos
Exame_fisico.data = {

	geral: {
		estado: "",
		edema: Exame_fisico.types.geral.edemas[0],
		auscuta_resp: Exame_fisico.types.geral.auscutas_resp[0],
		refl_heptojugular: 0, // 0 or 1
		turg_jugular: 0, //0 or 1
		ascite: 0, //0 or 1
		peso: 0.0,
		altura: 0.0,
		imc: 0.0 // peso/altura^2 
	},

	cardiovascular: {	
		ritmo: Exame_fisico.types.cardiovascular.ritmo[0],
		inspecao: Exame_fisico.types.void,	//Exame_fisico.types.cardiovascular.inspecao[0],
		bulhas: Exame_fisico.types.void,	//Exame_fisico.types.cardiovascular.bulhas[0]
		ausculta: "",
		palpacao: Exame_fisico.types.void,	//Exame_fisico.types.cardiovascular.palpacao[0]
		fc: 0,
		pressao_arterial: 0
	},

	bioquimico: {
		
		//Creatina
		creatina:{
			basal: 0.0,
			ultima: 0.0,
			delta: 0.0,
			clearence_atual: 0.0
		},

		//Sangue
		sangue:{
			hemoglobina: 0.0,
			linfocitos: 0.0,
			sodio: 0.0,
			outros: "" // Plain Text
		}
	},


	complementar:{

		//ECG
		eletro:[],

		//Ecocardiograma
		primeira_FE: "", // texto numérico
		primeiro_VE_diast: "",
		primeiro_VE_sist: "",

		ultima_FE: "", // texto numérico
		ultima_VE_diast: "",
		ultima_VE_sist: "",		

		delta_FE: "", // diferença entre ultima_FE - primeira_FE
		delta_VE: "", // diferença entre ultima_VE_sist - primeira_FE_sist
		ps_ap: "" // texto numérico
	}

}

module.exports = Exame_fisico;
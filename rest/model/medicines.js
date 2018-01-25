/*
* Modelo de medicamentos
* 
* (C) João Carlos Pandolfi Santana - 19/12/2017
* joaopandolfi@gmail.com
*/
var Base = require( './base_consult.js' );

var Medicamentos = Object.create(Base);

Medicamentos.types = {
	
	void:{
		id: -1,
		label: "Vazio",
		data: {
			//droga:drogas.void,
			date:"00/00/0000",
			hour:"00:00",
			charge: "50mg",
			gap: 12, // horas
		}
	},

	//Medicamentos ministrados no paciente
	IECA: [
			{id: 0,label: "Captopril"},
			//{id: 0,label: "Captopril", di:"6,24mg", da: "50mg", dr: "8h/8h"},   
			// Dose inicial = 6,24mg 
			// Dose alvo = 50mg 
			// Duração = 8h/8h
			{id: 1,label: "Enalapril"},
			// Dose inicial = 2,5mg 
			// Dose alvo = 10mg 
			// Duração 12/12h
			{id: 2,label: "Lisinopril"},
			{id: 3,label: "Cilazapril"},
			{id: 4,label: "Ramipril"},
			{id: 5,label: "Trandolapril"}
		],

	BRA: [
			{id: 0,label: "Losartana"}, 
			// Dose inicial = 25mg
			// Dose alvo = 50 a 150mg
			// Duração = 1x ao dia
			{id: 1,label: "Valsartana"},
			// Dose inicial = 20mg
			// Dose alvo = 160mg 
			// Duração 12 em 12 horas
			{id: 2,label: "Candersatan"}
		],
		

	beta_bloqueadores:	[
			{id: 0,label: "Carvedilol"}, 
			// Dose inicial = 3,125mg
			// Dose Alvo = 25 a 50mg
			// Duração = 12 em 12 horas
			{id: 1,label: "Metroprolol"},
			{id: 2,label: "Bisoprolol"},
			{id: 3,label: "Propanolol"}
		],
	
	bloq_canaisca:[
			{id: 0,label: "Verapamil"},
			{id: 1,label: "Diltiazem"}
		],

	diureticos:[
			{id: 0,label: "Hidroclorotiazida"},
			{id: 1,label: "Furosemida"},
			{id: 2,label: "Espirolactona"}
			// Dose inicial = 12,5mg
			// Dose Alvo = 50mg
		],

	digitalico:[
		{id: 0,label: "digoxina"}
	],

	AAS: [
		{id: 0,label: "Uso"}
	],

	estatina:[			
		{id: 0,label: "Sinvastatina"},
		{id: 1,label: "Atorvastatina"}
	],

	hidralazina: [
		{id: 0,label: "Apresolina"}
	],

	nitrato:[
		{id: 0,label: "Dinitrato de Isossorbida"}
	],

	anticoagulante: [
		{id: 0,label: "Heparina"},
		{id: 0,label: "Dabigatran"}
	],

	antiarritmico: [
		{id: 0,label: "Amiodarona"}
	],


	//Medicamentos prescritos para o paciente
	sarcubitril_valsartana:	[
			{id: 0,label: "Entresto"},
			// Dose inicial = 49/51mg 
			// Dose alvo = 97 mg/103 mg 
			// Duração = duas vezes ao dia
		]
}


Medicamentos.data= {

	IECA: [Medicamentos.types.void],
	BRA: [Medicamentos.types.void],
	AAS: [Medicamentos.types.void],
	hidralazina: [Medicamentos.types.void],
	anticoagulante: [Medicamentos.types.void],
	antiarritmico: [Medicamentos.types.void]
}

module.exports = Medicamentos;

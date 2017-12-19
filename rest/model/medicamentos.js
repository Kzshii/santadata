/*
* Modelo de medicamentos
* 
* (C) João Carlos Pandolfi Santana - 19/12/2017
* joaopandolfi@gmail.com
*/
var Base = require( './base_consult.js' );
var drogas = require( './drugs.js' );

//Herança
var Medicamentos = Object.create(Base);

//Dados medicos
Medicamentos.data = {

	//Medicamentos ministrados no paciente
	ministrados: [
		{
			droga:drogas.void,
			date:"00/00/0000",
			hour:"00:00",
			charge: "50mg",
			gap: 12 // horas
		}
	],

	//Medicamentos perscritos para o paciente
	perscritos: [
		{
			droga:drogas.void,
			date:"00/00/0000",
			hour:"00:00",
			charge: "50mg",
			total_charge: 1, //qtd de doses
			gap: 12 // horas
		}
	]
}
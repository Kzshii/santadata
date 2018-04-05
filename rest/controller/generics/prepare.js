/*
* Controlador da preparação dos formulários
* 
* (C) João Carlos Pandolfi Santana - 25/01/2018
*/

// Database manager
//var Dao_prepare = require('../../model/dao/dao_prepare.js');

// Models
var Anamnese = require("../../model/anamnese.js")
var Predictors = require("../../model/predictors.js")
var Prevention = require("../../model/prevention.js")
var Interventions = require("../../model/interventions.js")
var Medicines = require("../../model/medicines.js")
var Evidences = require("../../model/evidences.js")
var Exams = require("../../model/physical_exam.js")

//Base class
var Base = require( '../generic.js' );
var Prepare = Object.create(Base);

/*
* Funções genéricas
*/

Prepare.response = function (res,data){
	res.send(JSON.stringify(Prepare.format_response(data)));
}


Prepare.session = function(req,res){
	Prepare.get_prepare_data(req);
	type = {}

	switch(Prepare.url_data_prepare.session){
		case "anamnese":
			type = Anamnese.types
		break;

		case "evidences":
			type = Evidences.type
		break;

		case "interventions":
			type = Interventions.types
		break;

		case "medicines":
			type = Medicines.types
		break;

		case "predictors":
			type = Predictors.types
		break;

		case "prevention":
			type = Prevention.types
		break;

		case "exams":
			type = Exams.types
		break;
	}

	Prepare.response(res,type)
}

Prepare.ambulatory = function(req,res){
	Prepare.get_prepare_data(req);

}

/*
* Funcoes de preparacao de formularios
*/

Prepare.anamnese = function(req,res){
	Prepare.response(res,Anamnese.types)
}

Prepare.evidences = function(req,res){
	Prepare.response(res,Evidences.types)
}

Prepare.interventions = function(req,res){
	Prepare.response(res,Interventions.types)
}

Prepare.medicines = function(req,res){
	Prepare.response(res,Medicines.types)
}

Prepare.predictors = function(req,res){
	Prepare.response(res,Predictors.types)
}

Prepare.prevention = function(req,res){
	Prepare.response(res,Prevention.types)
}

Prepare.exams = function(req,res){
	Prepare.response(res,Exams.types)
}

module.exports = Prepare;

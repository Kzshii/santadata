/*
* Classe de controle dos patientes
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
*/

// Database manager
var Dao_patient = require('../../model/dao/dao_patient.js');

//Creating Class
var Generic = require( '../generic' );
var Patient = Object.create(Generic);

Patient.add = function(req, res){

	//Check authentication
	if(!Patient.check_requisition(req)){
		res.send(Patient.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	data = [var_req.iduser,
	var_req.nome,
	var_req.nr_prontuario,
	var_req.nr_mv,
	var_req.data_nasc,
	var_req.idade,
	var_req.etnia,
	var_req.tel1,
	var_req.tel2,
	var_req.tel_emerg,
	var_req.cel,
	var_req.endereco]

	Patient.generic_dao_request(res,data, Dao_patient.new_patient)
}


Patient.search = function(req, res){

	//Check authentication
	if(!Patient.check_requisition(req)){
		res.send(Patient.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	data = [var_req.idpatient]

	Patient.generic_dao_request(res,data, Dao_patient.search_patient)
}


Patient.all = function(req, res){

	//Check authentication
	if(!Patient.check_requisition(req)){
		res.send(Patient.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	data = []

	Patient.generic_dao_request(res,data, Dao_patient.all_patients)
}

module.exports = Patient;
/*
* Classe de controle dos pacientes
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
*/

// Database manager
var Dao_pacient = require('../../model/dao/dao_pacient.js');

//Creating Class
var Generic = require( '../generic' );
var Pacient = Object.create(Generic);

Pacient.add = function(req, res){

	//Check authentication
	if(!Pacient.check_requisition(req)){
		res.send(Pacient.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	data = [var_req.nome,
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

	Pacient.generic_dao_request(res,data, Dao_pacient.new_pacient)
}


module.exports = Pacient;
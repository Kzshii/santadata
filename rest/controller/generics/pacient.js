/*
* Classe de controle dos pacientes
* 
* (C) João Carlos Pandolfi Santana - 13/01/2018
*/

// Database manager
var Dao_pacient = require('../../model/dao/dao_paciente.js');

//Creating Class
var Generic = require( '../generic' );
var Pacient = Object.create(Generic);

Pacient.new_pacient = function(req, res){

	//Check authentication
	if(!User.check_requisition(req)){
		res.send(User.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	data = [var_req.name, var_req.email,var_req.login,var_req.pass,"-void-hash-",parseInt(var_req.type_user)]

	this.generic_dao_request(res,data, Dao_pacient.new_user)
}


module.exports = Pacient;
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
	if(!User.check_requisition(req)){
		res.send(User.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data TODO: PEGAR DADOS CORRETOS
	data = []//[var_req.name, var_req.email,var_req.login,var_req.pass,"-void-hash-",parseInt(var_req.type_user)]

	User.generic_dao_request(res,data, Dao_pacient.new_user)
}


module.exports = Pacient;
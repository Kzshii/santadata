/*
* Classe de controle das consultas
* 
* (C) João Carlos Pandolfi Santana - 20/02/2018
* joaopandolfi@gmail.com
*/

// Database manager
var Dao_consult = require('../../model/dao/dao_consult.js');
var Model_consult = require('../../model/consult.js');

//Creating Class
var Generic = require( '../generic' );
var Consult = Object.create(Generic);

Consult.add = function(req, res){
	var var_req = req.body;
	var_req = Generic.decode_data(var_req)


	//Check authentication
	if(!Generic.check_requisition(req)){
		res.send(Generic.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	data = Model_consult.mapData(var_req)

	Consult.generic_dao_request(res,data, Dao_consult.new)
}

Consult.get = function(req,res){
	var var_req = req.body;
	var_req = Generic.decode_data(var_req)


	//Check authentication
	if(!Generic.check_requisition(req)){
		res.send(Generic.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	data = {_cid:Generic.url_data.q_id}

	Consult.generic_dao_request(res,data, Dao_consult.get)
}

Consult.all = function(req,res){
	var var_req = req.body;
	var_req = Generic.decode_data(var_req)


	//Check authentication
	if(!Generic.check_requisition(req)){
		res.send(Generic.error_message(500,"Bad request"));
		return
	}

	//Getting and preparing data
	//data = {_cid:Generic.url_data.q_id}

	Consult.generic_dao_request(res,data, Dao_consult.all)
}


module.exports = Consult;
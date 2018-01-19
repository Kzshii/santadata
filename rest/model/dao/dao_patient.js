/*
* Dao paciente
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
* joaopandolfi@gmail.com
*/


var patient = require('../patient.js')

//Creating Class
var Dao = require( './dao.js' );
var Dao_patient = Object.create(Dao);

Dao_patient.callback_new = function(param,data){
	var callback = param.callback
	var par = param.param

	//Checking error
	if(ret.success == 0){
		callback(param,ret)
		return
	}

	//Processing data result
	result = ret.data[0]
	keys = Object.keys(result)
	result = keys.map(function(k){return result[k]})
	
	//Setting return data
	ret.data = {idpatient:result[0]}
	if(result.length == 0)
		ret.success = 0

	//Returning data
	console.log("# Inserted patient: "+ret.data.idpatient)		
	callback(par,ret)	
	
}

Dao_patient.callback_get = function(param,ret){
	var callback = param.callback
	var par = param.param

	//Checking error
	if(ret.success == 0){
		callback(param,ret)
		return
	}

	//Processing data result
	//result = ret.data[0]
	//keys = Object.keys(result)
	//result = keys.map(function(k){return result[k]})
	
	//Setting return data
	ret.data = ret.data[0]
	//if(ret.data.length == 0)
	//	ret.success = 0

	//Returning data
	//console.log("# Inserted patient: "+ret.data.idpatient)		
	callback(par,ret)	
}

Dao_patient.callback_search = function(param,ret){
	var callback = param.callback
	var par = param.param

	//Checking error
	if(ret.success == 0){
		callback(param,ret)
		return
	}

	//if(ret.data.length == 0)
	//	ret.success = 0
	
	callback(par,ret)	
}

Dao_patient.callback_all = Dao_patient.callback_search


Dao_patient.new = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	var query = "SELECT new_patient(?,?,?,?,?,?,?,?,?,?,?,?,?);"
	Dao_patient.mysql_query(query, data, Dao_patient.callback_new, par);
}


Dao_patient.search = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	//TODO: JUST FOR TEST 
	callback(param,{success:1,data:patient})

	//var query = "SELECT new_patient(?,?,?,?,?,?);"
	//Dao_patient.mysql_query(query, data, Dao_patient.callback_search_patient, par);
}


Dao_patient.get = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	var query = "SELECT * FROM full_patient WHERE idpatient = ?;"
	Dao_patient.mysql_query(query, data, Dao_patient.callback_search, par);
}


Dao_patient.all = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	var query = "SELECT * FROM full_patient ;"
	Dao_patient.mysql_query(query, data, Dao_patient.callback_all, par);
}

module.exports = Dao_patient
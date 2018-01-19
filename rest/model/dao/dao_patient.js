/*
* Dao patiente
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
* joaopandolfi@gmail.com
*/


var patient = require('../patient.js')

//Creating Class
var Dao = require( './dao.js' );
var Dao_patient = Object.create(Dao);

Dao_patient.callback_new_patient = function(param,data){
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
	
	/*
	//Setting return data
	ret.data = {iduser:result[0]}
	if(result.length == 0)
		ret.success = 0

	//Returning data
	console.log("# Inserted user: "+ret.data.iduser)		
	callback(par,ret)	
	*/
}

Dao_patient.new_patient = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	//TODO: JUST FOR TEST 
	callback(param,{success:1,data:{idpatient:0}})

	//var query = "SELECT new_patient(?,?,?,?,?,?);"
	//Dao_patient.mysql_query(query, data, Dao_patient.callback_new_patient, par);
}


Dao_patient.search_patient = function(param, data, callback){
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


Dao_patient.get_patient = function(param, data, callback){
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


Dao_patient.all_patients = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	//TODO: JUST FOR TEST 
	callback(param,{success:1,data:[patient,patient]})

	//var query = "SELECT new_patient(?,?,?,?,?,?);"
	//Dao_patient.mysql_query(query, data, Dao_patient.callback_all_patients, par);
}



module.exports = Dao_patient
/*
* Dao Paciente
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
* joaopandolfi@gmail.com
*/


var Pacient = require('../paciente.js')

//Creating Class
var Dao = require( './dao.js' );
var Dao_pacient = Object.create(Dao);

Dao_pacient.callback_new_pacient = function(param,data){
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

Dao_pacient.new_pacient = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	//TODO: JUST FOR TEST 
	callback(param,{success:1,data:{idpacient:0}})

	//var query = "SELECT new_pacient(?,?,?,?,?,?);"
	//Dao_pacient.mysql_query(query, data, Dao_pacient.callback_new_pacient, par);
}


Dao_pacient.search_pacient = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	//TODO: JUST FOR TEST 
	callback(param,{success:1,data:Pacient})

	//var query = "SELECT new_pacient(?,?,?,?,?,?);"
	//Dao_pacient.mysql_query(query, data, Dao_pacient.callback_search_pacient, par);
}


Dao_pacient.all_pacients = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	//TODO: JUST FOR TEST 
	callback(param,{success:1,data:[Pacient]})

	//var query = "SELECT new_pacient(?,?,?,?,?,?);"
	//Dao_pacient.mysql_query(query, data, Dao_pacient.callback_all_pacients, par);
}



module.exports = Dao_pacient
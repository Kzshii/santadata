/*
* Dao Consultas
* 
* (C) João Carlos Pandolfi Santana - 20/02/2018
* joaopandolfi@gmail.com
*/

var consult = require('../consult.js')

//Creating Class
var Dao = require( './dao.js' );
var Dao_consult = Object.create(Dao);

Dao_consult.db.collection = "consult"

Dao_consult.callback_new = function(param,ret){
	var callback = param.callback
	var par = param.param

	//Checking error
	if(ret.success == 0){
		callback(param,ret)
		return
	}

/*
	//Processing data result
	result = ret.data[0]
	keys = Object.keys(result)
	result = keys.map(function(k){return result[k]})
	
	//Setting return data
	ret.data = {idpatient:result[0]}
	if(result.length == 0)
		ret.success = 0
*/
	//Returning data
	console.log("# Inserted Consult: "+ret)		
	callback(par,ret)	
	
}

// Mongo DAO
Dao_consult.new = function(param, data, callback){
	
	var par = {
		param: param,
		callback: callback
	}
	
	Dao_consult.mongo_insert(Dao_consult.db.collection, data, Dao_consult.callback_new, par);
}

module.exports = Dao_consult;
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


Dao_consult.get = function(param, data, callback){
	var par = {
		param: param,
		callback: callback
	}
	
	Dao_consult.db.mongo.search.one("consult",data,function(result){
		console.log("# Get Consult: " + param)
		console.log(result)
		callback(param,result)
	})
}

Dao_consult.all = function(param, data, callback){
	var par = {
		param: param,
		callback: callback
	}

	Dao_consult.db.mongo.search.multiple("consult",data,function(result){
		console.log("# All Consult")
		callback(param,result)
	})
}


module.exports = Dao_consult;
/*
* Dao Usuario
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
* joaopandolfi@gmail.com
*/

//Creating Class
var Dao = require( './dao.js' );
var Dao_user = Object.create(Dao);

Dao_user.callback_new_user = function(param,ret){
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
	ret.data = {iduser:result[0]}
	if(result.length == 0)
		ret.success = 0

	//Returning data
	console.log("# Inserted user: "+ret.data.iduser)
	//res.send(JSON.stringify(response));		
	callback(par,ret)	
}

Dao_user.new_user = function(param, data, callback){
	var par = {
		param: param,
		callback: callback
	}

	var query = "SELECT new_user(?,?,?,?,?,?);"
	this.mysql_query(query, data, Dao_user.callback_new_user, par);
}


module.exports = Dao_user
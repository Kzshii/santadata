/*
* Dao Usuario
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
* joaopandolfi@gmail.com
*/

//Creating Class
var Dao = require( './dao.js' );
var Dao_user = Object.create(Dao);

Dao_user.new_user = function(data, callback, param){

		var query = "SELECT new_user(?,?,?,?,?,?);"
		var ret = Dao_user.mysql_query(query, data, callback, param);

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
		callback(param,ret)
}

module.exports = Dao_user
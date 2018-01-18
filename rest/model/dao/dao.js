/*
* Dao Classe base
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
* joaopandolfi@gmail.com
*/

//Config
var config = require('../../constants/config.js');

//Databases
var Mysql = require('../../libs/persistence/mysql.js');
var Mongodb = require('../../libs/persistence/mongodb.js');

var Dao = {

	db:{
		mysql: Mysql,
		mongo: Mongodb
	},

	format_response: function(data){
		return {
			success: 1,
			data: data
		}
	},

	format_error: function(error_code, message){
		return {
			success: 0,
			error: error_code,
			message: message
		}
	},

	mysql_query: function(query, data, callback, param){
		try{
			var sql = Mysql.format(query, data);

			Mysql.query(sql, function (err, results) {
			if(err) { 
				result = Dao.format_error(500,"Bad request")
				callback(param, result)
				return; 
			}
				callback(param,Dao.format_response(results))
			});
		}
		//Error
		catch(e){
			result = Dao.format_error(500,"Database error")
			console.log(result)
			callback(param, result)
		}
	}
}

module.exports = Dao
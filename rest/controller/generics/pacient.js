/*
* Classe de controle dos pacientes
* 
* (C) João Carlos Pandolfi Santana - 13/01/2018
*/

//Config
var config = require('../../constants/config.js');

//Databases
var Mysql = require('../../libs/persistence/mysql.js');
var Mongodb = require('../../libs/persistence/mongodb.js');

//Creating Class
var Generic = require( '../generic' );
var Pacient = Object.create(Generic);

Pacient.new_pacient = function(req, res){

	//Check authentication
	if(!User.check_requisition(req)){
		res.send(User.error_message(500,"Bad request"));
		return
	}

	//TODO: IMPLEMENTAR

	var sql = "SELECT new_pacient(?,?,?,?,?,?);";
	/*
	sql = Mysql.format(sql, [req.query.name, 
			req.query.email,
			req.query.login,
			req.query.pass,
			"-void-hash-",
			parseInt(req.query.type_user)]);

	Mysql.query(sql, function (err, results) {
		if(err) { res.send(500,"Database error"); return; }
		result = results[0]
		keys = Object.keys(result)
		result = keys.map(function(k){return result[k]})
		var response = {
			success: 1,
			data:{iduser:result[0]}
		}
		
		if(result.length == 0)
			response.success = 0

		console.log("# Inserted user: "+response.data.iduser)
		res.send(JSON.stringify(response));		
	});
	*/
}


module.exports = Pacient;
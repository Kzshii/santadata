/*
* Controlador de usuários
* 
* (C) João Carlos Pandolfi Santana - 16/01/2018
*/

//Config
var config = require('../../constants/config.js');

//Databases
var Mysql = require('../../libs/persistence/mysql.js');
var Mongodb = require('../../libs/persistence/mongodb.js');

var Dao_user = require('../../model/dao/dao_user.js');


//Base class
var Base = require( '../generic.js' );
var User = Object.create(Base);


User.new_user = function(req,res){

	var var_req = req.body;
	var_req = User.decode_data(var_req)

	//Check authentication
	if(!User.check_requisition(req) || Object.keys(var_req).length == 0){
		res.status(404).send(User.error_message("Invalid request"));
		return
	}

	data = [var_req.name, var_req.email,var_req.login,var_req.pass,"-void-hash-",parseInt(var_req.type_user)]

	Dao_user.new_user(data, function(result,res){
		if(result.success == 0){
			res.status(result.error).send(User.error_message(result.message));
		}
		else
			res.send(JSON.stringify(result))
	})
}


/*
* Registra novo usuario
* @receives name,email,login,pass,hash,type_user
* @return id_user {Id do usuario}
*/
User.new_user2 = function(req, res){

	var var_req = req.body;
	var_req = User.decode_data(var_req)

	//Check authentication
	if(!User.check_requisition(req) || Object.keys(var_req).length == 0){
		res.status(404).send(User.error_message("Invalid request"));
		return
	}

	try{

		var sql = "SELECT new_user(?,?,?,?,?,?);";
		sql = Mysql.format(sql, [var_req.name, 
				var_req.email,
				var_req.login,
				var_req.pass,
				"-void-hash-",
				parseInt(var_req.type_user)]);

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
	}
	catch(e){
		res.status(500).send(User.error_message("Bad request"));
	}
}


module.exports = User;

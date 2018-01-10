/*
* Classe base de controller Octopus Med
* 
* (C) João Carlos Pandolfi Santana - 15/10/2017
*/

var Autenticator = require( './autenticator.js' );

var test = function(req,res){
	res.send({test:"ok"});
}

var Controller = {
	query_format: {
		error: 0, 
		message: "Sucess", 
		results:{}
	},
	
	add: test,

	search: test,

	update: test,

	check_hash_id: function(user_id, hash){
		return autenticator.check_hash_id(user_id,hash);
	},

	error_message: function(code, message){
		return {success: 0, error:{code:code,message:message}};
	},

	test: test 
}


module.exports = Controller;
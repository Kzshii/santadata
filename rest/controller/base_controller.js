/*
* Classe base de controller Octopus Med
* 
* (C) João Carlos Pandolfi Santana - 15/10/2017
*/

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

	search: test

	update: test,

	//TODO: Implementar
	check_hash_id: function(user_id, hash){

		return true;
	},

	error_message: function(code, message){
		return {success: 0, error:{code:code,message:message}};
	},

	test: test 
}


module.exports = Controller;
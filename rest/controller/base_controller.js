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
	
	url_data:{
		user_id: null,
		hash: null,
		q_id: null
	},

	add: test,

	search: test,

	update: test,

	get_url_data: function(){
		var url_components = req.path.split('/');
		var len = url_components.length
		this.url_data.hash 	= url_components[len];
		this.url_data.user_id = url_components[len-1];
		this.url_data.q_id = url_components[len-2];
	},

	check_hash_id: function(user_id, hash){
		return autenticator.check_hash_id(user_id,hash);
	},

	check_requisition: function(){
		this.get_url_data()
		return this.check_hash_id(this.url_data.user_id,this.url_data.hash)
	},

	error_message: function(code, message){
		return {success: 0, error:{code:code,message:message}};
	},

	test: test 
}


module.exports = Controller;
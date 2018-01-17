/*
* Classe base de rotas genericas Octopus Med
* 
* (C) João Carlos Pandolfi Santana - 19/12/2017
*/
var Base = require( './base_controller.js' );

var Generic = Object.create(Base);

Generic.decode_data = function(req){
	try{
		req = atob(req.data)
		req = JSON.parse(req)
	}
	catch(e){
		return {}
	}

	return req
}

module.exports = Generic;
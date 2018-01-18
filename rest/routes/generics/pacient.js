/*
* Indexa as rotas de controle dos pacientes
* (C) João Carlos Pandolfi Santana - 10/1/2018
*/


module.exports = function (app) {

	var Base_generic = require( './base_generic.js' );
	var c_pacient = require( '../../controller/generics/pacient' );

	//Herança
	var Pacient = Object.create(Base_generic);
	

	Pacient.init(app);

	Pacient.add_route("/gen/new/pacient/", c_pacient.add, Pacient.sufix.end_route, Pacient.type.post)
	Pacient.add_route("/gen/search/pacient/", c_pacient.search, Pacient.sufix.id_route, Pacient.type.all)
	Pacient.add_route("/gen/update/pacient/", c_pacient.update, Pacient.sufix.id_route, Pacient.type.all)
	
	return Pacient.prepare();
};
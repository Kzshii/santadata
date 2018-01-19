/*
* Indexa as rotas de controle dos pacientes
* (C) João Carlos Pandolfi Santana - 10/1/2018
*/


module.exports = function (app) {

	var Base_generic = require( './base_generic.js' );
	var c_patient = require( '../../controller/generics/patient' );

	//Herança
	var Pacient = Object.create(Base_generic);
	

	Patient.init(app);

	Patient.add_route("/gen/new/pacient/", c_patient.add, Patient.sufix.end_route, Patient.type.post)
	Patient.add_route("/gen/search/pacient/", c_patient.search, Patient.sufix.id_route, Patient.type.post)
	Patient.add_route("/gen/all/pacient/", c_patient.all, Patient.sufix.id_route, Patient.type.post)
	Patient.add_route("/gen/update/pacient/", c_patient.update, Patient.sufix.id_route, Patient.type.all)
	
	return Patient.prepare();
};
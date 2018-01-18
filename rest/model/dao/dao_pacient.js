/*
* Dao Paciente
* 
* (C) João Carlos Pandolfi Santana - 18/01/2018
* joaopandolfi@gmail.com
*/


var Pacient = require('../paciente.js')

//Creating Class
var Dao = require( './dao.js' );
var Dao_pacient = Object.create(Dao);

Dao_pacient.callback_new_pacient = function(param,data){

}

Dao_pacient.new_pacient = function(param, data, callback){
	//Defining parameter to callback in same class
	var par = {
		param: param,
		callback: callback
	}

	var query = "SELECT new_pacient(?,?,?,?,?,?);"
	this.mysql_query(query, data, Dao_pacient.callback_new_pacient, par);
}

module.exports = Dao_pacient
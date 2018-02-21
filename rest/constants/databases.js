/*
* Arquivo de configuração das databases
* 
* (C) João Carlos Pandolfi Santana - 25/01/2018
*/


var Config_databases = {
	Mysql:{
		production:"",
		test: "",
		user: "",
		pass: ""
	},
	Mongo: {
		collections: [
		"user",
		"medicines",
		"consult",
		"test"
		],
		counters: [
		"idconsult",
		"idmedicine",
		"iduser",
		"test"
		]
	}
}


module.exports = Config_databases
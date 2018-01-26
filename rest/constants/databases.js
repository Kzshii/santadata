/*
* Arquivo de configuração das databases
* 
* (C) João Carlos Pandolfi Santana - 25/01/2018
*/


var Config_databases = {
	Mongo: {
		collections: [
		"user",
		"medicines",
		"consult"
		],
		counters: [
		"idconsult",
		"idmedicine"
		]
	}
}


module.exports = Config_databases
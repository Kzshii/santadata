/*
* Controlador de configurações
* 
* (C) João Carlos Pandolfi Santana - 20/02/2018
*/

// =============== LIBS ================

//Config
var config = require('../constants/config.js');
var config_db = require('../constants/databases.js');

//Databases
var Mysql = require('../libs/persistence/mysql.js');
var Mongodb = require('../libs/persistence/mongodb.js');

//Helpers
var md5 = require('../libs/helper/md5.js');
global.Buffer = global.Buffer || require('buffer').Buffer;

var Config = {
	/*
	* DEACTIVATE THIS FUNCTION
	*/
	config_mongo: function(req,res){
		try{
			console.log("Creating MONGO database")
			Mongodb.createDb();

			console.log("Creating Collections")
			config_db.Mongo.collections.map(function(collection){
				Mongodb.createCollection(collection);
			})

			//console.log("Finished")
			//res.send(JSON.stringify(config_db.Mongo));
			
			/*Mongodb.search.one("user",{},function(result){
				console.log(result)
				res.send(JSON.stringify(result));
			});*/
		}
		catch(e){
			console.log("Error")
			console.log(e)
			res.send("ERRO NO MONGO");
		}
	},


	initialize_mongo:function(req,res){
		try{
			console.log("Initializing Counters")
			Mongodb.initialize.counters(config_db.Mongo.counters);
		}
		catch(e){
			console.log("Error")
			console.log(e)
			res.send("ERRO NO MONGO");
		}
	},
	/*
	* JUST FOR TEST
	*/
	test_route: function(req,res){
		var user = req.query.user;
		try{
			console.log("Creating MONGO database")
			Mongodb.createDb();

			console.log("Creating user Collection")
			Mongodb.createCollection("user");

			console.log("Searching user on Collection")
			Mongodb.search.one("user",{},function(result){
				console.log(result)
				res.send(JSON.stringify(result));
			});
		}
		catch(e){
			console.log("Error")
			res.send("ERRO NO MONGO");
		}
	},
		/*
	* JUST FOR TEST
	*/
	test_counters: function(req,res){
		var user = req.query.user;
		try{
			resp = ""
			collection = "test"
			dt = [{usuario:"joaozinho", cidade:"Narnia"},{usuario:"mariazinha", cidade:"Paraguai"}]

			dt.map(function(data){
				Mongodb.insert.next(collection,function(err, id){
					data._idConsult = id;
					console.log("Test")
					console.log(data)
					Mongodb.insert.obj(collection,data,function(result){
						Mongodb.search.one(collection,{},function(result){
						console.log(result)
						resp += JSON.stringify(result)			
						});
					});
				});
			})
			
			res.send(resp);
		}
		catch(e){
			console.log("Error")
			res.send("ERRO NO MONGO");
		}
	}
}


module.exports = Config;
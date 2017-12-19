module.exports = function (app) {

	var rx = require( '../../libs/regex_patterns' );
	var drugs = require( '../../controller/generics/drugs' );
	
	//==> Routes
	var end_route = "{id_user}/{hash}/";
	var id_route = "{id}/";
	
	end_route = end_route.replace("{id_user}",rx.base_64).replace("{hash}",rx.base_64);
	id_route = id_route.replace("{id}",rx.id) + end_route

	//New drug
	app.route("/gen/new/drug/"+end_route).all(drugs.add)//post();

	//Search
	app.route("/gen/search/drug/"+id_route).all(drugs.search);

	//Update
	app.route("/gen/update/drug/"+id_route).all(drugs.update);	

	return app;
};
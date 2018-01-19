/*
* Indexa as rotas genericas
* (C) João Carlos Pandolfi Santana - 15/10/2017
*/

module.exports = function (app) {

	app = require('../generics/drugs')(app);
	app = require('../generics/patient')(app);
	app = require('../generics/user')(app);

	return app;
};
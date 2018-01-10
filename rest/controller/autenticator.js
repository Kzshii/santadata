/*
* Controlador de autenticação
* 
* (C) João Carlos Pandolfi Santana - 10/01/2018
*/

var Autenticator = {


	//TODO: implementar
	/*
	* Verifica se a hash informada faz sentido com o ID
	* @param user_id {Id do usuario}
	* @param hash {Hash recebida para conferencia}
	* @return bool {Valida ou nao}
	*/
	check_hash_id: function(user_id, hash){
		return true
	},

	//TODO: Implementar
	/*
	* Gera hash para o usuario
	* @param user_id {Id do usuario}
	* @return hash (String) {Hash gerada para o usuario}
	*/
	generate_hash_id: function(user_id){
		return user_id+"1234";
	},

	//TODO: Implementar
	/*
	* Efetua login do usuario e retorna os dados
	* @param user {login do usuario}
	* @param pass {Senha do usuario}
	* @return user (Class) {Dados do usuario}
	*/
	login: function(user,pass){
		var user =  {
			user_id:0,
			type_user: 0,
			hash: Autenticator.generate_hash_id(0),
			name: "",
			picture: ""
		}

		return user;
	}

}


Module.exports = Autenticator;
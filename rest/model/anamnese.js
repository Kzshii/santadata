/*
* Modelo de anamnese
* 
* (C) João Carlos Pandolfi Santana - 25/01/2018
* joaopandolfi@gmail.com
*/
var Base = require( './base_consult.js' );

//Herança
var Anamnese = Object.create(Base);

Anamnese.types = {
	void: {id: -1, label: "Vazio"},

	// Queixa principal
	qp_type: // 1
	[
		{id: 0, label: "Dor torácica"},
		{id: 1, label: "Dispneia"},
		{id: 2, label: "Síncope"},
		{id: 3, label: "Palpitações"}
	],

	// História patológica
	hist_pat: // 0..*
	[
		{id: 0,label: "Falta de aderência ao tratamento"},
		{id: 1,label: "Maior intensidade dos sintomas"},
		{id: 2,label: "Parada cardio-respiratória revertida"},
		{id: 3,label: "Redução de função cognitiva"},
		{id: 4,label: "Caquexia"},
		{id: 5,label: "Anorexia"},
		{id: 6,label: "Síncope"},
		{id: 7,label: "Apnéia do sono*"},
		{id: 8,label: "Doença pulmonar associada"},
		{id: 9,label: "Depressão"}
	],

	// Historia Fisiológica
	hist_fis: // 1
	[
		{id: 0,label: "Oligúria"},
		{id: 1,label: "Anúria"},
		{id: 2,label: "Poliúria"},
		{id: 3,label: "Polaciúria"},
		{id: 4,label: "Nictúria"},
		{id: 5,label: "Urgência"},
		{id: 6,label: "Retenção Urinária"},
		{id: 7,label: "Incontinência Urinária"}
	],

	// Historia familiar
	hist_fam: // 0..*
	[
		{id: 0,label: "Enxaqueca"},
		{id: 1,label: "Diabetes"},
		{id: 2,label: "Hipertensão Arterial Sistemica (HAS)"},
		{id: 3,label: "Tuberculose"},
		{id: 4,label: "Cancer"},
		{id: 5,label: "Doenca Arterial Coronariana (DAC)"},
		{id: 6,label: "Acidente Vascular Cerebral (AVC)"},
		{id: 7,label: "Dislipidemias"},
		{id: 8,label: "Varizes"}
	],
	
	// História psico-social
	san_basico: // 1
	[
		{id: 0,label: "Sim"},
		{id: 1,label: "Não"}
	],			

	socio_econ: // 1
	[
		{id: 0,label: "Baixa Renda"},
		{id: 1,label: "Moderada"},
		{id: 2,label: "Renda Alta"}
	],

	cultural: // 1
	[
		{id: 0,label: "Evangélica"},
		{id: 1,label: "Católica"},
		{id: 2,label: "Espírita"},
		{id: 3,label: "Testemunha de Jeová"},
		{id: 4,label: "Ateu"},
		{id: 5,label: "Outra"}
	],

	escolar: // 1
	[
		{id: 0,label: "Ensino Fundamental"},
		{id: 1,label: "Ensino Médio"},
		{id: 2,label: "Ensino Superior"}
	],

	relacao_fam: // 1
	[
		{id: 0,label: "Boa"},
		{id: 1,label: "Mediana"},
		{id: 2,label: "Ruim"}
	],

	// Estilo de vida
	alimentacao: // 0..*
	[
		{id: 0,label: "Alimentação quantitativa e qualitativamente adequada"},
		{id: 1,label: "Consumo de calorias acima das necessidades"},
		{id: 2,label: "Alimentação com alto teor de gordura"},
		{id: 3,label: "Baixa ingestão de líquidos"},
		{id: 4,label: "Reduzida ingesta de fibras"},
		{id: 5,label: "Reduzida ingesta de verduras e fruta"},
		{id: 6,label: "Reduzida ingesta de carboidratos	"},
		{id: 7,label: "Reduzida ingesta de proteínas "},
		{id: 8,label: "Reduzido consumo de gordura"},
		{id: 9,label: "Alimentação láctea exclusiva"}
	],

	ativ_fisica: // 1
	[
		{id: 0,label: "Pessoas sedentárias"},
		{id: 1,label: "Pessoas que exercem atividades físicas moderadas"},
		{id: 2,label: "Pessoas que exercem atividades físicas intensas e constantes"},
		{id: 3,label: "Pessoas que exercem atividades físicas ocasionais"}
	],

	// Fumo e sua caracterizacao
	tabagismo: // 1
	[
		{id: 0,label: "Sim"},
		{id: 1,label: "Nao"},
	],

	tabag_tipo: // 0..*
	[
		{id: 0,label: "Cigarro"},
		{id: 1,label: "Cachimbo"},
		{id: 2,label: "Charuto"},
		{id: 3,label: "Cigarro de palha"}
	],

	// Alcool e sua caracterizacao 
	etilismo: // 1
	[
		{id: 0,label: "Sim"},
		{id: 1,label: "Nao"}
	],

	etil_tipo: // 0..*
	[
		{id: 0,label: "Cerveja"},
		{id: 1,label: "Vinho"},
		{id: 2,label: "Licor"},
		{id: 3,label: "Vodka"},
		{id: 4,label: "Uisque"},
		{id: 5,label: "Cachaca"},
		{id: 6,label: "Gin"}
	],

	// Uso de drogas
	uso_drogas: // 1
	[
		{id: 0,label: "Sim"},
		{id: 1,label: "Nao"}
	],

	drogas_tipo: // 0..*
	[
		{id: 0,label: "Cigarro"},
		{id: 1,label: "Cachimbo"},
		{id: 2,label: "Charuto"},
		{id: 3,label: "Cigarro de palha"}
	]

}

Anamnese.data = {

	// Queixa principal
	qp_type: Anamnese.types.void,

	// História da Doença Atual
	hda: "", 

	// História patológica
	hist_pat:[],

	// Historia Fisiológica
	hist_fis: Anamnese.types.void,

	// Historia familiar
	hist_fam: [],

	// História psico-social
	san_basico: Anamnese.types.void,
	socio_econ: Anamnese.types.void,

	cultural: Anamnese.types.void,

	escolar: Anamnese.types.void,

	relacao_fam: Anamnese.types.void,

	// Estilo de vida
	alimentacao: [],

	ativ_fisica: Anamnese.types.void,

	// Fumo e sua caracterizacao
	tabagismo: Anamnese.types.void,

	tabag_tipo: [],

	tabag_quant: "", // Numero cigarros por dia 
	tabag_freq: "", // Vezes na semana, mes ou ano
	tabag_date: "", // Data que comecou fumar
	tabag_tempo: "", // Tempo que fuma
					
	// Alcool e sua caracterizacao 
	etilismo: Anamnese.types.void,

	etil_tipo: [],

	etil_quant: "", // Litros por dia 
	etil_freq: "", // Vezes na semana, mes ou ano
	etil_date: "", // Data que comecou beber
	etil_tempo: "", // Tempo que bebe


	// Uso de drogas
	uso_drogas: Anamnese.types.void,
	drogas_tipo: []

}

module.exports = Anamnese;
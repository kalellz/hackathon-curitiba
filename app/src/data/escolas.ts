import { Escola } from "./escola";

export const escolas: Escola[] = [
  {
    nome_escola: "Stefan Zweig",
    numero_alunos: 351,
    codigo_cie: "1740",
    endereco_completo:
      "Rua Genaro Arila Arensanz, 225, Vila Ivone, Sao Paulo - SP, 03275-090",
    gestores: [
      { funcao: "Diretor(a)", nome: "Geysa de Oliveira Barros" },
      { funcao: "Vice-Diretor(a)", nome: "Thais Priscila Biassi Caiado" },
      { funcao: "Coordenador(a)", nome: "Andrea Ferreira Tumenas" },
      { funcao: "Coordenador(a)", nome: "Gisele Emilze Piassi Castro" },
      { funcao: "Coordenador(a)", nome: "Manoel Franca do Nascimento Junior" },
      { funcao: "Coordenador(a)", nome: "Marcellus Barbosa Robles" },
    ],
    consumo_medio_kwh_mes: 7020,
    consumo_medio_kwh_ano: 84240,
    custo_medio_reais_mes: 4710.42,
    custo_medio_reais_ano: 56525.04,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.577645618130912,
      longitude: -46.55428834883495,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 189000,
      economia_anual_reais: 49742.04,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 36,
      descricao: {
        topico_1:
          "Investimento estimado em torno de R$ 189 mil para um sistema fotovoltaico de aproximadamente 70 kWp, dimensionado para a demanda anual de 84 MWh.",
        topico_2:
          "A geracao solar pode reduzir cerca de 88% da conta atual, economizando por volta de R$ 49,7 mil ao ano e garantindo retorno completo em 3,8 anos.",
        topico_3:
          "A producao limpa evita a emissao de cerca de 36 toneladas de CO2 anualmente, equivalente ao plantio de mais de 250 arvores adultas.",
      },
    },
  },
  {
    nome_escola: "Ascanio de Azevedo Castilho Prof",
    numero_alunos: 576,
    codigo_cie: "3098",
    endereco_completo:
      "Avenida Lider, 2168, Cidade Lider, Sao Paulo - SP, 08280-005",
    gestores: [
      { funcao: "Diretor(a)", nome: "Marcia Rosa Ribeiro" },
      { funcao: "Diretor(a)", nome: "Maria do Carmo Fornelli Capelao Augusto" },
      { funcao: "Vice-Diretor(a)", nome: "Rafaela Aline dos Santos Ozuna" },
      { funcao: "Coordenador(a)", nome: "Simone Aparecida de Oliveira Santos" },
    ],
    consumo_medio_kwh_mes: 9216,
    consumo_medio_kwh_ano: 110592,
    custo_medio_reais_mes: 6185.94,
    custo_medio_reais_ano: 74231.28,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.557686436090798,
      longitude: -46.474043303543404,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 249000,
      economia_anual_reais: 65323.53,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 47,
      descricao: {
        topico_1:
          "Projeto avaliado em aproximadamente R$ 249 mil com sistema fotovoltaico de 90 kWp, adequado para gerar cerca de 111 MWh por ano.",
        topico_2:
          "A economia potencial ultrapassa R$ 65 mil anuais, com reducao de ate 88% na fatura de energia e payback em torno de 3,8 anos.",
        topico_3:
          "A implantacao evita aproximadamente 47 toneladas de CO2 por ano, comparavel ao plantio de mais de 330 arvores adultas.",
      },
    },
  },
  {
    nome_escola: "Agostinho Grigoleto",
    numero_alunos: 268,
    codigo_cie: "30107",
    endereco_completo:
      "Rua Leopoldo Cubas, 222, Centro, Brejo Alegre - SP, 16265-000",
    gestores: [
      { funcao: "Diretor(a)", nome: "Marta Suart" },
      { funcao: "Vice-Diretor(a)", nome: "Ariana Aparecida Goncalves de Oliveira" },
      { funcao: "Vice-Diretor(a)", nome: "Wanderlei Bueno" },
      {
        funcao: "Coordenador(a)",
        nome: "Elaine Cavalheiro Viana Goncalves",
      },
      { funcao: "Coordenador(a)", nome: "Roger Fernando Vicente" },
    ],
    consumo_medio_kwh_mes: 5360,
    consumo_medio_kwh_ano: 64320,
    custo_medio_reais_mes: 3591.76,
    custo_medio_reais_ano: 43099.12,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -21.16708528608436,
      longitude: -50.184590432445795,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 145000,
      economia_anual_reais: 37927.23,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 28,
      descricao: {
        topico_1:
          "Investimento previsto de R$ 145 mil para um sistema aproximado de 53 kWp, capaz de gerar 64 MWh anuais e suprir a carga atual.",
        topico_2:
          "A economia anual estimada gira em torno de R$ 38 mil, com reducao de 88% na conta e retorno financeiro projetado em 3,8 anos.",
        topico_3:
          "Com a geracao solar, a escola deixa de emitir cerca de 28 toneladas de CO2 por ano, similar ao plantio de mais de 200 arvores.",
      },
    },
  },
  {
    nome_escola: "CEEJA de Mogi das Cruzes",
    numero_alunos: 795,
    codigo_cie: "498026",
    endereco_completo:
      "Avenida Dom Antonio Candido de Alvarenga, 511, Centro, Mogi das Cruzes - SP, 08780-070",
    gestores: [
      { funcao: "Diretor(a)", nome: "Monica Salti" },
      { funcao: "Vice-Diretor(a)", nome: "Camila Lemes de Aguiar" },
      {
        funcao: "Coordenador(a)",
        nome: "Francisca Mislene de Almeida Franco",
      },
    ],
    consumo_medio_kwh_mes: 11130,
    consumo_medio_kwh_ano: 133560,
    custo_medio_reais_mes: 7478.23,
    custo_medio_reais_ano: 89738.76,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.53144776596229,
      longitude: -46.213399144030134,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 300000,
      economia_anual_reais: 78970.11,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 57,
      descricao: {
        topico_1:
          "Implantacao orcada em cerca de R$ 300 mil para um sistema de 110 kWp, cobrindo a producao de 134 MWh anuais.",
        topico_2:
          "Apos a instalacao, a escola pode poupar perto de R$ 79 mil por ano, reduzindo em 88% os gastos e recuperando o investimento em 3,8 anos.",
        topico_3:
          "A energia renovavel evita aproximadamente 57 toneladas de CO2 por ano, equivalente a plantar mais de 400 arvores maduras.",
      },
    },
  },
  {
    nome_escola: "9 de Julho",
    numero_alunos: 691,
    codigo_cie: "24880",
    endereco_completo:
      "Rua Mario Rosario Lapenta, s/n, Jardim Contendas, Taquaritinga - SP, 15902-016",
    gestores: [
      {
        funcao: "Diretor(a)",
        nome: "Ketriri Cristina Belentani Buzolin",
      },
      { funcao: "Vice-Diretor(a)", nome: "Adriana Bueno dos Santos Menegelli" },
      { funcao: "Vice-Diretor(a)", nome: "Arthur Pereira de Oliveira Godoy" },
      { funcao: "Coordenador(a)", nome: "Ana Paula Romano" },
      { funcao: "Coordenador(a)", nome: "Marina Campopiano" },
      {
        funcao: "Coordenador(a)",
        nome: "Patricia Alessandra Napoleao Mantovani Langhi",
      },
      { funcao: "Coordenador(a)", nome: "Patricia Ferrari Natalicio" },
      { funcao: "Coordenador(a)", nome: "Rodrigo Sapienza" },
      { funcao: "Coordenador(a)", nome: "Stela Aparecida Dian" },
    ],
    consumo_medio_kwh_mes: 13820,
    consumo_medio_kwh_ano: 165840,
    custo_medio_reais_mes: 9272.22,
    custo_medio_reais_ano: 111266.64,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -21.400654205950794,
      longitude: -48.503949390923964,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 373000,
      economia_anual_reais: 97914.64,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 71,
      descricao: {
        topico_1:
          "Investimento de aproximadamente R$ 373 mil para um arranjo fotovoltaico de 136 kWp, suficiente para gerar 166 MWh anuais.",
        topico_2:
          "A economia prevista se aproxima de R$ 98 mil por ano, com reducao de 88% na despesa de energia e retorno estimado em 3,8 anos.",
        topico_3:
          "O sistema evita perto de 71 toneladas de CO2 a cada ano, equivalente ao plantio de mais de 500 arvores adultas.",
      },
    },
  },
  {
    nome_escola: "Rener Caram Professor",
    numero_alunos: 375,
    codigo_cie: "8205",
    endereco_completo:
      "Avenida Palmares, 778, Vila Palmares, Santo Andre - SP, 09061-410",
    gestores: [
      { funcao: "Diretor(a)", nome: "Celso Ferraz Goncalves" },
      { funcao: "Vice-Diretor(a)", nome: "Henrique dos Santos Ramos" },
      { funcao: "Vice-Diretor(a)", nome: "Josiane Dias Sarauza" },
      { funcao: "Coordenador(a)", nome: "Camila de Justi Corsi" },
      { funcao: "Coordenador(a)", nome: "Cintia Pereira Silva" },
      { funcao: "Coordenador(a)", nome: "Denise Meleski Massini" },
      {
        funcao: "Coordenador(a)",
        nome: "Graziele Camargo Garcia Quesada",
      },
    ],
    consumo_medio_kwh_mes: 7500,
    consumo_medio_kwh_ano: 90000,
    custo_medio_reais_mes: 5032.5,
    custo_medio_reais_ano: 60390,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.651906895904833,
      longitude: -46.56159736121042,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 202000,
      economia_anual_reais: 53143.2,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 38,
      descricao: {
        topico_1:
          "Projeto avaliado em cerca de R$ 202 mil com geracao de 75 kWp, cobrindo a demanda anual de 90 MWh.",
        topico_2:
          "O sistema pode economizar aproximadamente R$ 53 mil por ano, com reducao de 88% nos gastos e payback em 3,8 anos.",
        topico_3:
          "A producao renovavel evita perto de 38 toneladas de CO2 anuais, comparavel ao plantio de mais de 270 arvores adultas.",
      },
    },
  },
  {
    nome_escola: "31 de Marco",
    numero_alunos: 616,
    codigo_cie: "18533",
    endereco_completo:
      "Rua Pedro Pinheiro, 385, Jardim Santa Monica, Campinas - SP, 13082-160",
    gestores: [
      {
        funcao: "Diretor(a)",
        nome: "Rosangela Aparecida Ribas D Avila",
      },
      { funcao: "Vice-Diretor(a)", nome: "Elisabete Cardoso" },
      { funcao: "Vice-Diretor(a)", nome: "Jozelir Generosa Teixeira" },
      { funcao: "Vice-Diretor(a)", nome: "Leodomila Gabriel da Cunha" },
      { funcao: "Coordenador(a)", nome: "Camilo Olavo Barella" },
      { funcao: "Coordenador(a)", nome: "Glauco Rodrigo Ribeiro Trepador" },
      { funcao: "Coordenador(a)", nome: "Leonir Vieira de Moura" },
    ],
    consumo_medio_kwh_mes: 11088,
    consumo_medio_kwh_ano: 133056,
    custo_medio_reais_mes: 7449.05,
    custo_medio_reais_ano: 89388.6,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -22.852983925965486,
      longitude: -47.10781187472912,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 299000,
      economia_anual_reais: 78661.97,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 57,
      descricao: {
        topico_1:
          "Investimento previsto de R$ 299 mil em um sistema de 109 kWp, alinhado a uma geracao anual de 133 MWh.",
        topico_2:
          "A economia estimada e de aproximadamente R$ 79 mil por ano, reduzindo 88% do gasto atual e retornando o investimento em 3,8 anos.",
        topico_3:
          "A iniciativa evita quase 57 toneladas de CO2 a cada ano, equivalente ao plantio de mais de 400 arvores.",
      },
    },
  },
  {
    nome_escola: "CEL JTO A EE Roosevelt Presidente",
    numero_alunos: 205,
    codigo_cie: "498634",
    endereco_completo:
      "Rua Sao Joaquim, 120, Liberdade, Sao Paulo - SP, 01508-000",
    gestores: [
      { funcao: "Diretor(a)", nome: "Edna Rodrigues Araujo Rossetto" },
      { funcao: "Vice-Diretor(a)", nome: "Katia Cristina Misael Narciso" },
      { funcao: "Vice-Diretor(a)", nome: "Marcia de Freitas Silva Baratto" },
      { funcao: "Vice-Diretor(a)", nome: "Sergiano Guerra de Oliveira" },
      { funcao: "Coordenador(a)", nome: "Caio Dantas Cantanhede" },
      { funcao: "Coordenador(a)", nome: "Cleo Cardozo de Oliveira" },
      { funcao: "Coordenador(a)", nome: "Janierk Francelino da Silva" },
      { funcao: "Coordenador(a)", nome: "Mariel Lucene Polachini Lopes" },
    ],
    consumo_medio_kwh_mes: 4100,
    consumo_medio_kwh_ano: 49200,
    custo_medio_reais_mes: 2751.1,
    custo_medio_reais_ano: 33013.2,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.56215605781083,
      longitude: -46.6356045747084,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 111000,
      economia_anual_reais: 29051.62,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 21,
      descricao: {
        topico_1:
          "Projeto de aproximadamente R$ 111 mil com sistema fotovoltaico de 40 kWp, produzindo perto de 49 MWh ao ano.",
        topico_2:
          "A economia esperada e de quase R$ 29 mil anuais, reduzindo 88% da despesa e assegurando payback em 3,8 anos.",
        topico_3:
          "A geracao limpa evita por volta de 21 toneladas de CO2 por ano, equivalente ao plantio de mais de 150 arvores.",
      },
    },
  },
  {
    nome_escola: "Aristides de Castro",
    numero_alunos: 303,
    codigo_cie: "3918",
    endereco_completo:
      "Rua Leopoldo Couto de Magalhaes Junior, 306, Itaim Bibi, Sao Paulo - SP, 04542-000",
    gestores: [
      { funcao: "Diretor(a)", nome: "Cassia Aparecida Frai Alves" },
      { funcao: "Vice-Diretor(a)", nome: "Gilberto Batista Cont Neto" },
      { funcao: "Coordenador(a)", nome: "Ana Cristina de Luca Marques" },
      { funcao: "Coordenador(a)", nome: "Marcia Kimico Hanazumi Yoshida" },
      { funcao: "Coordenador(a)", nome: "Thiago Goncalves dos Santos" },
      { funcao: "Coordenador(a)", nome: "Tiago Henrique Pereira da Silva" },
    ],
    consumo_medio_kwh_mes: 6060,
    consumo_medio_kwh_ano: 72720,
    custo_medio_reais_mes: 4066.26,
    custo_medio_reais_ano: 48795.12,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.58657934873738,
      longitude: -46.675787203542505,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 163000,
      economia_anual_reais: 42939.71,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 31,
      descricao: {
        topico_1:
          "Investimento projetado de R$ 163 mil para um sistema de cerca de 60 kWp, cobrindo a demanda anual de 73 MWh.",
        topico_2:
          "A economia anual estimada e de R$ 43 mil, reduzindo aproximadamente 88% da conta e devolvendo o capital em 3,8 anos.",
        topico_3:
          "O arranjo evita perto de 31 toneladas de CO2 ao ano, equivalentes ao plantio de mais de 220 arvores.",
      },
    },
  },
  {
    nome_escola: "Maria Augusta Saraiva Doutora",
    numero_alunos: 797,
    codigo_cie: "38124",
    endereco_completo:
      "Rua Major Diogo, 200, Bela Vista, Sao Paulo - SP, 01324-000",
    gestores: [
      { funcao: "Diretor(a)", nome: "Ana Lucia Barreto Ribeiro" },
      { funcao: "Vice-Diretor(a)", nome: "Giuglianna Apparecida Souza de Oliveira" },
      { funcao: "Vice-Diretor(a)", nome: "Marlane Simoes Lopes" },
      { funcao: "Coordenador(a)", nome: "Andre Marcondes Ferraz" },
      { funcao: "Coordenador(a)", nome: "Lucineia Alves Siqueira Dias" },
    ],
    consumo_medio_kwh_mes: 12000,
    consumo_medio_kwh_ano: 144000,
    custo_medio_reais_mes: 8052,
    custo_medio_reais_ano: 96624,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.552681072859958,
      longitude: -46.64333310169933,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 324000,
      economia_anual_reais: 85029.12,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 62,
      descricao: {
        topico_1:
          "Projeto avaliado em torno de R$ 324 mil para um sistema fotovoltaico de 118 kWp, responsavel por aproximadamente 144 MWh anuais.",
        topico_2:
          "A economia anual pode atingir R$ 85 mil, reduzindo em torno de 88% os gastos e proporcionando retorno em 3,8 anos.",
        topico_3:
          "A geracao renovavel evita cerca de 62 toneladas de CO2 por ano, o que corresponde ao plantio de mais de 440 arvores adultas.",
      },
    },
  },
  {
    nome_escola: "Antonio Firmino de Proenca Prof",
    numero_alunos: 916,
    codigo_cie: "1454",
    endereco_completo:
      "Rua da Mooca, 363, Mooca, Sao Paulo - SP, 03103-000",
    gestores: [
      { funcao: "Diretor(a)", nome: "Jose Cruz Junior" },
      { funcao: "Vice-Diretor(a)", nome: "Edvaldo Francisco de Moura" },
      { funcao: "Vice-Diretor(a)", nome: "Luciana Rebello Carvalho" },
      { funcao: "Vice-Diretor(a)", nome: "Paula Crosera Parreira" },
      { funcao: "Coordenador(a)", nome: "Luciana de Paula Melo" },
      { funcao: "Coordenador(a)", nome: "Maria Ines Tamioso" },
    ],
    consumo_medio_kwh_mes: 15200,
    consumo_medio_kwh_ano: 182400,
    custo_medio_reais_mes: 10199.2,
    custo_medio_reais_ano: 122390.4,
    tarifa_utilizada_reais_por_kwh: 0.671,
    coordenadas: {
      latitude: -23.553371423891715,
      longitude: -46.62152193422254,
    },
    projeto_solar: {
      custo_estimado_implantacao_reais: 410000,
      economia_anual_reais: 107000,
      payback_anos: 3.8,
      co2_evitar_ton_ano: 78,
      descricao: {
        topico_1:
          "O custo estimado para um sistema de 150 kWp gira em torno de R$ 410 mil, cobrindo a geracao de 182 MWh anuais.",
        topico_2:
          "A geracao propria pode reduzir ate 88% da despesa de energia, economizando cerca de R$ 107 mil por ano e trazendo payback em 3,8 anos.",
        topico_3:
          "A escola deixa de emitir perto de 78 toneladas de CO2 por ano, equivalente ao plantio de mais de 560 arvores adultas.",
      },
    },
  },
];


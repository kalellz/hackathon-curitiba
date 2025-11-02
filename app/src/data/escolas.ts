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
          "Investimento estimado para sistema de aproximadamente 150 kWp, suficiente para gerar 182 MWh por ano.",
        topico_2:
          "Economia potencial de ate 88% na conta anual, resultando em cerca de R$ 107 mil/ano e payback em 3,8 anos.",
        topico_3:
          "Reducao de 78 toneladas de CO2 por ano, equivalente ao plantio de mais de 560 arvores adultas.",
      },
    },
  },
];


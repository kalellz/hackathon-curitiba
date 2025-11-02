export type Gestor = { funcao: string; nome: string };

export type ProjetoSolar = {
  custo_estimado_implantacao_reais: number;
  economia_anual_reais: number;
  payback_anos: number;
  co2_evitar_ton_ano: number;
  descricao: {
    topico_1: string;
    topico_2: string;
    topico_3: string;
  };
};

export type Escola = {
  nome_escola: string;
  numero_alunos: number;
  codigo_cie: string;
  endereco_completo: string;
  gestores: Gestor[];
  consumo_medio_kwh_mes: number;
  consumo_medio_kwh_ano: number;
  custo_medio_reais_mes: number;
  custo_medio_reais_ano: number;
  tarifa_utilizada_reais_por_kwh: number;
  coordenadas: { latitude: number; longitude: number };
  projeto_solar?: ProjetoSolar;
};

export const escola: Escola = {
  nome_escola: "Antonio Firmino de Proença Prof",
  numero_alunos: 916,
  codigo_cie: "1454",
  endereco_completo:
    "Rua da Mooca, 363, Mooca, São Paulo - SP, 03103-000",
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
        "O custo médio estimado para a implantação de um sistema de painéis solares capaz de suprir a demanda energética da escola é de aproximadamente R$ 410 mil. Esse valor considera um sistema fotovoltaico de cerca de 150 kWp, suficiente para gerar aproximadamente 182 MWh/ano.",
      topico_2:
        "Com a geração solar, a escola poderia reduzir em até 88% seus gastos anuais de energia elétrica, resultando em uma economia estimada de R$ 107 mil por ano. O retorno financeiro completo (payback) ocorreria em torno de 3,8 anos, considerando a tarifa de R$ 0,671/kWh e reajustes médios anuais de 5%.",
      topico_3:
        "A produção estimada de energia renovável evitaria a emissão de cerca de 78 toneladas de CO₂ por ano, equivalente ao plantio de mais de 560 árvores adultas. Essa redução contribui significativamente para as metas de sustentabilidade e descarbonização no ambiente escolar.",
    },
  },
};

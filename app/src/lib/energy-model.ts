import { Escola } from "@/data/escola";

export type EnergyModel = {
  investCoef: number;
  economyCoef: number;
  co2Coef: number;
  paybackAvg: number;
};

export const TREES_PER_TON = 560 / 78; // estimativa baseada em dado conhecido
export const CAR_TON_PER_YEAR = 4.6; // emissao media anual de um carro

const FALLBACK_MODEL: EnergyModel = {
  investCoef: 410000 / 182400,
  economyCoef: 0.671 * 0.88,
  co2Coef: 78 / 182400,
  paybackAvg: 3.8,
};

export function trainEnergyModel(dataset: Escola[]): EnergyModel {
  const sample = dataset.filter((escola) => escola.projeto_solar);
  if (!sample.length) {
    return FALLBACK_MODEL;
  }

  let sumXX = 0;
  let sumInvest = 0;
  let sumEconomia = 0;
  let sumCo2 = 0;
  let sumPayback = 0;

  sample.forEach((escola) => {
    const consumo = escola.consumo_medio_kwh_ano;
    const projeto = escola.projeto_solar!;
    sumXX += consumo * consumo;
    sumInvest += projeto.custo_estimado_implantacao_reais * consumo;
    sumEconomia += projeto.economia_anual_reais * consumo;
    sumCo2 += projeto.co2_evitar_ton_ano * consumo;
    sumPayback += projeto.custo_estimado_implantacao_reais / projeto.economia_anual_reais;
  });

  if (sumXX === 0) {
    return FALLBACK_MODEL;
  }

  return {
    investCoef: sumInvest / sumXX,
    economyCoef: sumEconomia / sumXX,
    co2Coef: sumCo2 / sumXX,
    paybackAvg: sumPayback / sample.length,
  };
}

export function predictEnergy(model: EnergyModel, consumoAnual: number) {
  const investimento = Math.max(0, consumoAnual * model.investCoef);
  const economiaAnual = Math.max(0, consumoAnual * model.economyCoef);
  const co2 = Math.max(0, consumoAnual * model.co2Coef);
  const payback =
    economiaAnual > 0 ? (investimento / economiaAnual + model.paybackAvg) / 2 : model.paybackAvg;

  return {
    investimento,
    economiaAnual,
    co2,
    payback,
  };
}

export function co2Equivalences(co2: number) {
  const trees = Math.max(0, Math.round(co2 * TREES_PER_TON));
  const cars = Math.max(0, co2 / CAR_TON_PER_YEAR);
  return { trees, cars };
}

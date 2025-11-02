import { Escola } from "@/data/escola";

export type EnergyModel = {
  investCoef: number;
  investIntercept: number;
  economyCoef: number;
  economyIntercept: number;
  co2Coef: number;
  co2Intercept: number;
  paybackAvg: number;
};

export const TREES_PER_TON = 560 / 78; // estimativa baseada em dado conhecido
export const CAR_TON_PER_YEAR = 4.6; // emissao media anual de um carro

const FALLBACK_MODEL: EnergyModel = {
  investCoef: 410000 / 182400,
  investIntercept: 0,
  economyCoef: 0.671 * 0.88,
  economyIntercept: 0,
  co2Coef: 78 / 182400,
  co2Intercept: 0,
  paybackAvg: 3.8,
};

type RegressionAccumulator = {
  sumX: number;
  sumY: number;
  sumXX: number;
  sumXY: number;
};

const emptyAccumulator = (): RegressionAccumulator => ({
  sumX: 0,
  sumY: 0,
  sumXX: 0,
  sumXY: 0,
});

function computeRegression(acc: RegressionAccumulator, count: number) {
  if (count === 0) {
    return { coef: 0, intercept: 0 };
  }

  const { sumX, sumY, sumXX, sumXY } = acc;
  const denominator = count * sumXX - sumX * sumX;

  if (denominator === 0) {
    const coef = sumXX === 0 ? 0 : sumXY / sumXX;
    return { coef, intercept: 0 };
  }

  const coef = (count * sumXY - sumX * sumY) / denominator;
  const intercept = (sumY - coef * sumX) / count;
  return { coef, intercept };
}

export function trainEnergyModel(dataset: Escola[]): EnergyModel {
  const sample = dataset.filter((escola) => escola.projeto_solar);
  if (!sample.length) {
    return FALLBACK_MODEL;
  }

  const investAcc = emptyAccumulator();
  const economyAcc = emptyAccumulator();
  const co2Acc = emptyAccumulator();
  let sumPayback = 0;
  let paybackSamples = 0;

  sample.forEach((escola) => {
    const consumo = escola.consumo_medio_kwh_ano;
    const projeto = escola.projeto_solar!;
    const investimento = projeto.custo_estimado_implantacao_reais;
    const economia = projeto.economia_anual_reais;
    const co2 = projeto.co2_evitar_ton_ano;

    investAcc.sumX += consumo;
    investAcc.sumY += investimento;
    investAcc.sumXX += consumo * consumo;
    investAcc.sumXY += consumo * investimento;

    economyAcc.sumX += consumo;
    economyAcc.sumY += economia;
    economyAcc.sumXX += consumo * consumo;
    economyAcc.sumXY += consumo * economia;

    co2Acc.sumX += consumo;
    co2Acc.sumY += co2;
    co2Acc.sumXX += consumo * consumo;
    co2Acc.sumXY += consumo * co2;

    if (economia > 0) {
      sumPayback += investimento / economia;
      paybackSamples += 1;
    }
  });

  const investRegression = computeRegression(investAcc, sample.length);
  const economyRegression = computeRegression(economyAcc, sample.length);
  const co2Regression = computeRegression(co2Acc, sample.length);

  if (
    !Number.isFinite(investRegression.coef) ||
    !Number.isFinite(economyRegression.coef) ||
    !Number.isFinite(co2Regression.coef)
  ) {
    return FALLBACK_MODEL;
  }

  return {
    investCoef: investRegression.coef,
    investIntercept: investRegression.intercept,
    economyCoef: economyRegression.coef,
    economyIntercept: economyRegression.intercept,
    co2Coef: co2Regression.coef,
    co2Intercept: co2Regression.intercept,
    paybackAvg:
      paybackSamples > 0 ? sumPayback / paybackSamples : FALLBACK_MODEL.paybackAvg,
  };
}

export function predictEnergy(model: EnergyModel, consumoAnual: number) {
  const investimento = Math.max(
    0,
    consumoAnual * model.investCoef + model.investIntercept,
  );
  const economiaAnual = Math.max(
    0,
    consumoAnual * model.economyCoef + model.economyIntercept,
  );
  const co2 = Math.max(0, consumoAnual * model.co2Coef + model.co2Intercept);
  const paybackBase =
    economiaAnual > 0 ? investimento / economiaAnual : model.paybackAvg;
  const payback = Number.isFinite(paybackBase) && paybackBase > 0 ? paybackBase : model.paybackAvg;

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

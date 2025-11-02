"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Escola } from "@/data/escola";
import { BrainCircuit, Leaf } from "lucide-react";
import { TREES_PER_TON, CAR_TON_PER_YEAR } from "@/lib/energy-model";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  escola: Escola;
   show: { consumo: boolean; custos: boolean; projeto: boolean; co2: boolean };
};

const fmt = new Intl.NumberFormat("pt-BR");
const currency = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);
const currency0 = (n: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(n);

export default function DetailsDialog({ open, onOpenChange, escola, show }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-xl font-semibold text-emerald-900">
            {escola.nome_escola}
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-600">
            {escola.endereco_completo}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-5 text-sm text-zinc-700">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">CIE {escola.codigo_cie}</Badge>
            <Badge variant="secondary">{fmt.format(escola.numero_alunos)} alunos</Badge>
            <Badge variant="outline">Tarifa {currency(escola.tarifa_utilizada_reais_por_kwh)}</Badge>
          </div>

          <section>
            <h3 className="mb-2 text-sm font-medium text-emerald-900">Gestao</h3>
            <ul className="ml-5 list-disc space-y-1">
              {escola.gestores.map((g, i) => (
                <li key={i}>
                  <span className="font-medium text-emerald-800">{g.funcao}:</span> {g.nome}
                </li>
              ))}
            </ul>
          </section>

          {show.consumo && (
            <section>
              <h3 className="mb-1 text-sm font-medium text-emerald-900">Consumo</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs">Mes: {fmt.format(escola.consumo_medio_kwh_mes)} kWh</Badge>
                <Badge className="text-xs" variant="outline">
                  Ano: {fmt.format(escola.consumo_medio_kwh_ano)} kWh
                </Badge>
              </div>
            </section>
          )}

          {show.custos && (
            <section>
              <h3 className="mb-1 text-sm font-medium text-emerald-900">Custos</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs">Mes: {currency(escola.custo_medio_reais_mes)}</Badge>
                <Badge className="text-xs" variant="outline">
                  Ano: {currency(escola.custo_medio_reais_ano)}
                </Badge>
              </div>
            </section>
          )}

          {show.projeto && escola.projeto_solar && (
            <section>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-4">
                <div className="flex flex-wrap items-center gap-3 text-emerald-700">
                  <Leaf className="h-4 w-4" />
                  <span className="font-semibold">Projeto Solar</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    <BrainCircuit className="h-3 w-3" />
                    Recomendacao IA
                  </span>
                </div>
                <div className="mt-3 space-y-1 text-sm text-zinc-700">
                  <div>
                    <span className="font-semibold">Investimento:</span>{" "}
                    {currency0(escola.projeto_solar.custo_estimado_implantacao_reais)}
                  </div>
                  <div>
                    <span className="font-semibold">Economia anual:</span>{" "}
                    {currency0(escola.projeto_solar.economia_anual_reais)}
                  </div>
                  <div>
                    <span className="font-semibold">Payback:</span>{" "}
                    {escola.projeto_solar.payback_anos} anos
                  </div>
                  <div>
                    <span className="font-semibold">CO2 evitado:</span>{" "}
                    {escola.projeto_solar.co2_evitar_ton_ano} ton/ano
                  </div>
                  <div className="text-xs text-emerald-700">
                    Equivale a cerca de{" "}
                    {Math.round(escola.projeto_solar.co2_evitar_ton_ano * TREES_PER_TON)} arvores maduras
                    ou {(escola.projeto_solar.co2_evitar_ton_ano / CAR_TON_PER_YEAR).toFixed(1)} carros fora das ruas por ano.
                  </div>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600">
                  <li>{escola.projeto_solar.descricao.topico_1}</li>
                  <li>{escola.projeto_solar.descricao.topico_2}</li>
                  <li>{escola.projeto_solar.descricao.topico_3}</li>
                </ul>
              </div>
            </section>
          )}

          {show.co2 && !show.projeto && escola.projeto_solar && (
            <section>
              <h3 className="mb-1 text-sm font-medium text-emerald-900">CO2 evitado</h3>
              <div className="flex flex-col gap-1">
                <Badge className="w-fit text-xs">
                  {escola.projeto_solar.co2_evitar_ton_ano} ton/ano
                </Badge>
                <span className="text-xs text-zinc-600">
                  Aproximadamente {Math.round(escola.projeto_solar.co2_evitar_ton_ano * TREES_PER_TON)} arvores ou{" "}
                  {(escola.projeto_solar.co2_evitar_ton_ano / CAR_TON_PER_YEAR).toFixed(1)} carros retirados das ruas por ano.
                </span>
              </div>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

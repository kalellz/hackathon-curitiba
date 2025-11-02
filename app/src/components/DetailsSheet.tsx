"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Escola } from "@/data/escola";
import { Leaf } from "lucide-react";

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

export default function DetailsSheet({ open, onOpenChange, escola, show }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:w-[540px] max-h-[90vh] overflow-y-auto p-6"
      >
        <SheetHeader>
          <SheetTitle>{escola.nome_escola}</SheetTitle>
          <SheetDescription>{escola.endereco_completo}</SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">CIE {escola.codigo_cie}</Badge>
            <Badge variant="secondary">{fmt.format(escola.numero_alunos)} alunos</Badge>
            <Badge variant="outline">Tarifa {currency(escola.tarifa_utilizada_reais_por_kwh)}</Badge>
          </div>

          <section>
            <h3 className="font-medium mb-2">Gestao</h3>
            <ul className="ml-5 list-disc space-y-1">
              {escola.gestores.map((g, i) => (
                <li key={i}>
                  <span className="font-medium">{g.funcao}:</span> {g.nome}
                </li>
              ))}
            </ul>
          </section>

          {show.consumo && (
            <section>
              <h3 className="font-medium mb-1">Consumo</h3>
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
              <h3 className="font-medium mb-1">Custos</h3>
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
              <div className="rounded-md border border-emerald-200 bg-emerald-50/70 p-4">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Leaf className="h-4 w-4" />
                  <span className="font-semibold">Projeto Solar</span>
                </div>
                <div className="mt-3 space-y-1 text-sm text-zinc-700">
                  <div>
                    <span className="font-semibold">Investimento:</span>{" "}
                    {currency0(escola.projeto_solar.custo_estimado_implantacao_reais)}
                  </div>
                  <div>
                    <span className="font-semibold">Economia Anual:</span>{" "}
                    {currency0(escola.projeto_solar.economia_anual_reais)}
                  </div>
                  <div>
                    <span className="font-semibold">Payback:</span>{" "}
                    {escola.projeto_solar.payback_anos} anos
                  </div>
                  <div>
                    <span className="font-semibold">CO2 Evitado:</span>{" "}
                    {escola.projeto_solar.co2_evitar_ton_ano} ton/ano
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
              <h3 className="font-medium mb-1">CO2 evitado</h3>
              <Badge className="text-xs">{escola.projeto_solar.co2_evitar_ton_ano} t/ano</Badge>
            </section>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

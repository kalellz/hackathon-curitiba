"use client";

import { useMemo, useRef, useState } from "react";
import { escolas } from "@/data/escolas";
import { Escola } from "@/data/escola";
import LeafletMap from "@/components/map/LeafletMap";
import DetailsSheet from "@/components/DetailsSheet";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selecionada, setSelecionada] = useState<Escola | null>(null);
  const mapSectionRef = useRef<HTMLDivElement | null>(null);
  const formSectionRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState({ energiaMes: "", alunos: "" });
  const [resultado, setResultado] = useState<{
    investimento: number;
    economiaAnual: number;
    payback: number;
    co2: number;
    consumoAnual: number;
    potenciaKwp: number;
  } | null>(null);

  const items = useMemo(() => {
    return escolas.filter(
      (e) =>
        !!e.coordenadas &&
        typeof e.coordenadas.latitude === "number" &&
        typeof e.coordenadas.longitude === "number"
    );
  }, []);

  const markers = items.map((e) => ({
    position: [e.coordenadas.latitude, e.coordenadas.longitude] as [number, number],
    label: e.nome_escola,
    onClick: () => {
      setSelecionada(e);
      setOpen(true);
    },
  }));

  const scrollToMap = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSimular = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormChange = (field: "energiaMes" | "alunos", value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const energiaMes = Number(form.energiaMes.replace(",", "."));
    const alunos = Number(form.alunos.replace(",", "."));

    if (!energiaMes || energiaMes <= 0 || !alunos || alunos <= 0) {
      setResultado(null);
      return;
    }

    const tarifa = 0.671; // R$/kWh
    const economiaPercentual = 0.88;
    const alphaInvestimento = 410000 / 182400; // R$ por kWh anual baseado na escola de referência
    const co2Factor = 78 / 182400; // toneladas CO2 evitadas por kWh anual

    const consumoMensalKwh = energiaMes / tarifa;
    const consumoAnual = consumoMensalKwh * 12;
    const investimento = Math.round(consumoAnual * alphaInvestimento);
    const economiaAnual = energiaMes * 12 * economiaPercentual;
    const payback = investimento / economiaAnual;
    const co2 = consumoAnual * co2Factor;
    const potenciaKwp = consumoAnual / (182400 / 150); // escala com base na escola exemplo

    setResultado({
      investimento,
      economiaAnual,
      payback,
      co2,
      consumoAnual,
      potenciaKwp,
    });
  };

  return (
    <main className="container mx-auto p-4 space-y-12">
      <header className="mb-3 flex items-center justify-between gap-2">
        <div className="font-semibold text-sm text-emerald-700">Energia Inteligente</div>
        <ThemeToggle />
      </header>

      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-sky-50 px-8 py-16 shadow-sm">
        <div className="absolute -top-12 -right-16 h-48 w-48 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-emerald-900 md:text-5xl">
              Embarque na jornada de energia solar inteligente
            </h1>
            <p className="text-base text-zinc-600 md:text-lg">
              Avalie consumo, custos e reducao de CO2 com insights construidos por IA. Centralize dados das escolas,
              priorize investimentos e acelere a descarbonizacao da sua rede de ensino.
            </p>
            <ul className="mx-auto max-w-lg space-y-2 text-sm text-zinc-600">
              <li className="flex items-start justify-center gap-2 text-left">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Dashboards consolidados e comparativos em tempo real.
              </li>
              <li className="flex items-start justify-center gap-2 text-left">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Simulacoes financeiras precisas com recomendacoes otimizadas.
              </li>
              <li className="flex items-start justify-center gap-2 text-left">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Monitoramento de impacto ambiental e emissao evitada de CO2.
              </li>
            </ul>
          </div>
          <div className="flex w-full max-w-xs flex-col items-center gap-3">
          <Button size="lg" className="w-full" onClick={scrollToMap}>
            Explorar agora
          </Button>
          <Button
            size="lg"
              variant="outline"
              className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              onClick={handleSimular}
            >
              Simular com IA
            </Button>
          </div>
        </div>
      </section>

      <div ref={mapSectionRef} className="space-y-6 pt-4">
        <h2 className="text-xl font-semibold text-zinc-800">Mapa de escolas com potencial solar</h2>
        {items.length > 0 ? (
          <LeafletMap markers={markers} />
        ) : (
          <p className="text-muted-foreground">Nenhuma escola encontrada.</p>
        )}
      </div>

      <div
        ref={formSectionRef}
        className="rounded-2xl border border-emerald-100 bg-white/70 p-6 shadow-sm backdrop-blur"
      >
        <div className="mb-6 space-y-2 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            Simulação Inteligente
          </span>
          <h2 className="text-2xl font-semibold text-emerald-900">Preencha os dados da sua escola</h2>
          <p className="text-sm text-zinc-600">
            Informe o gasto mensal de energia e o número de alunos para estimar o potencial solar e o retorno do
            investimento com IA.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="mx-auto flex max-w-2xl flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm text-zinc-600">
              Gasto mensal com energia (R$)
              <Input
                type="number"
                min="0"
                step="0.01"
                value={form.energiaMes}
                onChange={(e) => handleFormChange("energiaMes", e.target.value)}
                placeholder="Ex: 12000"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-zinc-600">
              Número de alunos
              <Input
                type="number"
                min="0"
                step="1"
                value={form.alunos}
                onChange={(e) => handleFormChange("alunos", e.target.value)}
                placeholder="Ex: 900"
                required
              />
            </label>
          </div>
          <Button type="submit" size="lg" className="self-center">
            Calcular cenário com IA
          </Button>
        </form>

        {resultado && (
          <div className="mt-6 grid gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-6 text-sm text-emerald-900 sm:grid-cols-2">
            <div>
              <p className="font-semibold">Investimento estimado</p>
              <p className="text-lg font-bold">
                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
                  resultado.investimento
                )}
              </p>
            </div>
            <div>
              <p className="font-semibold">Economia anual projetada</p>
              <p className="text-lg font-bold">
                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
                  resultado.economiaAnual
                )}
              </p>
            </div>
            <div>
              <p className="font-semibold">Payback estimado</p>
              <p className="text-lg font-bold">{resultado.payback.toFixed(1)} anos</p>
            </div>
            <div>
              <p className="font-semibold">CO₂ evitado</p>
              <p className="text-lg font-bold">{resultado.co2.toFixed(1)} ton/ano</p>
            </div>
            <div>
              <p className="font-semibold">Consumo anual atual</p>
              <p className="text-lg font-bold">{resultado.consumoAnual.toFixed(0)} kWh</p>
            </div>
            <div>
              <p className="font-semibold">Potência recomendada</p>
              <p className="text-lg font-bold">{resultado.potenciaKwp.toFixed(0)} kWp</p>
            </div>
          </div>
        )}
      </div>

      {selecionada && (
        <DetailsSheet
          open={open}
          onOpenChange={setOpen}
          escola={selecionada}
          show={{
            consumo: true,
            custos: true,
            projeto: true,
            co2: true,
          }}
        />
      )}
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import { escolas } from "@/data/escolas";
import { Escola } from "@/data/escola";
import FiltersBar, { Filters } from "@/components/FiltersBar";
import LeafletMap from "@/components/map/LeafletMap";
import DetailsSheet from "@/components/DetailsSheet";

export default function Page() {
  const [filters, setFilters] = useState<Filters>({
    mostrarConsumo: true,
    mostrarCustos: true,
    mostrarProjeto: true,
    mostrarCO2: true,
    paybackMax: 10,
    cidade: "Sao Paulo",
  });

  const [open, setOpen] = useState(false);
  const [selecionada, setSelecionada] = useState<Escola | null>(null);

  const items = useMemo(() => {
    return escolas.filter((e) => {
      if (filters.cidade && filters.cidade !== "Sao Paulo") return false;
      if (e.projeto_solar && e.projeto_solar.payback_anos > filters.paybackMax) return false;
      return !!e.coordenadas && typeof e.coordenadas.latitude === "number" && typeof e.coordenadas.longitude === "number";
    });
  }, [filters]);

  const markers = items.map((e) => ({
    position: [e.coordenadas.latitude, e.coordenadas.longitude] as [number, number],
    label: e.nome_escola,
    onClick: () => {
      setSelecionada(e);
      setOpen(true);
    },
  }));

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-2">Simulador de Gastos Energéticos</h1>
      <FiltersBar filters={filters} onChange={setFilters} />
      {items.length > 0 ? (
        <LeafletMap markers={markers} />
      ) : (
        <p className="text-muted-foreground">Nenhuma escola corresponde aos filtros.</p>
      )}

      {selecionada && (
        <DetailsSheet
          open={open}
          onOpenChange={setOpen}
          escola={selecionada}
          show={{
            consumo: filters.mostrarConsumo,
            custos: filters.mostrarCustos,
            projeto: filters.mostrarProjeto,
            co2: filters.mostrarCO2,
          }}
        />
      )}
    </main>
  );
}

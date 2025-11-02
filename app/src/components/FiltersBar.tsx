"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export type Filters = {
  mostrarConsumo: boolean;
  mostrarCustos: boolean;
  mostrarProjeto: boolean;
  mostrarCO2: boolean;
  paybackMax: number; // anos
  cidade: string;
};

type Props = {
  filters: Filters;
  onChange: (next: Filters) => void;
};

export default function FiltersBar({ filters, onChange }: Props) {
  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });

  return (
    <Card className="w-full p-4 mb-3">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-3 min-w-[250px]">
          <div className="w-40">
            <Select value={filters.cidade} onValueChange={(v) => set({ cidade: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sao Paulo">São Paulo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </Card>
  );
}


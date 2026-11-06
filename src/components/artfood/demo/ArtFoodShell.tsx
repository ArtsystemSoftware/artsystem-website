"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import {
  BanknotesIcon,
  ClipboardDocumentListIcon,
  ScaleIcon,
  ShoppingCartIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { BreadMark } from "@/components/artfood/ArtFoodLogo";
import { MenuModule } from "./MenuModule";
import { WaiterModule } from "./WaiterModule";
import { ScaleModule } from "./ScaleModule";
import { RevenueModule } from "./RevenueModule";
import { AuditModule } from "./AuditModule";

type IconType = ComponentType<{ className?: string }>;

type ModuleId = "menu" | "waiter" | "scale" | "revenue" | "audit";

const MODULES: {
  id: ModuleId;
  label: string;
  hint: string;
  Icon: IconType;
}[] = [
  { id: "menu", label: "Cardápio", hint: "Atendimento de mesa", Icon: ShoppingCartIcon },
  { id: "waiter", label: "Garçom", hint: "Comandas abertas", Icon: UserGroupIcon },
  { id: "scale", label: "Balança", hint: "Venda por peso", Icon: ScaleIcon },
  { id: "revenue", label: "Faturamento", hint: "Visão de vendas", Icon: BanknotesIcon },
  { id: "audit", label: "Movimentação", hint: "Histórico do dia", Icon: ClipboardDocumentListIcon },
];

const MODULE_COMPONENTS: Record<ModuleId, ComponentType> = {
  menu: MenuModule,
  waiter: WaiterModule,
  scale: ScaleModule,
  revenue: RevenueModule,
  audit: AuditModule,
};

export function ArtFoodDemo() {
  const [active, setActive] = useState<ModuleId>("menu");

  return (
    <div className="relative">
      <div
        className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-artfood/20 via-transparent to-custom1/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[28px] border border-zinc-200/80 bg-zinc-950 p-2 shadow-2xl dark:border-zinc-700 sm:p-3">
        <div className="overflow-hidden rounded-[22px] bg-slate-50">
          {/* Barra superior */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 bg-white px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 shadow-inner">
                <BreadMark className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold leading-none text-zinc-900">
                  Art <span className="text-artfood">Food</span>
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                  Demonstração interativa
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500">
              <span className="hidden items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-emerald-700 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online
              </span>
              <span className="rounded-full bg-zinc-100 px-2.5 py-1">
                Ambiente de teste
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <nav
              className="flex gap-2 overflow-x-auto border-b border-zinc-100 bg-white p-2.5 lg:w-52 lg:flex-col lg:border-b-0 lg:border-r lg:p-3"
              aria-label="Módulos da demonstração"
            >
              {MODULES.map(({ id, label, hint, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  aria-pressed={active === id}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-left transition lg:w-full lg:py-2.5 ${
                    active === id
                      ? "bg-artfood text-white shadow-sm"
                      : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>
                    <span className="block text-xs font-extrabold">{label}</span>
                    <span
                      className={`hidden text-[9px] font-semibold lg:block ${
                        active === id ? "text-white/70" : "text-zinc-400"
                      }`}
                    >
                      {hint}
                    </span>
                  </span>
                </button>
              ))}

              <div className="mt-auto hidden rounded-2xl bg-artfoodLight p-3 text-[10px] font-semibold leading-relaxed text-artfoodDark lg:block">
                <SparklesIcon className="mb-1 h-4 w-4" />
                Clique nos módulos e interaja. Nada é salvo de verdade.
              </div>
            </nav>

            <div className="min-h-[520px] flex-1 p-4 sm:p-5">
              {MODULES.map(({ id }) => {
                const Module = MODULE_COMPONENTS[id];

                return (
                  <div key={id} className={active === id ? "" : "hidden"}>
                    <Module />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

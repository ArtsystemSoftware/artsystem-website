"use client";

import { useMemo, useState } from "react";
import { ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { PanelHeader, SoftBadge } from "./DemoPanel";

type AuditType = "Pedido" | "Comanda" | "Cadastro";
type AuditFilter = "Todos" | AuditType;

type AuditEntry = {
  id: number;
  user: string;
  initials: string;
  avatar: string;
  action: string;
  detail: string;
  time: string;
  type: AuditType;
};

const AUDIT_ENTRIES: AuditEntry[] = [
  {
    id: 1,
    user: "Ana Souza",
    initials: "AS",
    avatar: "bg-amber-100 text-amber-700",
    action: "incluiu",
    detail: "2x Pão de Queijo na comanda 042 · Mesa 07",
    time: "12:42",
    type: "Pedido",
  },
  {
    id: 2,
    user: "Pedro Lima",
    initials: "PL",
    avatar: "bg-emerald-100 text-emerald-700",
    action: "alterou",
    detail: "quantidade de Cappuccino de 1 para 2",
    time: "12:38",
    type: "Pedido",
  },
  {
    id: 3,
    user: "Carla Nunes",
    initials: "CN",
    avatar: "bg-violet-100 text-violet-700",
    action: "removeu",
    detail: "Brownie da comanda 045 · Mesa 12",
    time: "12:35",
    type: "Comanda",
  },
  {
    id: 4,
    user: "Pedro Lima",
    initials: "PL",
    avatar: "bg-emerald-100 text-emerald-700",
    action: "abriu",
    detail: "atendimento da Mesa 07 com a comanda 042",
    time: "12:30",
    type: "Comanda",
  },
  {
    id: 5,
    user: "Ana Souza",
    initials: "AS",
    avatar: "bg-amber-100 text-amber-700",
    action: "lançou",
    detail: "0,420 kg de Pão Francês pela balança",
    time: "11:47",
    type: "Pedido",
  },
  {
    id: 6,
    user: "Carla Nunes",
    initials: "CN",
    avatar: "bg-violet-100 text-violet-700",
    action: "atualizou",
    detail: "preço do Pão Francês para R$ 18,90/kg",
    time: "11:20",
    type: "Cadastro",
  },
];

const AUDIT_FILTERS: AuditFilter[] = ["Todos", "Pedido", "Comanda", "Cadastro"];

export function AuditModule() {
  const [filter, setFilter] = useState<AuditFilter>("Todos");

  const entries = useMemo(
    () =>
      filter === "Todos"
        ? AUDIT_ENTRIES
        : AUDIT_ENTRIES.filter((entry) => entry.type === filter),
    [filter]
  );

  return (
    <div className="animate-rise-in space-y-4">
      <PanelHeader
        eyebrow="Auditoria"
        title="Movimentação do dia"
        action={
          <SoftBadge>
            <ClockIcon className="h-3 w-3" />
            Atualizado às 12:42
          </SoftBadge>
        }
      />

      <div className="flex flex-wrap gap-1.5">
        {AUDIT_FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={`rounded-xl px-3 py-1.5 text-[10px] font-extrabold transition ${
              filter === option
                ? "bg-zinc-900 text-white shadow-sm"
                : "bg-white text-zinc-500 ring-1 ring-zinc-200/70 hover:bg-zinc-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
        <ol className="relative space-y-4 before:absolute before:bottom-2 before:left-[18px] before:top-2 before:w-px before:bg-zinc-200">
          {entries.map((entry) => (
            <li key={entry.id} className="relative flex gap-3">
              <span
                className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white text-[10px] font-extrabold shadow-sm ${entry.avatar}`}
              >
                {entry.initials}
              </span>
              <div className="min-w-0 flex-1 pb-1">
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <span className="text-[11px] font-extrabold text-zinc-900">
                    {entry.user}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-500">
                    {entry.action}
                  </span>
                  <span className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wider text-zinc-500">
                    {entry.type}
                  </span>
                  <span className="ml-auto text-[9px] font-bold text-zinc-400">
                    {entry.time}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-500">
                  {entry.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {entries.length === 0 && (
          <p className="py-8 text-center text-xs font-semibold text-zinc-400">
            Nenhuma movimentação deste tipo hoje.
          </p>
        )}
      </div>

      <p className="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-400">
        <SparklesIcon className="h-3.5 w-3.5 text-artfood" />
        Cada inclusão, alteração e remoção fica registrada com autor, data e hora.
      </p>
    </div>
  );
}

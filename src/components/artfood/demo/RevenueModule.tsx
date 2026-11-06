"use client";

import { useState } from "react";
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { brl } from "./formatters";
import { PanelHeader } from "./DemoPanel";

type RevenuePeriod = "Hoje" | "7 dias" | "30 dias";

type RevenueData = {
  total: number;
  items: number;
  tabs: number;
  ticket: number;
  labels: string[];
  values: number[];
  operators: { name: string; value: number }[];
};

const REVENUE_PERIODS: RevenuePeriod[] = ["Hoje", "7 dias", "30 dias"];

const REVENUE_DATA: Record<RevenuePeriod, RevenueData> = {
  Hoje: {
    total: 4820.5,
    items: 128,
    tabs: 34,
    ticket: 141.78,
    labels: ["08h", "10h", "12h", "14h", "16h", "18h", "20h"],
    values: [180, 320, 890, 760, 1130, 980, 560],
    operators: [
      { name: "Ana Souza", value: 1780 },
      { name: "Pedro Lima", value: 1540.5 },
      { name: "Carla Nunes", value: 1500 },
    ],
  },
  "7 dias": {
    total: 27840.9,
    items: 764,
    tabs: 198,
    ticket: 140.61,
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    values: [3200, 2980, 3540, 3890, 4720, 5610, 3900.9],
    operators: [
      { name: "Ana Souza", value: 10200 },
      { name: "Pedro Lima", value: 9100 },
      { name: "Carla Nunes", value: 8540.9 },
    ],
  },
  "30 dias": {
    total: 112450.75,
    items: 3218,
    tabs: 812,
    ticket: 138.49,
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
    values: [25400, 27800, 29100, 30150.75],
    operators: [
      { name: "Ana Souza", value: 41200 },
      { name: "Pedro Lima", value: 37600 },
      { name: "Carla Nunes", value: 33650.75 },
    ],
  },
};

export function RevenueModule() {
  const [period, setPeriod] = useState<RevenuePeriod>("Hoje");
  const data = REVENUE_DATA[period];
  const maxDay = Math.max(...data.values, 1);
  const maxOperator = Math.max(...data.operators.map((operator) => operator.value), 1);

  const metrics = [
    { label: "Faturamento", value: brl(data.total), dark: true },
    { label: "Itens vendidos", value: data.items.toLocaleString("pt-BR") },
    { label: "Comandas", value: data.tabs.toLocaleString("pt-BR") },
    { label: "Ticket médio", value: brl(data.ticket) },
  ];

  return (
    <div className="animate-rise-in space-y-4">
      <PanelHeader
        eyebrow="Visão de vendas"
        title="Faturamento em tempo real"
        action={
          <div className="flex rounded-xl bg-zinc-100 p-1">
            {REVENUE_PERIODS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setPeriod(option)}
                className={`rounded-lg px-2.5 py-1.5 text-[10px] font-extrabold transition ${
                  period === option
                    ? "bg-white text-artfood shadow-sm"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className={`rounded-2xl border p-3.5 ${
              metric.dark
                ? "border-zinc-800 bg-zinc-950 text-white"
                : "border-zinc-100 bg-white shadow-sm"
            }`}
          >
            <p
              className={`text-[9px] font-bold uppercase tracking-wider ${
                metric.dark ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              {metric.label}
            </p>
            <p
              className={`mt-1 truncate text-base font-black sm:text-lg ${
                metric.dark ? "text-white" : "text-zinc-900"
              }`}
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_225px]">
        <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-1.5 text-xs font-extrabold text-zinc-900">
              <ChartBarIcon className="h-4 w-4 text-artfood" />
              Vendas por período
            </h4>
            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">
              {period}
            </span>
          </div>

          <div className="mt-4 flex h-36 items-end gap-2">
            {data.values.map((value, index) => (
              <div
                key={`${period}-${data.labels[index]}`}
                className="group flex h-full flex-1 flex-col justify-end"
                title={`${data.labels[index]}: ${brl(value)}`}
              >
                <div
                  className="relative w-full rounded-t-lg bg-gradient-to-t from-artfood to-[#e9b7a5] transition-all duration-500 ease-out group-hover:from-artfoodDark group-hover:to-artfood"
                  style={{ height: `${Math.max(7, (value / maxDay) * 100)}%` }}
                >
                  <span className="pointer-events-none absolute -top-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-1.5 py-0.5 text-[9px] font-bold text-white group-hover:block">
                    {brl(value)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 flex gap-2">
            {data.labels.map((label) => (
              <span
                key={`${period}-label-${label}`}
                className="flex-1 text-center text-[9px] font-bold text-zinc-400"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
          <h4 className="flex items-center gap-1.5 text-xs font-extrabold text-zinc-900">
            <UserGroupIcon className="h-4 w-4 text-artfood" />
            Por operador
          </h4>

          <div className="mt-4 space-y-3.5">
            {data.operators.map((operator, index) => (
              <div key={operator.name}>
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-[10px] font-bold text-zinc-600">
                    {operator.name}
                  </span>
                  <span className="text-[10px] font-extrabold text-zinc-900">
                    {brl(operator.value)}
                  </span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      index === 0 ? "bg-artfood" : "bg-artfood/60"
                    }`}
                    style={{ width: `${(operator.value / maxOperator) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-artfoodLight p-2.5">
            <p className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-artfoodDark">
              <ClockIcon className="h-3 w-3" />
              Atualizado agora
            </p>
            <p className="mt-1 text-[10px] font-semibold leading-relaxed text-artfoodDark/80">
              Dados consolidados do caixa e das comandas em consumo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

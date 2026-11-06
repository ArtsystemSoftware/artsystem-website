"use client";

import { useState } from "react";
import { CheckCircleIcon, ScaleIcon } from "@heroicons/react/24/outline";
import { brl, formatWeight } from "./formatters";
import { PanelHeader, SoftBadge } from "./DemoPanel";

type ScaleProduct = {
  id: string;
  name: string;
  price: number;
  emoji: string;
  tint: string;
};

const SCALE_PRODUCTS: ScaleProduct[] = [
  {
    id: "pao-frances",
    name: "Pão Francês",
    price: 18.9,
    emoji: "🥖",
    tint: "from-amber-100 to-orange-50",
  },
  {
    id: "mussarela",
    name: "Queijo Mussarela",
    price: 44.9,
    emoji: "🧀",
    tint: "from-yellow-100 to-amber-50",
  },
  {
    id: "presunto",
    name: "Presunto",
    price: 39.9,
    emoji: "🍖",
    tint: "from-rose-100 to-orange-50",
  },
  {
    id: "uva",
    name: "Uva Itália",
    price: 24.9,
    emoji: "🍇",
    tint: "from-violet-100 to-fuchsia-50",
  },
];

export function ScaleModule() {
  const [productId, setProductId] = useState("pao-frances");
  const [weight, setWeight] = useState(0.42);
  const [launched, setLaunched] = useState<
    { id: string; name: string; weight: number; total: number }[]
  >([]);
  const [feedback, setFeedback] = useState("");

  const product =
    SCALE_PRODUCTS.find((item) => item.id === productId) ?? SCALE_PRODUCTS[0];
  const total = product.price * weight;
  const launchedTotal = launched.reduce((sum, item) => sum + item.total, 0);

  const launch = () => {
    if (weight <= 0) return;
    setLaunched((current) =>
      [
        {
          id: `${product.id}-${Date.now()}`,
          name: product.name,
          weight,
          total,
        },
        ...current,
      ].slice(0, 4)
    );
    setFeedback(`${product.name} lançado na comanda 042.`);
    setWeight(0);
    window.setTimeout(() => setFeedback(""), 2400);
  };

  return (
    <div className="animate-rise-in space-y-4">
      <PanelHeader
        eyebrow="Venda por peso"
        title="Balança integrada"
        action={
          <SoftBadge tone="green">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Serial conectada
          </SoftBadge>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="space-y-3">
          <div className="rounded-2xl bg-zinc-950 p-4 text-white shadow-inner">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">
              <span>Peso líquido</span>
              <span
                className={`flex items-center gap-1.5 ${
                  weight > 0 ? "text-emerald-400" : "text-zinc-500"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    weight > 0 ? "animate-pulse bg-emerald-400" : "bg-zinc-600"
                  }`}
                />
                {weight > 0 ? "Estável" : "Aguardando"}
              </span>
            </div>

            <div className="mt-1 flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-4xl font-bold tracking-tight text-amber-100">
                {formatWeight(weight)}
              </span>
              <span className="text-sm font-bold text-zinc-400">kg</span>
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-zinc-800 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                {product.name} · {brl(product.price)}/kg
              </span>
              <span className="text-base font-extrabold text-artfood">
                {brl(total)}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-100 bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Peso na balança
              </span>
              <span className="text-[10px] font-bold text-zinc-500">
                0,000 — 1,500 kg
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1.5}
              step={0.005}
              value={weight}
              onChange={(event) => setWeight(Number(event.target.value))}
              aria-label="Simular peso na balança"
              className="mt-2 w-full cursor-pointer accent-artfood"
            />
            <div className="mt-2 flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setWeight(0)}
                className="rounded-lg bg-zinc-100 px-2.5 py-1.5 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-200"
              >
                Tarar
              </button>
              {[0.25, 0.5, 1].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setWeight(value)}
                  className="rounded-lg bg-zinc-100 px-2.5 py-1.5 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-200"
                >
                  {formatWeight(value)} kg
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SCALE_PRODUCTS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setProductId(option.id)}
                className={`rounded-xl border p-2 text-left transition ${
                  option.id === product.id
                    ? "border-artfood bg-artfoodLight/60 shadow-sm"
                    : "border-zinc-100 bg-white hover:border-zinc-200"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${option.tint} text-lg`}
                  aria-hidden="true"
                >
                  {option.emoji}
                </span>
                <p className="mt-1.5 truncate text-[10px] font-extrabold text-zinc-800">
                  {option.name}
                </p>
                <p className="text-[9px] font-bold text-zinc-400">
                  {brl(option.price)}/kg
                </p>
              </button>
            ))}
          </div>
        </div>

        <aside className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-3.5 shadow-sm">
          <h4 className="flex items-center gap-1.5 text-sm font-extrabold text-zinc-900">
            <ScaleIcon className="h-4 w-4 text-artfood" />
            Comanda 042
          </h4>
          <p className="mt-0.5 text-[10px] font-semibold text-zinc-400">
            Itens lançados pela balança
          </p>

          <div className="mt-3 flex-1 space-y-2">
            {launched.length === 0 ? (
              <div className="flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50/60 px-3 text-center">
                <ScaleIcon className="mb-2 h-6 w-6 text-zinc-300" />
                <p className="text-[11px] font-semibold text-zinc-400">
                  Pese um produto e lance na comanda para começar.
                </p>
              </div>
            ) : (
              launched.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-2 rounded-lg bg-zinc-50 px-2.5 py-2"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-bold text-zinc-800">
                      {item.name}
                    </p>
                    <p className="text-[9px] font-semibold text-zinc-400">
                      {formatWeight(item.weight)} kg
                    </p>
                  </div>
                  <span className="text-[11px] font-extrabold text-zinc-900">
                    {brl(item.total)}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="mt-3 border-t border-zinc-100 pt-3">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Total pesado
              </span>
              <span className="text-base font-black text-zinc-900">
                {brl(launchedTotal)}
              </span>
            </div>

            {feedback && (
              <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-2 text-[10px] font-bold text-emerald-700">
                <CheckCircleIcon className="h-3.5 w-3.5" />
                {feedback}
              </div>
            )}

            <button
              type="button"
              onClick={launch}
              disabled={weight <= 0}
              className="mt-2 w-full rounded-xl bg-artfood py-2.5 text-[11px] font-extrabold text-white transition hover:bg-artfoodDark disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-400"
            >
              Lançar na comanda
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

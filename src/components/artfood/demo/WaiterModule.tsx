"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { brl } from "./formatters";
import { PanelHeader, SoftBadge } from "./DemoPanel";

type WaiterItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  note?: string;
};

type WaiterTab = {
  id: string;
  code: string;
  mesa: string;
  items: WaiterItem[];
};

function makeInitialTabs(): WaiterTab[] {
  return [
    {
      id: "tab-042",
      code: "042",
      mesa: "07",
      items: [
        { id: "item-1", name: "Pão de Queijo", quantity: 2, price: 8.5 },
        { id: "item-2", name: "Cappuccino", quantity: 1, price: 9.9 },
        { id: "item-3", name: "Bolo de Cenoura", quantity: 1, price: 11.5 },
      ],
    },
    {
      id: "tab-038",
      code: "038",
      mesa: "03",
      items: [
        { id: "item-4", name: "Sanduíche Natural", quantity: 1, price: 16.9 },
        {
          id: "item-5",
          name: "Suco de Laranja",
          quantity: 2,
          price: 8,
          note: "Sem gelo",
        },
      ],
    },
    {
      id: "tab-045",
      code: "045",
      mesa: "12",
      items: [
        { id: "item-6", name: "Coxinha", quantity: 3, price: 9.5 },
        { id: "item-7", name: "Brownie", quantity: 2, price: 10.5 },
      ],
    },
  ];
}

const tabTotal = (tab: WaiterTab) =>
  tab.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export function WaiterModule() {
  const [tabs, setTabs] = useState<WaiterTab[]>(makeInitialTabs);
  const [selectedId, setSelectedId] = useState("tab-042");
  const [feedback, setFeedback] = useState("");

  const activeTab = tabs.find((tab) => tab.id === selectedId) ?? tabs[0];
  const totalAberto = tabs.reduce((sum, tab) => sum + tabTotal(tab), 0);

  const changeQuantity = (tabId: string, itemId: string, delta: number) => {
    setTabs((current) =>
      current.map((tab) =>
        tab.id === tabId
          ? {
              ...tab,
              items: tab.items.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                  : item
              ),
            }
          : tab
      )
    );
    setFeedback("");
  };

  const removeItem = (tabId: string, itemId: string) => {
    setTabs((current) =>
      current.map((tab) =>
        tab.id === tabId
          ? { ...tab, items: tab.items.filter((item) => item.id !== itemId) }
          : tab
      )
    );
    setFeedback("");
  };

  const clearTab = () => {
    if (!activeTab) return;
    setTabs((current) =>
      current.map((tab) =>
        tab.id === activeTab.id ? { ...tab, items: [] } : tab
      )
    );
    setFeedback("Comanda limpa e liberada para o próximo cliente.");
  };

  const resetDemo = () => {
    setTabs(makeInitialTabs());
    setSelectedId("tab-042");
    setFeedback("");
  };

  return (
    <div className="animate-rise-in space-y-4">
      <PanelHeader
        eyebrow="Salão"
        title="Painel do garçom"
        action={
          <SoftBadge tone="green">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {tabs.length} comandas · {brl(totalAberto)}
          </SoftBadge>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[235px_minmax(0,1fr)]">
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {tabs.map((tab) => {
              const active = tab.id === activeTab?.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(tab.id);
                    setFeedback("");
                  }}
                  className={`rounded-xl border p-3 text-left transition ${
                    active
                      ? "border-artfood bg-artfoodLight/70 shadow-sm"
                      : "border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-zinc-900">
                      Mesa {tab.mesa}
                    </span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${
                        active
                          ? "bg-artfood text-white"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {tab.items.length ? "Aberta" : "Livre"}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Comanda {tab.code}
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-zinc-100 pt-2">
                    <span className="text-[10px] font-semibold text-zinc-400">
                      {tab.items.reduce((sum, item) => sum + item.quantity, 0)} itens
                    </span>
                    <span className="text-[11px] font-extrabold text-artfoodDark">
                      {brl(tabTotal(tab))}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={resetDemo}
            className="w-full rounded-xl border border-dashed border-zinc-200 bg-white/70 py-2 text-[10px] font-bold text-zinc-400 transition hover:text-zinc-700"
          >
            Recarregar exemplo
          </button>
        </div>

        <div className="flex min-h-[300px] flex-col rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
          {!activeTab || activeTab.items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-300">
                <ClipboardDocumentListIcon className="h-7 w-7" />
              </div>
              <p className="mt-3 text-sm font-bold text-zinc-700">
                Comanda {activeTab?.code} está livre
              </p>
              <p className="mt-1 max-w-xs text-[11px] text-zinc-400">
                Pronta para receber um novo atendimento. Use “Recarregar exemplo”
                para trazer os itens de demonstração de volta.
              </p>
              <button
                type="button"
                onClick={resetDemo}
                className="mt-4 rounded-lg bg-artfood px-3 py-2 text-[11px] font-extrabold text-white transition hover:bg-artfoodDark"
              >
                Recarregar demonstração
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                <div>
                  <h4 className="text-base font-extrabold text-zinc-900">
                    Mesa {activeTab.mesa}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Comanda {activeTab.code} · Atendimento em consumo
                  </p>
                </div>
                <button
                  type="button"
                  onClick={clearTab}
                  className="flex items-center gap-1 rounded-lg border border-red-100 bg-red-50 px-2.5 py-1.5 text-[10px] font-extrabold text-red-600 transition hover:bg-red-100"
                >
                  <TrashIcon className="h-3 w-3" />
                  Limpar comanda
                </button>
              </div>

              <div className="flex-1 divide-y divide-zinc-50">
                {activeTab.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 py-2.5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-bold text-zinc-800">
                        {item.name}
                      </p>
                      <p className="text-[10px] font-semibold text-zinc-400">
                        {brl(item.price)} cada
                        {item.note ? ` · ${item.note}` : ""}
                      </p>
                    </div>

                    <div className="flex items-center gap-0.5 rounded-lg border border-zinc-200 bg-white">
                      <button
                        type="button"
                        onClick={() => changeQuantity(activeTab.id, item.id, -1)}
                        aria-label={`Diminuir ${item.name}`}
                        className="p-1 text-zinc-500 transition hover:text-zinc-900"
                      >
                        <MinusIcon className="h-3 w-3" />
                      </button>
                      <span className="min-w-4 text-center text-[10px] font-extrabold text-zinc-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(activeTab.id, item.id, 1)}
                        aria-label={`Aumentar ${item.name}`}
                        className="p-1 text-zinc-500 transition hover:text-zinc-900"
                      >
                        <PlusIcon className="h-3 w-3" />
                      </button>
                    </div>

                    <span className="w-16 text-right text-xs font-extrabold text-zinc-900">
                      {brl(item.price * item.quantity)}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeItem(activeTab.id, item.id)}
                      aria-label={`Remover ${item.name}`}
                      className="text-zinc-300 transition hover:text-red-500"
                    >
                      <TrashIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-100 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Total da comanda
                  </span>
                  <span className="text-lg font-black text-zinc-900">
                    {brl(tabTotal(activeTab))}
                  </span>
                </div>

                {feedback ? (
                  <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-2 text-[10px] font-bold text-emerald-700">
                    <CheckCircleIcon className="h-3.5 w-3.5" />
                    {feedback}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setFeedback(
                        `Comanda ${activeTab.code} sincronizada com o caixa.`
                      )
                    }
                    className="mt-2 w-full rounded-xl bg-zinc-900 py-2.5 text-[11px] font-extrabold text-white transition hover:bg-zinc-800"
                  >
                    Enviar para o caixa
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import {
  CheckCircleIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { brl } from "./formatters";
import { PanelHeader, SoftBadge } from "./DemoPanel";

type MenuProduct = {
  id: string;
  name: string;
  desc: string;
  price: number;
  dept: string;
  emoji: string;
  tint: string;
};

const MENU_PRODUCTS: MenuProduct[] = [
  {
    id: "pao-queijo",
    name: "Pão de Queijo",
    desc: "Queijo canastra, quentinho",
    price: 8.5,
    dept: "Padaria",
    emoji: "🧀",
    tint: "from-amber-100 via-orange-50 to-yellow-50",
  },
  {
    id: "croissant",
    name: "Croissant",
    desc: "Manteiga francesa",
    price: 12.9,
    dept: "Padaria",
    emoji: "🥐",
    tint: "from-orange-100 to-amber-50",
  },
  {
    id: "cafe",
    name: "Cappuccino",
    desc: "Café especial 200 ml",
    price: 9.9,
    dept: "Cafés",
    emoji: "☕",
    tint: "from-stone-200 to-amber-100",
  },
  {
    id: "bolo",
    name: "Bolo de Cenoura",
    desc: "Fatia com cobertura",
    price: 11.5,
    dept: "Doces",
    emoji: "🍰",
    tint: "from-amber-100 to-orange-100",
  },
  {
    id: "sanduiche",
    name: "Sanduíche Natural",
    desc: "Frango e salada",
    price: 16.9,
    dept: "Salgados",
    emoji: "🥪",
    tint: "from-lime-100 to-emerald-50",
  },
  {
    id: "suco",
    name: "Suco de Laranja",
    desc: "300 ml, natural",
    price: 8,
    dept: "Bebidas",
    emoji: "🍊",
    tint: "from-orange-200 to-yellow-100",
  },
  {
    id: "coxinha",
    name: "Coxinha",
    desc: "Frango com catupiry",
    price: 9.5,
    dept: "Salgados",
    emoji: "🍗",
    tint: "from-yellow-100 to-amber-100",
  },
  {
    id: "brownie",
    name: "Brownie",
    desc: "Chocolate 70%",
    price: 10.5,
    dept: "Doces",
    emoji: "🍫",
    tint: "from-stone-300 to-amber-200",
  },
];

const MENU_DEPARTMENTS = ["Todos", "Padaria", "Salgados", "Cafés", "Doces", "Bebidas"];

type OrderStatus = "idle" | "sending" | "sent";

export function MenuModule() {
  const [dept, setDept] = useState("Todos");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [status, setStatus] = useState<OrderStatus>("idle");
  const [lastTotal, setLastTotal] = useState(0);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return MENU_PRODUCTS.filter((product) => {
      const matchesDept = dept === "Todos" || product.dept === dept;
      const matchesTerm =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.desc.toLowerCase().includes(term);
      return matchesDept && matchesTerm;
    });
  }, [dept, search]);

  const cartItems = useMemo(
    () => MENU_PRODUCTS.filter((product) => cart[product.id]),
    [cart]
  );

  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, quantity) => sum + quantity, 0),
    [cart]
  );

  const total = useMemo(
    () =>
      cartItems.reduce(
        (sum, product) => sum + product.price * (cart[product.id] ?? 0),
        0
      ),
    [cart, cartItems]
  );

  const add = (productId: string) => {
    setStatus((current) => (current === "sent" ? "idle" : current));
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }));
  };

  const remove = (productId: string) => {
    setCart((current) => {
      const next = { ...current };
      const quantity = (next[productId] ?? 0) - 1;
      if (quantity <= 0) delete next[productId];
      else next[productId] = quantity;
      return next;
    });
  };

  const sendOrder = () => {
    if (!totalItems || status === "sending") return;
    setLastTotal(total);
    setStatus("sending");
    window.setTimeout(() => {
      setCart({});
      setStatus("sent");
    }, 900);
  };

  return (
    <div className="animate-rise-in space-y-4">
      <PanelHeader
        eyebrow="Autoatendimento"
        title="Cardápio digital"
        action={<SoftBadge tone="warm">Mesa 07 · Comanda 042</SoftBadge>}
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 shadow-sm">
          <MagnifyingGlassIcon className="h-4 w-4 shrink-0 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar no cardápio..."
            className="w-full bg-transparent text-xs text-zinc-800 outline-none placeholder:text-zinc-400"
            aria-label="Buscar no cardápio"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-[10px] font-bold text-zinc-400 hover:text-zinc-700"
            >
              Limpar
            </button>
          )}
        </div>
        <div className="hidden items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-[10px] font-bold text-zinc-500 shadow-sm sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Cozinha conectada
        </div>
      </div>

      <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1">
        {MENU_DEPARTMENTS.map((department) => {
          const count =
            department === "Todos"
              ? MENU_PRODUCTS.length
              : MENU_PRODUCTS.filter((product) => product.dept === department).length;

          return (
            <button
              key={department}
              type="button"
              onClick={() => setDept(department)}
              className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-bold transition ${
                dept === department
                  ? "bg-artfood text-white shadow-sm"
                  : "bg-white text-zinc-500 ring-1 ring-zinc-200/70 hover:bg-zinc-50"
              }`}
            >
              {department}
              <span
                className={`rounded-md px-1.5 py-0.5 text-[9px] font-extrabold ${
                  dept === department
                    ? "bg-white/20 text-white"
                    : "bg-zinc-100 text-zinc-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {filtered.map((product) => {
            const quantity = cart[product.id] ?? 0;

            return (
              <article
                key={product.id}
                className={`relative flex flex-col rounded-2xl border bg-white p-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  quantity > 0 ? "border-artfood ring-1 ring-artfood/30" : "border-zinc-100"
                }`}
              >
                {quantity > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-artfood text-[10px] font-extrabold text-white shadow">
                    {quantity}
                  </span>
                )}

                <div
                  className={`flex h-16 items-center justify-center rounded-xl bg-gradient-to-br ${product.tint} text-3xl`}
                  aria-hidden="true"
                >
                  {product.emoji}
                </div>

                <div className="flex flex-1 flex-col pt-2">
                  <p className="text-xs font-extrabold leading-tight text-zinc-900">
                    {product.name}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-[10px] text-zinc-400">
                    {product.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-1 pt-2">
                    <span className="text-xs font-extrabold text-zinc-900">
                      {brl(product.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(product.id)}
                      aria-label={`Adicionar ${product.name} ao pedido`}
                      className="flex h-6 w-6 items-center justify-center rounded-lg bg-artfood text-white shadow-sm transition hover:scale-105 hover:bg-artfoodDark active:scale-95"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-zinc-200 bg-white p-8 text-center text-xs font-semibold text-zinc-400">
              Nenhum produto encontrado neste departamento.
            </div>
          )}
        </div>

        <aside className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-1.5 text-sm font-extrabold text-zinc-900">
              <ShoppingCartIcon className="h-4 w-4 text-artfood" />
              Pedido
            </h4>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold text-zinc-500">
              {totalItems} {totalItems === 1 ? "item" : "itens"}
            </span>
          </div>

          <div className="mt-3 max-h-[190px] flex-1 space-y-2 overflow-y-auto pr-1">
            {cartItems.length === 0 ? (
              <div className="flex h-full min-h-[120px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50/60 px-3 text-center">
                <ShoppingCartIcon className="mb-2 h-6 w-6 text-zinc-300" />
                <p className="text-[11px] font-semibold text-zinc-400">
                  Seu pedido está vazio. Toque em + para adicionar.
                </p>
              </div>
            ) : (
              cartItems.map((product) => (
                <div key={product.id} className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-50 text-base">
                    {product.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-bold text-zinc-800">
                      {product.name}
                    </p>
                    <p className="text-[10px] font-semibold text-zinc-400">
                      {brl(product.price * (cart[product.id] ?? 0))}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 rounded-lg border border-zinc-200 bg-white">
                    <button
                      type="button"
                      onClick={() => remove(product.id)}
                      aria-label={`Remover uma unidade de ${product.name}`}
                      className="p-1 text-zinc-500 transition hover:text-zinc-900"
                    >
                      <MinusIcon className="h-3 w-3" />
                    </button>
                    <span className="min-w-4 text-center text-[10px] font-extrabold text-zinc-900">
                      {cart[product.id]}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(product.id)}
                      aria-label={`Adicionar uma unidade de ${product.name}`}
                      className="p-1 text-zinc-500 transition hover:text-zinc-900"
                    >
                      <PlusIcon className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-3 border-t border-zinc-100 pt-3">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Total
              </span>
              <span className="text-lg font-black text-zinc-900">{brl(total)}</span>
            </div>

            {status === "sent" ? (
              <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-center">
                <CheckCircleIcon className="mx-auto h-6 w-6 text-emerald-600" />
                <p className="mt-1 text-[11px] font-extrabold text-emerald-700">
                  Pedido enviado para a cozinha!
                </p>
                <p className="text-[10px] font-semibold text-emerald-600">
                  Último pedido: {brl(lastTotal)}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 w-full rounded-lg bg-white py-1.5 text-[10px] font-extrabold text-emerald-700 shadow-sm transition hover:bg-emerald-100"
                >
                  Fazer novo pedido
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={sendOrder}
                disabled={totalItems === 0 || status === "sending"}
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-artfood py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-artfoodDark disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-400"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar pedido
                    <CheckCircleIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowPathIcon,
  ArrowRightIcon,
  BanknotesIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  CpuChipIcon,
  DeviceTabletIcon,
  LockOpenIcon,
  ReceiptPercentIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserGroupIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import { BreadMark } from "@/components/artfood/ArtFoodLogo";
import { ArtFoodDemo } from "@/components/artfood/ArtFoodDemo";

export const metadata: Metadata = {
  title: "Art Food | ArtSystem",
  description:
    "Conheça o Art Food: cardápio digital, atendimento de mesa, painel do garçom, balança e faturamento em uma única solução integrada ao ArtSystem.",
};

const OPERATIONS = [
  "Restaurantes",
  "Padarias",
  "Lanchonetes",
  "Cafeterias",
  "Pizzarias",
  "Bares",
  "Rotisserias",
  "Food halls",
  "Docerias",
  "Cozinhas industriais",
];

const FEATURES = [
  {
    Icon: Squares2X2Icon,
    title: "Cardápio digital",
    desc: "Produtos organizados por departamento, busca rápida, descrições e opções extras para montar o pedido sem erro.",
    accent:
      "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  },
  {
    Icon: UserGroupIcon,
    title: "Atendimento de mesa",
    desc: "Abra a comanda, lance os itens e acompanhe o consumo da mesa em tempo real, direto no tablet ou celular.",
    accent:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  },
  {
    Icon: ClipboardDocumentListIcon,
    title: "Painel do garçom",
    desc: "Comandas abertas, troca de produto, ajuste de quantidade e limpeza de comanda com poucos toques.",
    accent:
      "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  },
  {
    Icon: ScaleIcon,
    title: "Balança integrada",
    desc: "Leitura serial da balança, cálculo automático por quilo e lançamento do item direto na comanda.",
    accent:
      "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  },
  {
    Icon: BanknotesIcon,
    title: "Faturamento",
    desc: "Total do período, ticket médio, itens vendidos e desempenho de cada operador em uma visão clara.",
    accent:
      "bg-artfoodLight text-artfoodDark dark:bg-artfood/10 dark:text-artfood",
  },
  {
    Icon: ClockIcon,
    title: "Movimentação",
    desc: "Auditoria de cada inclusão, alteração ou remoção, com autor, data e hora. Histórico completo do dia.",
    accent:
      "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Configure o terminal",
    desc: "Escolha o modo de atendimento — mesa, comanda ou híbrido — e vincule o dispositivo à operação.",
  },
  {
    number: "02",
    title: "Abra o atendimento",
    desc: "O garçom ou o próprio cliente inicia o pedido pelo cardápio digital, com a comanda já identificada.",
  },
  {
    number: "03",
    title: "Lance os itens",
    desc: "Produtos, observações e itens pesados vão direto para a comanda, com total atualizado em tempo real.",
  },
  {
    number: "04",
    title: "Feche no caixa",
    desc: "A comanda chega ao Art PDV para pagamento, emissão fiscal e atualização do estoque.",
  },
];

const FAQS = [
  {
    question: "O Art Food substitui o Art PDV?",
    answer:
      "Não. Ele complementa o ecossistema: o Art Food cuida do atendimento no salão e envia as comandas para o PDV, que realiza o fechamento, o pagamento e a emissão fiscal.",
  },
  {
    question: "Funciona em quais dispositivos?",
    answer:
      "Em tablet, computador e celular. A interface se adapta ao tamanho da tela e pode ser usada tanto no autoatendimento quanto pelo garçom.",
  },
  {
    question: "Preciso usar balança?",
    answer:
      "Não. A balança é opcional e pode ser configurada apenas para produtos vendidos por peso, com leitura serial ou digitação manual do peso.",
  },
  {
    question: "Como funcionam os modos mesa e comanda?",
    answer:
      "O terminal pode operar somente com mesas, somente com comandas ou com os dois. O modo é definido pelas permissões do operador cadastradas na retaguarda.",
  },
  {
    question: "É possível saber quem alterou cada pedido?",
    answer:
      "Sim. A tela de Movimentação registra autor, data e hora de cada inclusão, alteração ou remoção de item, além de ações em comandas e cadastros.",
  },
  {
    question: "O Art Food tem controle de acesso por perfil?",
    answer:
      "Sim. Cada colaborador acessa apenas os módulos liberados para o seu perfil — garçom, mesa ou administrador — reduzindo riscos operacionais.",
  },
];

function HeroProductMock() {
  const shortcuts = [
    {
      Icon: Squares2X2Icon,
      title: "Atendimento de Mesa",
      desc: "Mesa 07 configurada",
      accent: "bg-artfoodLight text-artfoodDark",
    },
    {
      Icon: UserGroupIcon,
      title: "Painel do Garçom",
      desc: "3 comandas abertas",
      accent: "bg-zinc-100 text-zinc-600",
    },
    {
      Icon: ScaleIcon,
      title: "Balança",
      desc: "Venda por peso",
      accent: "bg-zinc-100 text-zinc-600",
    },
    {
      Icon: BanknotesIcon,
      title: "Faturamento",
      desc: "R$ 4.820,50 hoje",
      accent: "bg-zinc-100 text-zinc-600",
    },
  ];

  const bars = [32, 48, 70, 45, 82, 62, 94];

  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div
        className="absolute -inset-6 rounded-[42px] bg-custom1/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative rounded-[32px] border border-zinc-800 bg-zinc-950 p-2.5 shadow-2xl sm:p-3">
        <div className="overflow-hidden rounded-[24px] bg-slate-50">
          <div className="flex items-center justify-between border-b border-zinc-100 bg-white px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 shadow-inner">
                <BreadMark className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-extrabold leading-none text-zinc-900">
                  Art <span className="text-artfood">Food</span>
                </p>
                <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                  Portal do colaborador
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 text-[8px] font-extrabold uppercase tracking-wider text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Online
            </span>
          </div>

          <div className="space-y-3 p-3 sm:p-4">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 p-4 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_120%,rgba(198,115,90,0.4),transparent_60%)]" />
              <p className="relative text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                Bem-vindo de volta
              </p>
              <p className="relative mt-1 text-lg font-extrabold tracking-tight">
                Olá, Pedro! <span className="text-amber-400">Bom turno.</span>
              </p>
              <p className="relative mt-1 text-[10px] font-medium text-zinc-400">
                Mesa 07 configurada. Seu Art Food está pronto para atender.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {shortcuts.map(({ Icon, title, desc, accent }) => (
                <div
                  key={title}
                  className="rounded-xl border border-zinc-100 bg-white p-2.5 shadow-sm"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${accent}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-2 text-[10px] font-extrabold leading-tight text-zinc-900">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[8px] font-semibold text-zinc-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-100 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-extrabold text-zinc-800">
                  Vendas de hoje
                </p>
                <span className="flex items-center gap-1 text-[8px] font-bold text-emerald-600">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  ao vivo
                </span>
              </div>
              <div className="mt-2 flex h-14 items-end gap-1.5">
                {bars.map((height, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t-md ${
                      index === bars.length - 1
                        ? "bg-artfood"
                        : "bg-artfood/25"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-float-card absolute -right-2 top-20 hidden items-center gap-2 rounded-2xl border border-emerald-100 bg-white px-3 py-2.5 shadow-xl sm:flex">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircleIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[10px] font-extrabold text-zinc-900">
            Pedido enviado
          </p>
          <p className="text-[8px] font-semibold text-zinc-400">
            Cozinha · Mesa 07
          </p>
        </div>
      </div>

      <div className="animate-float-card-slow absolute -bottom-5 left-8 hidden rounded-2xl border border-zinc-100 bg-white p-3 shadow-xl sm:block">
        <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400">
          Comanda 042
        </p>
        <p className="mt-0.5 text-base font-black text-zinc-900">R$ 86,40</p>
        <div className="mt-1.5 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-artfood" />
          <span className="h-1.5 w-1.5 rounded-full bg-artfood/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-artfood/20" />
        </div>
      </div>
    </div>
  );
}

function FlowNode({
  Icon,
  title,
  subtitle,
  highlight = false,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border p-3.5 ${
        highlight
          ? "border-artfood/30 bg-artfoodLight dark:border-artfood/30 dark:bg-artfood/10"
          : "border-zinc-100 bg-white dark:border-zinc-700 dark:bg-[#1f1f1f]"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          highlight
            ? "bg-artfood text-white"
            : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-extrabold text-zinc-900 dark:text-white">
          {title}
        </p>
        <p className="text-[11px] font-semibold text-zinc-400">{subtitle}</p>
      </div>
    </div>
  );
}

function FlowConnector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 pl-6">
      <span className="relative h-8 w-px bg-gradient-to-b from-artfood/20 via-artfood/60 to-artfood/20">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-artfood" />
      </span>
      <span className="rounded-full bg-zinc-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:bg-zinc-800 dark:text-zinc-400">
        {label}
      </span>
    </div>
  );
}

export default function ArtFoodPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cover bg-[url('/img/backgroundLight.webp')] pb-16 pt-36 dark:bg-[url('/img/backgroundDark.webp')] lg:pb-24 lg:pt-48">
        <div
          className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-artfood/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-custom1/10 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-artfood/20 bg-artfoodLight px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-artfoodDark dark:border-artfood/30 dark:bg-artfood/10 dark:text-artfood">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-artfood" />
              Novo · Food Service
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white sm:text-5xl xl:text-6xl">
              Art Food: o sabor de uma operação{" "}
              <span className="text-custom1">sem complicação.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-300 sm:text-lg">
              Cardápio digital, atendimento de mesa, painel do garçom, balança e
              faturamento em uma única aplicação. Simples para a equipe, completa
              para a gestão e integrada ao ecossistema ArtSystem.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#demonstracao"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-custom1 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-custom1/20 transition hover:-translate-y-0.5 hover:bg-custom1/90"
              >
                <SparklesIcon className="h-4 w-4" />
                Experimentar a demonstração
              </Link>
              <a
                href="https://wa.me/5511917401730?text=Gostaria%20de%20conhecer%20o%20Art%20Food."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-gray-800 transition hover:border-artfood hover:text-artfood dark:border-zinc-700 dark:bg-[#171717]/80 dark:text-gray-200 dark:hover:border-artfood dark:hover:text-artfood"
              >
                Falar com um consultor
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-gray-200/70 pt-6 dark:border-zinc-700 sm:grid-cols-3">
              {[
                {
                  Icon: DeviceTabletIcon,
                  title: "Multi-dispositivo",
                  desc: "Tablet, celular e PC",
                },
                {
                  Icon: CpuChipIcon,
                  title: "100% integrado",
                  desc: "PDV",
                },
                {
                  Icon: WifiIcon,
                  title: "Tempo real",
                  desc: "Salão, cozinha e caixa",
                },
              ].map(({ Icon, title, desc }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-artfood" />
                  <p className="mt-1.5 text-xs font-extrabold text-gray-800 dark:text-gray-100">
                    {title}
                  </p>
                  <p className="text-[11px] font-medium text-gray-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeroProductMock />
        </Container>
      </section>

      <div className="w-screen border-y border-gray-100 bg-white/70 py-8 dark:border-zinc-800 dark:bg-[#171717]/70">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-gray-400">
              Feito para quem vive o dia a dia do salão
            </p>
            <div className="flex max-w-6xl flex-wrap justify-center gap-2">
              {OPERATIONS.map((operation) => (
                <span
                  key={operation}
                  className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold text-gray-600 shadow-sm dark:border-zinc-700 dark:bg-[#171717] dark:text-gray-300"
                >
                  {operation}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div
        id="recursos"
        className="w-screen scroll-mt-24 bg-[#F1F1F1] py-20 dark:bg-[#3D3D3D]"
      >
        <Container>
          <SectionTitle
            preTitle="Recursos"
            title="Tudo o que o seu atendimento precisa"
          >
            Do primeiro clique do cliente ao fechamento no caixa, o Art Food
            conecta salão, cozinha e gestão em uma experiência fluida — sem
            planilhas e sem retrabalho.
          </SectionTitle>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, desc, accent }) => (
              <div
                key={title}
                className="group rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-artfood/30 hover:shadow-xl dark:border-zinc-700 dark:bg-[#171717]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-105 ${accent}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div
        id="demonstracao"
        className="w-screen scroll-mt-24 bg-white py-20 dark:bg-trueGray-900"
      >
        <Container>
          <SectionTitle
            preTitle="Experimente agora"
            title="Veja o Art Food funcionando"
          >
            Esta é uma demonstração interativa montada com a mesma lógica do
            produto real. Navegue pelos módulos, monte um pedido, pese um
            produto e confira o faturamento.
          </SectionTitle>

          <div className="mx-auto mt-10 max-w-6xl">
            <ArtFoodDemo />
            <p className="mt-4 text-center text-[11px] font-medium text-gray-400">
              Demonstração interativa · Dados fictícios · Nenhuma informação é
              salva ou enviada.
            </p>
          </div>
        </Container>
      </div>

      <div
        id="integracao"
        className="w-screen scroll-mt-24 bg-[#F1F1F1] py-20 dark:bg-[#3D3D3D]"
      >
        <Container className="grid items-center gap-14 lg:grid-cols-2 xl:gap-20">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-custom1">
              Ecossistema ArtSystem
            </div>
            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl">
              Art Food na ponta, ArtSystem no controle.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-300 lg:text-lg">
              O Art Food opera integrado ao
              Art PDV. A comanda nasce no salão e
              percorre o caminho até o caixa sem digitação duplicada.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Vendas refletidas no estoque, no financeiro e nos relatórios.",
                "Rotinas fiscais e de pagamento continuam no Art PDV.",
                "Cadastros e permissões centralizados na retaguarda.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-artfood/10 text-artfood">
                    <CheckCircleIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pdv"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-gray-200"
              >
                Conhecer o Art PDV
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-artfood hover:text-artfood dark:border-zinc-600 dark:text-gray-200 dark:hover:border-artfood dark:hover:text-artfood"
              >
                Agendar uma apresentação
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl border border-zinc-200/80 bg-white p-5 shadow-xl dark:border-zinc-700 dark:bg-[#171717] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-zinc-400">
                Fluxo da operação
              </p>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Sincronizado
              </span>
            </div>

            <div className="mx-auto max-w-sm">
              <FlowNode
                Icon={DeviceTabletIcon}
                title="Art Food"
                subtitle="Atendimento no salão"
                highlight
              />
              <FlowConnector label="Pedidos em tempo real" />
              <FlowNode
                Icon={ReceiptPercentIcon}
                title="Art PDV"
                subtitle="Caixa, pagamento e fiscal"
              />
              <FlowConnector label="Integração com catraca" />
              <FlowNode
                Icon={LockOpenIcon}
                title="Catraca"
                subtitle="Liberação de comanda"
              />
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/60">
              <ShieldCheckIcon className="h-4 w-4 shrink-0 text-artfood" />
              <p className="text-[10px] font-semibold leading-relaxed text-zinc-500 dark:text-zinc-400">
                Permissões por operador e trilha de auditoria em todas as etapas
                do atendimento.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="como-funciona"
        className="w-screen scroll-mt-24 bg-white py-20 dark:bg-trueGray-900"
      >
        <Container>
          <SectionTitle
            preTitle="Implantação simples"
            title="Do primeiro login ao pedido na cozinha"
          >
            Uma rotina curta, pensada para a correria do food service. Sua
            equipe aprende rápido e o salão não para.
          </SectionTitle>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-[#171717]"
              >
                {index < STEPS.length - 1 && (
                  <span
                    className="absolute -right-3 top-9 hidden h-px w-6 bg-artfood/30 lg:block"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-artfood/20">
                    {step.number}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-artfoodLight text-artfood dark:bg-artfood/10">
                    {index === STEPS.length - 1 ? (
                      <CheckCircleIcon className="h-4 w-4" />
                    ) : (
                      <ArrowPathIcon className="h-4 w-4" />
                    )}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-5 rounded-2xl border border-artfood/20 bg-artfoodLight/60 p-6 dark:border-artfood/20 dark:bg-artfood/10 sm:flex-row">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-artfood text-white">
                <UserGroupIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-gray-900 dark:text-white">
                  Já usa ArtSystem no caixa?
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-300">
                  O Art Food se encaixa na sua operação atual e aproveita os
                  cadastros e permissões que você já possui.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/5511917401730?text=Quero%20saber%20mais%20sobre%20o%20Art%20Food."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-artfood px-5 py-3 text-sm font-bold text-white transition hover:bg-artfoodDark"
            >
              Quero saber mais
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </div>

      <div
        id="faq"
        className="w-screen scroll-mt-24 bg-[#F1F1F1] py-20 dark:bg-[#3D3D3D]"
      >
        <Container>
          <SectionTitle
            preTitle="Dúvidas frequentes"
            title="Tudo sobre o Art Food"
          >
            Respostas rápidas para as perguntas mais comuns de quem está
            avaliando o Art Food para o seu negócio.
          </SectionTitle>

          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-zinc-100 bg-white px-5 py-4 shadow-sm transition open:border-artfood/30 dark:border-zinc-700 dark:bg-[#171717]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-gray-800 dark:text-gray-100 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition group-open:rotate-45 group-open:bg-artfood group-open:text-white dark:bg-zinc-800 dark:text-zinc-300">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </div>

      <div className="w-screen bg-white py-20 dark:bg-trueGray-900">
        <Cta />
      </div>
    </>
  );
}

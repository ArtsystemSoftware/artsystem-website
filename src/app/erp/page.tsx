import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  CubeIcon,
  ReceiptPercentIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import imageErp from "@/img/erp.webp";
import imageErpHero from "@/img/imageSolucoes.webp";

export const metadata: Metadata = {
  title: "Art ERP | ArtSystem",
  description:
    "Conheça o Art ERP: gestão integrada para varejos e atacados, com controle de estoque, compras, financeiro, fiscal e carteira de clientes.",
};

const SEGMENTS = [
  "Hipermercados",
  "Supermercados",
  "Empórios",
  "Mercados de bairro",
  "Hortifrútis",
  "Importadoras",
  "Casas de carne",
  "Atacadistas",
  "Padarias",
  "Restaurantes",
  "Magazines",
  "Autopeças",
];

const FEATURES = [
  {
    Icon: CubeIcon,
    title: "Estoque e abastecimento",
    desc: "Controle o abastecimento das lojas, acompanhe o giro dos produtos e evite rupturas ou excesso de mercadoria.",
    accent: "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  },
  {
    Icon: ShoppingCartIcon,
    title: "Compras e fornecedores",
    desc: "Gerencie pedidos, cotações e o histórico de compras, mantendo seus principais fornecedores sempre à mão.",
    accent:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  },
  {
    Icon: BanknotesIcon,
    title: "Financeiro e fluxo de caixa",
    desc: "Integre o fluxo de caixa a instituições financeiras e acompanhe contas a pagar e a receber com clareza.",
    accent:
      "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  },
  {
    Icon: ReceiptPercentIcon,
    title: "Fiscal e obrigações",
    desc: "Atenda aos requerimentos fiscais do seu estado com um sistema em constante atualização e homologação.",
    accent: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
  },
  {
    Icon: UsersIcon,
    title: "Carteira de clientes",
    desc: "Centralize cadastros, histórico de compras e relacionamento para vender mais e melhor para cada cliente.",
    accent:
      "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  },
  {
    Icon: ArrowsRightLeftIcon,
    title: "Integração com o PDV",
    desc: "As vendas do caixa refletem em estoque, financeiro e relatórios em tempo real, sem retrabalho.",
    accent: "bg-custom1/10 text-custom1 dark:bg-custom1/10 dark:text-custom1",
  },
];

const BENEFITS = [
  "Controle do abastecimento das lojas e do giro de mercadorias.",
  "Gestão da carteira de clientes e do histórico de compras.",
  "Fluxo de caixa integrado a instituições financeiras.",
  "Atendimento aos requerimentos fiscais de cada estado.",
  "Informações consistentes para decidir com segurança.",
];

export default function ErpPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cover bg-[url('/img/backgroundLight.webp')] pb-16 pt-36 dark:bg-[url('/img/backgroundDark.webp')] lg:pb-24 lg:pt-48">
        <div
          className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-custom1/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-custom1/20 bg-custom1/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-custom1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-custom1" />
              Gestão empresarial
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white sm:text-5xl xl:text-6xl">
              Art ERP: o controle completo do{" "}
              <span className="text-custom1">seu negócio.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-300 sm:text-lg">
              Mais que um programa de gestão, o Art ERP ajuda a criar uma
              cultura de resultados. Estoque, compras, financeiro, fiscal e
              clientes integrados em uma única plataforma para varejos e
              atacados de todos os tamanhos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/5511917401730?text=Gostaria%20de%20conhecer%20o%20Art%20ERP."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-custom1 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-custom1/20 transition hover:-translate-y-0.5 hover:bg-custom1/90"
              >
                <SparklesIcon className="h-4 w-4" />
                Falar com um consultor
              </a>
              <Link
                href="/pdv"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-gray-800 transition hover:border-custom1 hover:text-custom1 dark:border-zinc-700 dark:bg-[#171717]/80 dark:text-gray-200 dark:hover:border-custom1 dark:hover:text-custom1"
              >
                Conhecer o Art PDV
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-gray-200/70 pt-6 dark:border-zinc-700 sm:grid-cols-3">
              {[
                {
                  Icon: ChartBarSquareIcon,
                  title: "Gestão integrada",
                  desc: "Estoque, compras e financeiro",
                },
                {
                  Icon: ShieldCheckIcon,
                  title: "Fiscal em dia",
                  desc: "Obrigações e homologações",
                },
                {
                  Icon: BuildingStorefrontIcon,
                  title: "Multi-loja",
                  desc: "Abastecimento e operação",
                },
              ].map(({ Icon, title, desc }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-custom1" />
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

          <div className="relative mx-auto w-full max-w-[540px]">
            <div
              className="absolute -inset-6 rounded-[42px] bg-custom1/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[32px] border border-zinc-200/80 bg-white p-2.5 shadow-2xl dark:border-zinc-700 dark:bg-[#171717] sm:p-3">
              <Image
                src={imageErpHero}
                alt="Art ERP em diferentes dispositivos"
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <div className="w-screen border-y border-gray-100 bg-white/70 py-8 dark:border-zinc-800 dark:bg-[#171717]/70">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-gray-400">
              Feito para a rotina do varejo e do atacado
            </p>
            <div className="flex max-w-6xl flex-wrap justify-center gap-2">
              {SEGMENTS.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold text-gray-600 shadow-sm dark:border-zinc-700 dark:bg-[#171717] dark:text-gray-300"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="w-screen bg-[#F1F1F1] py-20 dark:bg-[#3D3D3D]">
        <Container>
          <SectionTitle
            preTitle="Recursos"
            title="Tudo o que a sua gestão precisa"
          >
            Do cadastro do produto à tomada de decisão, o Art ERP conecta
            as áreas da empresa em uma única base de informações.
          </SectionTitle>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, desc, accent }) => (
              <div
                key={title}
                className="group rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-custom1/30 hover:shadow-xl dark:border-zinc-700 dark:bg-[#171717]"
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

      <div className="w-screen bg-white py-20 dark:bg-trueGray-900">
        <Container className="grid items-center gap-14 lg:grid-cols-2 xl:gap-20">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[32px] bg-custom1/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-xl dark:border-zinc-700">
              <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="ml-3 text-[10px] font-semibold text-zinc-400">
                  Art ERP · Consulta geral
                </span>
              </div>
              <Image
                src={imageErp}
                alt="Tela do Art ERP com consulta de produto, vendas e estoque"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-custom1">
              Completo e descomplicado
            </div>
            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl">
              Quem disse que é preciso ser complicado para ser completo?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-300 lg:text-lg">
              Com o Art ERP os usuários têm acesso a uma experiência de
              uso inédita em programas para a mesma finalidade. Através de uma
              interface gráfica intuitiva, o software eleva a produtividade da
              equipe e deixa mais tempo para o que importa: o negócio.
            </p>

            <ul className="mt-7 space-y-3">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-custom1/10 text-custom1">
                    <CheckCircleIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <div className="w-screen bg-[#F1F1F1] py-20 dark:bg-[#3D3D3D]">
        <Container className="grid items-center gap-14 lg:grid-cols-2 xl:gap-20">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-custom1">
              Ecossistema ArtSystem
            </div>
            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl">
              ERP e PDV trabalhando juntos.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-300 lg:text-lg">
              O Art ERP é o cérebro da operação; o Art PDV é a ponta
              do atendimento. Juntos, eliminam retrabalho e mantêm estoque,
              caixa e fiscal sincronizados em tempo real.
            </p>

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
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-custom1 hover:text-custom1 dark:border-zinc-600 dark:text-gray-200 dark:hover:border-custom1 dark:hover:text-custom1"
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

            <div className="mx-auto max-w-sm space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-custom1/30 bg-custom1/5 p-3.5 dark:border-custom1/30 dark:bg-custom1/10">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-custom1 text-white">
                  <ChartBarSquareIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-zinc-900 dark:text-white">
                    Art ERP
                  </p>
                  <p className="text-[11px] font-semibold text-zinc-400">
                    Retaguarda, estoque e gestão
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-6">
                <span className="relative h-8 w-px bg-gradient-to-b from-custom1/20 via-custom1/60 to-custom1/20">
                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-custom1" />
                </span>
                <span className="rounded-full bg-zinc-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:bg-zinc-800 dark:text-zinc-400">
                  Dados em tempo real
                </span>
              </div>

              <Link
                href="/pdv"
                className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-3.5 transition hover:border-custom1/30 dark:border-zinc-700 dark:bg-[#1f1f1f]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  <ArrowsRightLeftIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-zinc-900 dark:text-white">
                    Art PDV
                  </p>
                  <p className="text-[11px] font-semibold text-zinc-400">
                    Caixa, pagamento e fiscal
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/60">
              <ShieldCheckIcon className="h-4 w-4 shrink-0 text-custom1" />
              <p className="text-[10px] font-semibold leading-relaxed text-zinc-500 dark:text-zinc-400">
                Cadastros centralizados na retaguarda e permissões por operador
                em todas as etapas.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-screen bg-white py-20 dark:bg-trueGray-900">
        <Cta />
      </div>
    </>
  );
}

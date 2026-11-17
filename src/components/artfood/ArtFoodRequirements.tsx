import type { ComponentType } from "react";
import {
  CheckCircleIcon,
  CpuChipIcon,
  DeviceTabletIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

type Requirement = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  tagClass: string;
  iconClass: string;
  description: string;
  items: string[];
};

const REQUIREMENTS: Requirement[] = [
  {
    Icon: CpuChipIcon,
    title: "Servidor local",
    tag: "Hospedagem própria",
    tagClass:
      "border-artfood/20 bg-artfoodLight text-artfoodDark dark:border-artfood/30 dark:bg-artfood/10 dark:text-artfood",
    iconClass:
      "bg-artfoodLight text-artfoodDark dark:bg-artfood/10 dark:text-artfood",
    description:
      "Servidor local Windows",
    items: [
      "Windows 10/11 64 bits",
      "Processador Intel Core i3, AMD Ryzen 3 ou equivalente",
      "8GB RAM",
      "10 GB de espaço livre em disco (SSD recomendado)",
      "IP fixo ou reserva DHCP na rede local",
    ],
  },
  {
    Icon: DeviceTabletIcon,
    title: "Estações de atendimento",
    tag: "Sem instalação",
    tagClass:
      "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300",
    iconClass:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    description:
      "Tablets, celulares e computadores usados pelo salão, garçons e caixa.",
    items: [
      "Navegador atualizado — Chrome recomendado",
      "Tela de 10 polegadas ou maior para tablets",
      "Câmera para leitura do QR Code da comanda (opcional)",
      "Conexão com a mesma rede do servidor do Art Food",
      "Nenhum aplicativo precisa ser instalado no dispositivo",
    ],
  }
];

export function ArtFoodRequirements() {
  return (
    <div
      id="requisitos"
      className="w-screen scroll-mt-24 bg-[#FBF7F4] py-20 dark:bg-[#2A2421]"
    >
      <Container>
        <SectionTitle
          preTitle="Requisitos técnicos"
          title="O que você precisa para rodar o Art Food"
        >
          O Art Food é uma aplicação web: os dispositivos de atendimento
          acessam pelo navegador, sem instalação. As especificações abaixo são
          recomendações para uma operação estável e podem variar conforme o
          número de terminais e o volume de vendas.
        </SectionTitle>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
          {REQUIREMENTS.map(
            ({ Icon, title, tag, tagClass, iconClass, description, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-[#1F1F1F]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${tagClass}`}
                  >
                    {tag}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-artfood" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-3 rounded-2xl border border-artfood/20 bg-white/80 p-5 dark:border-artfood/20 dark:bg-[#1F1F1F]/80 sm:flex-row sm:items-start">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-artfoodLight text-artfood dark:bg-artfood/10">
            <ShieldCheckIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-gray-900 dark:text-white">
              Balança e câmera são opcionais
            </p>
            <p className="mt-1 text-xs font-medium leading-relaxed text-gray-500 dark:text-gray-300">
              Sem a balança, o peso pode ser digitado manualmente. Sem a câmera,
              a comanda pode ser identificada pelo código. A impressão fiscal e
              o pagamento continuam no Art PDV.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

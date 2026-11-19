import type { Metadata } from "next";
import { ManualFrame } from "./ManualFrame";

export const metadata: Metadata = {
  title: "Recebimento de Convênio no Caixa | ArtSystem",
  description:
    "Aprenda a receber convênios direto no PDV: como liberar a função no AS_ERP, identificar o conveniado e fazer a baixa no caixa.",
};

export default function RecebimentoConvenioPage() {
  return (
    <div className="w-screen pt-32 px-4 lg:pt-52 lg:px-20 bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')] bg-cover bg-repeat-y bg-center">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700">
          <ManualFrame />
        </div>
      </div>
    </div>
  );
}

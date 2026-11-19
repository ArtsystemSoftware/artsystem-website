"use client";

import { useCallback, useRef } from "react";

const MANUAL_URL = "/manuais/recebimento-convenio.html";

/**
 * Exibe o manual (HTML) em um iframe e impede que os cliques nos links de
 * âncora internos (#secao) rolem a página pai.
 *
 * O navegador, ao navegar/focar uma âncora dentro do iframe, tende a rolar o
 * documento externo para "revelar" o iframe. Aqui interceptamos esses cliques
 * (mesma origem) e rolamos apenas o conteúdo interno do iframe.
 */
export function ManualFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const handleLoad = useCallback(() => {
    cleanupRef.current?.();
    cleanupRef.current = null;

    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;
    const win = iframe?.contentWindow;
    if (!doc || !win) return;

    const findLink = (event: Event) => {
      const el = event.target as HTMLElement | null;
      return (el?.closest?.('a[href^="#"]') as HTMLAnchorElement | null) ?? null;
    };

    // Evita que o link receba foco (o foco é o que faz o navegador rolar a
    // página externa para trazer o iframe à vista).
    const onMouseDown = (event: MouseEvent) => {
      if (findLink(event)) event.preventDefault();
    };

    const onClick = (event: MouseEvent) => {
      const link = findLink(event);
      if (!link) return;

      const id = decodeURIComponent((link.getAttribute("href") || "").slice(1));
      const section = id ? doc.getElementById(id) : null;
      if (!section) return;

      // Cancela a navegação padrão (que rolaria a página externa).
      event.preventDefault();

      // Rola somente o conteúdo interno do iframe.
      const top = section.getBoundingClientRect().top + win.scrollY - 20;
      win.scrollTo({ top, behavior: "smooth" });
    };

    doc.addEventListener("mousedown", onMouseDown, true);
    doc.addEventListener("click", onClick, true);

    cleanupRef.current = () => {
      doc.removeEventListener("mousedown", onMouseDown, true);
      doc.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={MANUAL_URL}
      onLoad={handleLoad}
      title="Recebimento de Convênio no Caixa - AS_ERP / PDV"
      className="h-[calc(100vh-10rem)] min-h-[600px] w-full lg:h-[calc(100vh-16rem)]"
    />
  );
}

import type { ReactNode } from "react";

export function PanelHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-artfood">
          {eyebrow}
        </p>
        <h3 className="mt-0.5 text-lg font-extrabold leading-tight text-zinc-900 sm:text-xl">
          {title}
        </h3>
      </div>
      {action}
    </div>
  );
}

export function SoftBadge({
  children,
  tone = "zinc",
}: {
  children: ReactNode;
  tone?: "zinc" | "green" | "warm";
}) {
  const tones = {
    zinc: "bg-zinc-100 text-zinc-500 border-zinc-200/60",
    green: "bg-emerald-50 text-emerald-700 border-emerald-100",
    warm: "bg-artfoodLight text-artfoodDark border-artfood/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

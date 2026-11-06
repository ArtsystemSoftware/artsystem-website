export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const formatWeight = (value: number) =>
  value.toFixed(3).replace(".", ",");

type BreadMarkProps = {
  className?: string;
};

/**
 * Marca do Art Food: pão estilizado, usado no site e na demonstração.
 * Desenhado em SVG para acompanhar qualquer tamanho e tema.
 */
export function BreadMark({ className = "w-8 h-8" }: BreadMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.5 26.5C13.5 18.5 21.8 13 32 13s18.5 5.5 18.5 13.5c0 3.2-2.4 5.5-5.6 5.5H19.1c-3.2 0-5.6-2.3-5.6-5.5Z"
        fill="#C6735A"
      />
      <path
        d="M17.8 31h28.4v12.2c0 4.2-3.4 7.6-7.6 7.6H25.4c-4.2 0-7.6-3.4-7.6-7.6V31Z"
        fill="#E7A48D"
      />
      <path
        d="M24 20.5 22.1 30M32 18.5V30M40 20.5l1.9 9.5"
        stroke="#FFF6F1"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity=".85"
      />
      <path
        d="M20 38.5c2.8 1.7 5 2.2 7.4 2.2 2.6 0 5.2-.8 9.2-2.2 3.4 1.3 5.8 2.2 9.3 2.2"
        stroke="#F7C9B8"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity=".85"
      />
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
};

export function ArtFoodWordmark({ className = "" }: WordmarkProps) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      Art <span className="text-artfood">Food</span>
    </span>
  );
}

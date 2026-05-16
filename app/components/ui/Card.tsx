interface CardProps {
  children: React.ReactNode;
  className?: string;
  tint?: "peach" | "rose" | "mint" | "lavender" | "sky" | "yellow" | "yellow-bold" | "cream";
}

const tintMap: Record<string, string> = {
  peach: "bg-tint-peach",
  rose: "bg-tint-rose",
  mint: "bg-tint-mint",
  lavender: "bg-tint-lavender",
  sky: "bg-tint-sky",
  yellow: "bg-tint-yellow",
  "yellow-bold": "bg-tint-yellow-bold",
  cream: "bg-tint-cream",
};

export default function Card({ children, className = "", tint }: CardProps) {
  const base = tint
    ? `${tintMap[tint]} rounded-[12px] p-8`
    : "bg-canvas border border-hairline rounded-[12px] p-6";

  return <div className={`${base} ${className}`}>{children}</div>;
}

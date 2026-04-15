type Props = {
  label: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
  tone?: "dark" | "light";
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function Placeholder({
  label,
  aspect = "video",
  className = "",
  tone = "dark",
}: Props) {
  const base =
    tone === "dark"
      ? "bg-charcoal text-offwhite border-amber/60"
      : "bg-offwhite-dark text-charcoal border-charcoal/40";
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative w-full ${aspectClass[aspect]} ${base} border border-dashed flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(45deg,_currentColor_0_1px,_transparent_1px_10px)]" />
      <div className="relative px-6 py-4 text-center">
        <div className="text-[10px] uppercase tracking-[0.22em] opacity-60">
          Photo placeholder
        </div>
        <div className="mt-2 font-serif text-sm md:text-base max-w-sm">
          {label}
        </div>
      </div>
    </div>
  );
}

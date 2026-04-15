type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  as = "h2",
}: Props) {
  const Tag = as;
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleCls = tone === "dark" ? "text-offwhite" : "text-charcoal";
  const ledeCls =
    tone === "dark" ? "text-offwhite/75 font-normal" : "text-charcoal/70 font-normal";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      {/* font-serif = Oswald via CSS variable; text-transform already uppercase in globals */}
      <Tag className={`font-serif leading-[1.05] ${titleCls}`}>{title}</Tag>
      {lede && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${ledeCls}`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

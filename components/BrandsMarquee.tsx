const BRANDS = [
  "KNAUF",
  "CERESIT",
  "TYTAN",
  "ALINEX",
  "ALIT",
  "ИЗОСПАН",
  "TECHNONICOL",
  "URSA",
];

export default function BrandsMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-black/5 bg-[var(--color-cream)] py-7 md:py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 mb-5 md:mb-8 flex items-baseline justify-between gap-4">
        <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)]">
          На складе
        </div>
        <div className="text-[10px] md:text-xs text-[var(--color-olive)] text-right">
          и десятки других брендов
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[var(--color-cream)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[var(--color-cream)] to-transparent z-10" />
        <div className="flex marquee gap-10 md:gap-16 w-max">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-2xl md:text-3xl lg:text-5xl text-[var(--color-ink)]/55 hover:text-[var(--color-ink)] transition-colors whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

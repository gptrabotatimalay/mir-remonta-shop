import { PRODUCTS } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function PopularStrip() {
  const popular = PRODUCTS.filter(
    (p) => p.badge === "Хит" || p.badge === "Акция",
  ).slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream-dark)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-3 md:mb-4">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
              Сейчас популярно
            </div>
            <h2
              className="font-display leading-[1] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
            >
              Хиты и акции
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
          {popular.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

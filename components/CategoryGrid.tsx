import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section
      id="categories"
      className="py-16 md:py-24 lg:py-32 bg-[var(--color-cream)] scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 md:gap-6 mb-8 md:mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4 md:mb-6">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
              Категории
            </div>
            <h2
              className="font-display leading-[1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              Что вам сегодня
              <br />
              <span className="italic text-[var(--color-clay)]">
                нужно для стройки?
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4">
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/catalog/${cat.id}`}
                className="group relative overflow-hidden rounded-2xl bg-[var(--color-ink)] aspect-[4/5] md:aspect-[5/4] active:scale-[0.98] transition-transform"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                <div className="absolute top-3 md:top-5 right-3 md:right-5 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-cream)]/15 backdrop-blur-md flex items-center justify-center text-[var(--color-cream)] group-hover:bg-[var(--color-ochre)] group-hover:text-[var(--color-ink)] transition-all duration-500">
                  <ArrowUpRight
                    size={14}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-[var(--color-cream)]">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ochre)] mb-1">
                    {count} товаров
                  </div>
                  <h3 className="font-display text-lg md:text-2xl lg:text-3xl leading-tight">
                    {cat.title}
                  </h3>
                  <div className="hidden md:block text-[13px] text-[var(--color-cream)]/75 mt-1">
                    {cat.subtitle}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

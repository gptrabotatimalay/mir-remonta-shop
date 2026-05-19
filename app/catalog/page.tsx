import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Каталог — Мир Ремонта Семей",
  description:
    "Каталог стройматериалов в Семее: цемент, профнастил, ламинат, фанера, ОСБ, двери. Цены, наличие, доставка.",
};

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-12 bg-[var(--color-cream)]">
          <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-6">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
              Каталог
            </div>
            <h1
              className="font-display leading-[1] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
            >
              {PRODUCTS.length} позиций
              <br />
              <span className="italic text-[var(--color-clay)]">
                на складе.
              </span>
            </h1>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] sticky top-16 md:top-20 z-30 border-y border-black/5 backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 py-3 flex gap-2 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={`/catalog/${c.id}`}
                className="shrink-0 px-4 py-2 rounded-full border border-[var(--color-ink)]/15 text-[13px] md:text-sm whitespace-nowrap hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </section>

        {CATEGORIES.map((cat) => {
          const products = PRODUCTS.filter((p) => p.category === cat.id);
          if (products.length === 0) return null;
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="py-12 md:py-16 bg-[var(--color-cream)] scroll-mt-32 odd:bg-[var(--color-cream-dark)]"
            >
              <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
                <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
                  <div>
                    <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[var(--color-olive)] mb-2">
                      {cat.subtitle}
                    </div>
                    <h2
                      className="font-display leading-[1] tracking-tight"
                      style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
                    >
                      {cat.title}
                    </h2>
                  </div>
                  <Link
                    href={`/catalog/${cat.id}`}
                    className="hidden sm:inline-flex items-center gap-1.5 text-[13px] md:text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ochre-dark)]"
                  >
                    Все {products.length} <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
      <CartBar />
    </>
  );
}

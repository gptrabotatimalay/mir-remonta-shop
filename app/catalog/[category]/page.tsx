import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  return {
    title: cat ? `${cat.title} — Мир Ремонта Семей` : "Каталог",
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) notFound();
  const products = PRODUCTS.filter((p) => p.category === category);

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 md:pt-36 pb-8 md:pb-12 bg-[var(--color-cream)]">
          <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-olive)] hover:text-[var(--color-ink)] mb-6"
            >
              <ChevronLeft size={14} /> Все категории
            </Link>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[var(--color-olive)] mb-3">
              {cat.subtitle}
            </div>
            <h1
              className="font-display leading-[1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 6.5vw, 5rem)" }}
            >
              {cat.title}
            </h1>
            <p className="mt-4 text-[var(--color-olive)] text-[15px] md:text-base">
              {products.length} позиций в наличии
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] sticky top-16 md:top-20 z-30 border-y border-black/5 backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 py-3 flex gap-2 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={`/catalog/${c.id}`}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] md:text-sm whitespace-nowrap transition-colors ${
                  c.id === category
                    ? "bg-[var(--color-ink)] text-[var(--color-cream)]"
                    : "border border-[var(--color-ink)]/15 hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]"
                }`}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-14 bg-[var(--color-cream)]">
          <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartBar />
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, getProduct } from "@/lib/data";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  return {
    title: p ? `${p.title} — Мир Ремонта` : "Товар",
    description: p?.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = CATEGORIES.find((c) => c.id === product.category);
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 4);

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
          <nav className="text-[13px] text-[var(--color-olive)] mb-6 md:mb-10 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[var(--color-ink)]">
              Главная
            </Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-[var(--color-ink)]">
              Каталог
            </Link>
            {category && (
              <>
                <span>/</span>
                <Link
                  href={`/catalog/${category.id}`}
                  className="hover:text-[var(--color-ink)]"
                >
                  {category.title}
                </Link>
              </>
            )}
          </nav>

          <ProductDetail product={product} />

          {related.length > 0 && (
            <section className="mt-16 md:mt-24">
              <div className="flex items-end justify-between mb-6 md:mb-8">
                <h2
                  className="font-display leading-[1] tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
                >
                  Смотрите также
                </h2>
                {category && (
                  <Link
                    href={`/catalog/${category.id}`}
                    className="text-[13px] md:text-sm text-[var(--color-olive)] hover:text-[var(--color-ink)] inline-flex items-center gap-1"
                  >
                    <ChevronLeft size={14} className="rotate-180" /> Все из «
                    {category.title}»
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <CartBar />
    </>
  );
}

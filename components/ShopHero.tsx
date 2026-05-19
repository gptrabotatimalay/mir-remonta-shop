import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function ShopHero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden grain"
      style={{ minHeight: "min(680px, 92svh)" }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Склад стройматериалов"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)]/75 via-[var(--color-ink)]/35 to-[var(--color-ink)]/90 md:from-[var(--color-cream)]/80 md:via-[var(--color-ink)]/25 md:to-[var(--color-ink)]/80" />
      </div>

      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto w-full px-5 md:px-6 lg:px-10 pt-24 md:pt-32 pb-10 md:pb-16">
        <div className="flex flex-col gap-6 md:gap-9 w-full max-w-3xl">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-ink)]/75">
            <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/40" />
            Интернет-магазин · {COMPANY.city}
          </div>

          <h1
            className="font-display leading-[1] tracking-tight text-[var(--color-cream)]"
            style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
          >
            <span className="text-[var(--color-ink)]">Стройка</span>
            <br />
            <span className="italic">в один клик</span>
          </h1>

          <p
            className="text-[15px] md:text-lg text-[var(--color-cream)] max-w-md leading-relaxed"
            style={{ textShadow: "0 1px 12px rgba(26,26,24,0.5)" }}
          >
            Соберите заказ из каталога, отправьте в WhatsApp — менеджер
            подтвердит, посчитает доставку и привезёт на объект.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] font-medium text-[15px] active:scale-[0.98] hover:bg-[var(--color-cream)] transition-all"
            >
              <ShoppingBag size={18} /> Открыть каталог
              <ArrowRight size={16} />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full border border-[var(--color-cream)]/50 text-[var(--color-cream)] font-medium text-[15px] active:scale-[0.98] hover:bg-[var(--color-cream)] hover:text-[var(--color-ink)] hover:border-[var(--color-cream)] transition-all"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[var(--color-cream)]/15 bg-[var(--color-ink)]/60 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 text-[var(--color-cream)]">
          {[
            { v: "1 час", l: "доставка" },
            { v: "30+", l: "товаров онлайн" },
            { v: "−15%", l: "опт от 100 000 ₸" },
            { v: "0 ₸", l: "при самовывозе" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`py-4 md:py-6 px-1 lg:px-4 border-[var(--color-cream)]/10 ${
                i < 2 ? "border-b lg:border-b-0" : ""
              } ${i % 2 === 0 ? "border-r" : "lg:border-r"} ${
                i === 3 ? "lg:border-r-0" : ""
              }`}
            >
              <div
                className="font-display text-[var(--color-ochre)] leading-none"
                style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)" }}
              >
                {s.v}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest mt-1.5 md:mt-2 opacity-75">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

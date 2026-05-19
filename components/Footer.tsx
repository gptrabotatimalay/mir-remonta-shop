import Link from "next/link";
import { COMPANY, CATEGORIES } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)]/70 border-t border-[var(--color-cream)]/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
        <div className="col-span-2 lg:col-span-4">
          <div className="mb-5 md:mb-6">
            <Logo className="h-12 md:h-14 text-[var(--color-cream)]" />
            <div className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-cream)]/55">
              Семей
            </div>
          </div>
          <p className="text-[14px] md:text-sm leading-relaxed max-w-xs">
            Магазин стройматериалов с собственным складом в Семее.
            <br />
            <span className="text-[var(--color-ochre)]">
              «{COMPANY.tagline}»
            </span>
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-cream)]/45 mb-3 md:mb-4">
            Каталог
          </div>
          <ul className="space-y-2 text-[14px] md:text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link href={`/catalog/${c.id}`}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-cream)]/45 mb-3 md:mb-4">
            Покупателям
          </div>
          <ul className="space-y-2 text-[14px] md:text-sm">
            <li>
              <Link href="/how-to-buy">Как купить</Link>
            </li>
            <li>
              <Link href="/delivery">Доставка и оплата</Link>
            </li>
            <li>
              <Link href="/about">О компании</Link>
            </li>
            <li>
              <Link href="/about#requisites">Реквизиты</Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-cream)]/45 mb-3 md:mb-4">
            Контакты
          </div>
          <ul className="space-y-2 text-[14px] md:text-sm">
            <li>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </li>
            <li className="break-words">{COMPANY.email}</li>
            <li>{COMPANY.address}</li>
            <li>{COMPANY.hours}</li>
            <li className="flex gap-3 pt-1">
              <a href={COMPANY.instagram}>Instagram</a>
              <span className="opacity-30">·</span>
              <a href={COMPANY.whatsapp}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-cream)]/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 py-5 md:py-6 flex flex-col md:flex-row justify-between text-[11px] md:text-xs text-[var(--color-cream)]/45 gap-2">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. Все права защищены.
          </div>
          <div>Магазин · доставка по Семею</div>
        </div>
      </div>
    </footer>
  );
}

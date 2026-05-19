"use client";

import Link from "next/link";
import { Phone, Menu, X, ShoppingBag } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useState, useEffect } from "react";
import { COMPANY, CATEGORIES } from "@/lib/data";
import { useCart } from "@/lib/store";
import Logo from "./Logo";
import InstagramIcon from "./InstagramIcon";

const NAV = [
  { href: "/catalog", label: "Каталог" },
  { href: "/how-to-buy", label: "Как купить" },
  { href: "/delivery", label: "Доставка и оплата" },
  { href: "/about", label: "О компании" },
  { href: "/#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const count = useCart((s) => s.items.length);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-cream)]/95 backdrop-blur-xl border-b border-black/5"
          : "bg-[var(--color-cream)]/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 md:gap-3 group shrink-0"
        >
          <Logo className="h-10 md:h-11 text-[var(--color-ink)]" />
          <div className="leading-tight border-l border-[var(--color-ink)]/15 pl-2.5 md:pl-3 hidden sm:block">
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[var(--color-olive)]">
              Семей
            </div>
            <div className="text-[11px] md:text-xs text-[var(--color-olive)]/80">
              Чайковского 71А
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ochre-dark)] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-ochre)] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-3">
          <a
            href={COMPANY.phoneHref}
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[var(--color-ochre-dark)] transition-colors"
          >
            <Phone size={16} />
            {COMPANY.phone}
          </a>

          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white active:scale-95 transition-transform"
          >
            <WhatsAppIcon size={16} />
          </a>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-instagram text-white active:scale-95 transition-transform"
          >
            <InstagramIcon size={16} />
          </a>

          <Link
            href="/cart"
            aria-label="Корзина"
            className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] active:scale-95 transition-transform"
          >
            <ShoppingBag size={18} />
            {mounted && count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] text-[11px] font-semibold">
                {count}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)] active:scale-95 transition-transform"
            aria-label="Меню"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-cream)] border-t border-black/5 px-5 py-7 flex flex-col gap-1 max-h-[calc(100vh-64px)] overflow-y-auto">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl py-3 border-b border-black/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 mb-1 text-[11px] uppercase tracking-[0.2em] text-[var(--color-olive)]">
            Категории
          </div>
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/catalog/${c.id}`}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-black/5 text-[var(--color-ink-soft)]"
            >
              {c.title}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-5">
            <a
              href={COMPANY.phoneHref}
              className="w-full flex items-center justify-center gap-2 h-12 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsapp}
              className="w-full flex items-center justify-center gap-2 h-12 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] font-medium"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

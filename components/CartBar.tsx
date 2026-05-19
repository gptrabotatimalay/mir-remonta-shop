"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart, useCartTotals } from "@/lib/store";
import { COMPANY } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";
import InstagramIcon from "./InstagramIcon";

export default function CartBar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const items = useCart((s) => s.items);
  const { formattedTotal } = useCartTotals();
  const positionsCount = items.length;

  useEffect(() => setMounted(true), []);

  const hasItems = mounted && items.length > 0;
  const onCart = pathname === "/cart";

  return (
    <>
      {/* MOBILE — нижняя панель: всегда «Позвонить» + «WhatsApp», над ней корзина если есть */}
      <div
        className="md:hidden fixed left-0 right-0 z-40 px-3 flex flex-col gap-2 pointer-events-none"
        style={{ bottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        {hasItems && !onCart && (
          <Link
            href="/cart"
            className="pointer-events-auto flex items-center justify-between gap-3 h-14 px-2 pr-5 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] shadow-[0_8px_30px_rgba(0,0,0,0.3)] active:scale-[0.98] transition-transform"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="relative w-11 h-11 flex items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-ochre)] shrink-0">
                <ShoppingBag size={18} />
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full bg-[var(--color-rust)] text-[var(--color-cream)] text-[11px] font-semibold">
                  {positionsCount}
                </span>
              </span>
              <span className="font-medium text-[14px] truncate">
                В корзину
              </span>
            </span>
            <span className="font-display text-lg shrink-0">
              {formattedTotal}
            </span>
          </Link>
        )}
        <div className="pointer-events-auto flex gap-2">
          <a
            href={COMPANY.phoneHref}
            className="flex-1 flex items-center justify-center gap-2 h-[52px] rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium text-[14px] ring-1 ring-[var(--color-cream)]/35 shadow-[0_8px_30px_rgba(0,0,0,0.3)] active:scale-[0.98] transition-transform"
          >
            <Phone size={16} /> Позвонить
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse flex-1 flex items-center justify-center gap-2 h-[52px] rounded-full bg-[#25D366] text-white font-medium text-[14px] active:scale-[0.98] transition-transform"
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
        </div>
      </div>

      {/* DESKTOP — плавающие круги справа + центральная корзина если есть */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-40 flex-col gap-3">
        <a
          href={COMPANY.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="bg-instagram w-14 h-14 flex items-center justify-center rounded-full text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-transform"
        >
          <InstagramIcon size={22} />
        </a>
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="wa-pulse w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-105 active:scale-95 transition-transform"
        >
          <WhatsAppIcon size={24} />
        </a>
        <a
          href={COMPANY.phoneHref}
          aria-label="Позвонить"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] ring-1 ring-[var(--color-cream)]/30 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-transform"
        >
          <Phone size={20} />
        </a>
      </div>

      {hasItems && !onCart && (
        <Link
          href="/cart"
          className="hidden md:flex fixed left-1/2 -translate-x-1/2 bottom-6 z-40 items-center justify-between gap-3 h-16 px-2 pr-5 min-w-[380px] max-w-md rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-[var(--color-ink)]/10 active:scale-[0.98] transition-transform"
        >
          <span className="flex items-center gap-3">
            <span className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-ochre)]">
              <ShoppingBag size={18} />
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full bg-[var(--color-rust)] text-[var(--color-cream)] text-[11px] font-semibold">
                {positionsCount}
              </span>
            </span>
            <span className="font-medium text-[15px]">В корзину</span>
          </span>
          <span className="font-display text-xl text-[var(--color-ink)]">
            {formattedTotal}
          </span>
        </Link>
      )}
    </>
  );
}

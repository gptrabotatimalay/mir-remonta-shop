"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Phone, MessageCircle, Truck } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/store";
import { COMPANY, formatTenge } from "@/lib/data";
import type { Product } from "@/lib/types";
import QtyInput from "./QtyInput";

export default function ProductDetail({ product }: { product: Product }) {
  const [pendingQty, setPendingQty] = useState(1);
  const item = useCart((s) => s.items.find((i) => i.slug === product.slug));
  const add = useCart((s) => s.add);
  const setQty = useCart((s) => s.setQty);
  const inCart = item?.qty ?? 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
      <div className="lg:col-span-7">
        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-ink)]/5">
          <Image
            src={product.image}
            alt={product.title}
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          {product.badge && (
            <span
              className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-wider ${
                product.badge === "Акция"
                  ? "bg-[var(--color-rust)] text-[var(--color-cream)]"
                  : product.badge === "Новинка"
                    ? "bg-[var(--color-ink)] text-[var(--color-cream)]"
                    : "bg-[var(--color-ochre)] text-[var(--color-ink)]"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="lg:col-span-5">
        {product.brand && (
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-olive)] mb-3">
            {product.brand}
          </div>
        )}
        <h1
          className="font-display leading-[1.05] tracking-tight mb-5"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
        >
          {product.title}
        </h1>

        <div className="flex items-baseline gap-3 mb-5">
          <span className="font-display text-3xl md:text-5xl text-[var(--color-ink)]">
            {formatTenge(product.price)}
          </span>
          <span className="text-[15px] text-[var(--color-olive)]">
            / {product.unit}
          </span>
          {product.oldPrice && (
            <span className="text-[15px] text-[var(--color-olive)]/60 line-through">
              {formatTenge(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 mb-3 mt-7 flex-wrap">
          <span className="text-[14px] text-[var(--color-olive)]">
            Количество:
          </span>
          <div className="w-44">
            <QtyInput
              value={pendingQty}
              unit={product.unit}
              onChange={(v) => setPendingQty(Math.max(1, v))}
            />
          </div>
        </div>

        <div className="text-[13px] text-[var(--color-olive)] mb-6">
          Итого:{" "}
          <strong className="text-[var(--color-ink)] text-[15px]">
            {formatTenge(product.price * pendingQty)}
          </strong>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 mb-7">
          {inCart === 0 ? (
            <button
              onClick={() => add(product.slug, pendingQty)}
              className="flex-1 h-14 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium flex items-center justify-center gap-2 active:scale-[0.98] hover:bg-[var(--color-ochre-dark)] hover:text-[var(--color-ink)] transition-all"
            >
              <Plus size={16} /> Добавить в корзину · {product.unit}
            </button>
          ) : (
            <div className="flex-1 flex items-center justify-between h-14 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] px-5">
              <span className="font-display text-lg">
                В корзине: {inCart} {product.unit}
              </span>
              <button
                onClick={() => setQty(product.slug, 0)}
                className="text-[13px] underline underline-offset-2 opacity-75 hover:opacity-100"
              >
                убрать
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-ink)]/15 text-[14px] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-all"
          >
            <Phone size={14} /> Уточнить
          </a>
          <a
            href={COMPANY.whatsapp}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-ink)]/15 text-[14px] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-all"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>

        <div className="rounded-2xl bg-[var(--color-cream-dark)] p-5 mb-7 flex items-start gap-3">
          <Truck
            size={18}
            className="text-[var(--color-ochre-dark)] mt-1 shrink-0"
          />
          <div className="text-[14px] text-[var(--color-ink-soft)] leading-relaxed">
            Доставка по Семею от 1 часа. Самовывоз — бесплатно. До дома, объекта
            или дачи.
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl md:text-2xl mb-3">Описание</h2>
          <p className="text-[15px] text-[var(--color-ink-soft)] leading-relaxed mb-6">
            {product.description}
          </p>

          {product.specs && (
            <>
              <h2 className="font-display text-xl md:text-2xl mb-3">
                Характеристики
              </h2>
              <dl className="space-y-2.5 text-[14px]">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-4 border-b border-black/10 pb-2.5"
                  >
                    <dt className="text-[var(--color-olive)]">{k}</dt>
                    <dd className="font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

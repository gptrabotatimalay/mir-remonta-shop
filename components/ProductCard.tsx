"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/store";
import { formatTenge } from "@/lib/data";
import type { Product } from "@/lib/types";
import QtyInput from "./QtyInput";

export default function ProductCard({ product }: { product: Product }) {
  const item = useCart((s) => s.items.find((i) => i.slug === product.slug));
  const add = useCart((s) => s.add);
  const setQty = useCart((s) => s.setQty);
  const qty = item?.qty ?? 0;

  return (
    <div className="group flex flex-col bg-[var(--color-cream)] rounded-2xl overflow-hidden border border-black/5 hover:border-[var(--color-ochre)]/50 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
      <Link
        href={`/product/${product.slug}`}
        className="block relative aspect-square bg-[var(--color-ink)]/5"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.badge && (
          <span
            className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-medium uppercase tracking-wider ${
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
      </Link>

      <div className="flex flex-col flex-1 p-3.5 md:p-5 gap-2.5 md:gap-3">
        {product.brand && (
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[var(--color-olive)]">
            {product.brand}
          </div>
        )}
        <Link
          href={`/product/${product.slug}`}
          className="text-[14px] md:text-[15px] leading-snug font-medium line-clamp-2 hover:text-[var(--color-ochre-dark)] transition-colors min-h-[2.5em]"
        >
          {product.title}
        </Link>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="font-display text-xl md:text-2xl text-[var(--color-ink)]">
            {formatTenge(product.price)}
          </span>
          <span className="text-[12px] md:text-[13px] text-[var(--color-olive)]">
            / {product.unit}
          </span>
          {product.oldPrice && (
            <span className="text-[12px] md:text-[13px] text-[var(--color-olive)]/60 line-through">
              {formatTenge(product.oldPrice)}
            </span>
          )}
        </div>

        {qty === 0 ? (
          <button
            onClick={() => add(product.slug, 1)}
            className="w-full h-11 md:h-12 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] text-[14px] md:text-[14px] font-medium flex items-center justify-center gap-2 active:scale-[0.97] hover:bg-[var(--color-ochre-dark)] hover:text-[var(--color-ink)] transition-all"
          >
            <Plus size={16} /> В корзину
          </button>
        ) : (
          <QtyInput
            size="sm"
            value={qty}
            unit={product.unit}
            onChange={(v) => setQty(product.slug, v)}
          />
        )}
      </div>
    </div>
  );
}

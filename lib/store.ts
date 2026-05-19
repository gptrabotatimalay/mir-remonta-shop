"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "./types";
import { PRODUCTS, formatTenge } from "./data";

type CartState = {
  items: CartItem[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (slug, qty = 1) =>
        set((s) => {
          const existing = s.items.find((i) => i.slug === slug);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.slug === slug ? { ...i, qty: i.qty + qty } : i,
              ),
            };
          }
          return { items: [...s.items, { slug, qty }] };
        }),
      remove: (slug) =>
        set((s) => ({ items: s.items.filter((i) => i.slug !== slug) })),
      setQty: (slug, qty) =>
        set((s) => ({
          items:
            qty <= 0
              ? s.items.filter((i) => i.slug !== slug)
              : s.items.map((i) => (i.slug === slug ? { ...i, qty } : i)),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "mr-shop-cart" },
  ),
);

export function useCartTotals() {
  const items = useCart((s) => s.items);
  let total = 0;
  let count = 0;
  for (const item of items) {
    const p = PRODUCTS.find((pp) => pp.slug === item.slug);
    if (!p) continue;
    total += p.price * item.qty;
    count += item.qty;
  }
  return { total, count, formattedTotal: formatTenge(total) };
}

export function buildWhatsAppMessage(
  items: CartItem[],
  customer: {
    name: string;
    phone: string;
    delivery: "delivery" | "pickup";
    address?: string;
    comment?: string;
  },
): string {
  const lines: string[] = [];
  lines.push("*Заявка с сайта Мир Ремонта Семей*");
  lines.push("");
  lines.push(`Клиент: ${customer.name}`);
  lines.push(`Телефон: ${customer.phone}`);
  lines.push(
    `Получение: ${customer.delivery === "delivery" ? "Доставка" : "Самовывоз"}`,
  );
  if (customer.delivery === "delivery" && customer.address)
    lines.push(`Адрес: ${customer.address}`);
  if (customer.comment) lines.push(`Комментарий: ${customer.comment}`);
  lines.push("");
  lines.push("*Состав заказа:*");
  let total = 0;
  for (const item of items) {
    const p = PRODUCTS.find((pp) => pp.slug === item.slug);
    if (!p) continue;
    const sum = p.price * item.qty;
    total += sum;
    lines.push(
      `• ${p.title} — ${item.qty} ${p.unit} × ${formatTenge(p.price)} = ${formatTenge(sum)}`,
    );
  }
  lines.push("");
  lines.push(`*Итого: ${formatTenge(total)}*`);
  return lines.join("\n");
}

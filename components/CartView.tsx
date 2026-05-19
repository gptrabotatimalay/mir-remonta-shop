"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart, useCartTotals, buildWhatsAppMessage } from "@/lib/store";
import { COMPANY, PRODUCTS, formatTenge } from "@/lib/data";
import QtyInput from "./QtyInput";

export default function CartView() {
  const [mounted, setMounted] = useState(false);
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const { formattedTotal } = useCartTotals();
  const positionsCount = items.length;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState<"delivery" | "pickup">("delivery");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => setMounted(true), []);

  const phoneOk = /^\+?\d[\d\s\-()]{8,}$/.test(phone);
  const valid =
    items.length > 0 &&
    name.trim().length >= 2 &&
    phoneOk &&
    (delivery === "pickup" || address.trim().length >= 4);

  function sendToWhatsApp() {
    setTouched(true);
    if (!valid) return;
    const text = buildWhatsAppMessage(items, {
      name: name.trim(),
      phone: phone.trim(),
      delivery,
      address: address.trim() || undefined,
      comment: comment.trim() || undefined,
    });
    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  if (!mounted) {
    return (
      <div className="py-20 text-center text-[var(--color-olive)]">
        Загрузка корзины…
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-16 md:py-24 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-cream-dark)] flex items-center justify-center">
          <ShoppingBag size={28} className="text-[var(--color-olive)]" />
        </div>
        <h2
          className="font-display mb-3"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
        >
          Корзина пуста
        </h2>
        <p className="text-[var(--color-olive)] mb-8 max-w-md mx-auto">
          Соберите заказ из каталога — мы отправим всё на объект за 1 час.
        </p>
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium"
        >
          <ShoppingBag size={16} /> Открыть каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
      <div className="lg:col-span-7">
        <div className="flex items-center justify-between mb-5">
          <div className="text-[13px] text-[var(--color-olive)]">
            {positionsCount} {pluralizePosition(positionsCount)}
          </div>
          <button
            onClick={() => {
              if (confirm("Очистить корзину?")) clear();
            }}
            className="text-[13px] text-[var(--color-olive)] hover:text-[var(--color-rust)] inline-flex items-center gap-1.5"
          >
            <Trash2 size={13} /> Очистить
          </button>
        </div>

        <ul className="space-y-3">
          {items.map((it) => {
            const p = PRODUCTS.find((pp) => pp.slug === it.slug);
            if (!p) return null;
            return (
              <li
                key={it.slug}
                className="flex gap-3 md:gap-5 p-3 md:p-4 rounded-2xl bg-[var(--color-cream)] border border-black/5"
              >
                <Link
                  href={`/product/${p.slug}`}
                  className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-xl overflow-hidden bg-[var(--color-ink)]/5"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    unoptimized
                    sizes="120px"
                    className="object-cover"
                  />
                </Link>
                <div className="flex-1 flex flex-col min-w-0">
                  <Link
                    href={`/product/${p.slug}`}
                    className="text-[14px] md:text-[15px] font-medium leading-snug hover:text-[var(--color-ochre-dark)] line-clamp-2 mb-1"
                  >
                    {p.title}
                  </Link>
                  <div className="text-[12px] md:text-[13px] text-[var(--color-olive)] mb-3">
                    {formatTenge(p.price)} / {p.unit}
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div className="w-36">
                      <QtyInput
                        size="sm"
                        value={it.qty}
                        unit={p.unit}
                        onChange={(v) => setQty(it.slug, v)}
                      />
                    </div>
                    <div className="text-right">
                      <div className="font-display text-base md:text-lg">
                        {formatTenge(p.price * it.qty)}
                      </div>
                      <button
                        onClick={() => remove(it.slug)}
                        aria-label="Удалить"
                        className="text-[12px] text-[var(--color-olive)] hover:text-[var(--color-rust)] inline-flex items-center gap-1 mt-0.5"
                      >
                        <Trash2 size={11} /> Убрать
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-2xl bg-[var(--color-cream)] border border-black/5 p-5 md:p-7 lg:sticky lg:top-28">
          <h2 className="font-display text-2xl md:text-3xl mb-1">Оформление</h2>
          <p className="text-[13px] text-[var(--color-olive)] mb-5">
            Заявка уйдёт менеджеру в WhatsApp. Перезвонит за 5 минут.
          </p>

          <div className="space-y-3 mb-5">
            <Field
              label="Ваше имя"
              value={name}
              onChange={setName}
              placeholder="Алексей"
              error={
                touched && name.trim().length < 2 ? "Введите имя" : undefined
              }
            />
            <Field
              label="Телефон"
              value={phone}
              onChange={setPhone}
              placeholder="+7 ___ ___ __ __"
              type="tel"
              error={touched && !phoneOk ? "Введите телефон" : undefined}
            />

            <div>
              <div className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-olive)] mb-2">
                Получение
              </div>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[var(--color-cream-dark)] rounded-full">
                {(["delivery", "pickup"] as const).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setDelivery(opt)}
                    className={`h-11 rounded-full text-[14px] font-medium transition-colors ${
                      delivery === opt
                        ? "bg-[var(--color-ink)] text-[var(--color-cream)]"
                        : "text-[var(--color-ink)]"
                    }`}
                  >
                    {opt === "delivery" ? "Доставка" : "Самовывоз"}
                  </button>
                ))}
              </div>
            </div>

            {delivery === "delivery" && (
              <Field
                label="Адрес доставки"
                value={address}
                onChange={setAddress}
                placeholder="ул. Абая, 10, кв. 5"
                error={
                  touched && address.trim().length < 4
                    ? "Введите адрес"
                    : undefined
                }
              />
            )}

            <Field
              label="Комментарий"
              value={comment}
              onChange={setComment}
              placeholder="Необязательно"
              optional
            />
          </div>

          <div className="border-t border-black/10 pt-4 mb-5 space-y-2 text-[14px]">
            <Row
              label={`Товары · ${positionsCount} ${pluralizePosition(positionsCount)}`}
              value={formattedTotal}
            />
            <Row
              label="Доставка"
              value={delivery === "delivery" ? "по согласованию" : "бесплатно"}
            />
            <div className="flex justify-between items-baseline pt-3 border-t border-black/10">
              <span className="text-[15px]">Итого</span>
              <span
                className="font-display text-[var(--color-ink)]"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
              >
                {formattedTotal}
              </span>
            </div>
          </div>

          <button
            onClick={sendToWhatsApp}
            className={`w-full h-14 rounded-full font-medium text-[15px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all ${
              valid
                ? "bg-[var(--color-ochre)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]"
                : "bg-[var(--color-cream-dark)] text-[var(--color-olive)] cursor-not-allowed"
            }`}
          >
            <MessageCircle size={18} />
            {valid ? "Отправить заказ в WhatsApp" : "Заполните форму"}
          </button>

          <div className="text-[12px] text-[var(--color-olive)] text-center mt-3 leading-relaxed">
            Нажимая кнопку, вы соглашаетесь, что менеджер свяжется с вами для
            подтверждения заказа.
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-olive)] mb-1.5 inline-block">
        {label}
        {optional && (
          <span className="lowercase tracking-normal text-[11px] ml-1.5 opacity-70">
            необязательно
          </span>
        )}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-12 px-4 rounded-xl bg-[var(--color-cream-dark)] border ${
          error ? "border-[var(--color-rust)]" : "border-transparent"
        } focus:outline-none focus:border-[var(--color-ochre)] text-[15px] placeholder:text-[var(--color-olive)]/60`}
      />
      {error && (
        <span className="text-[12px] text-[var(--color-rust)] mt-1 block">
          {error}
        </span>
      )}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[var(--color-ink-soft)]">
      <span>{label}</span>
      <span className="font-medium text-[var(--color-ink)]">{value}</span>
    </div>
  );
}

function pluralizePosition(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "позиция";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
    return "позиции";
  return "позиций";
}

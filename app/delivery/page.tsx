import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import { COMPANY } from "@/lib/data";
import {
  Truck,
  MapPin,
  Phone,
  CreditCard,
  Banknote,
  Building2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Доставка и оплата — Мир Ремонта Семей",
  description:
    "Условия доставки и способы оплаты в магазине Мир Ремонта Семей. Доставка Газель, самовывоз, Kaspi, безнал, кредит.",
};

export default function DeliveryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 md:pt-36 pb-10 md:pb-14 bg-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <nav className="text-[13px] text-[var(--color-olive)] mb-6 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-[var(--color-ink)]">
                Главная
              </Link>
              <ChevronRight size={12} />
              <span className="text-[var(--color-ink)]">Доставка и оплата</span>
            </nav>
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-5">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
              Информация
            </div>
            <h1
              className="font-display leading-[1] tracking-tight max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 7vw, 5rem)" }}
            >
              Доставка
              <br />
              <span className="italic text-[var(--color-clay)]">и оплата.</span>
            </h1>
            <p className="mt-6 md:mt-7 text-[15px] md:text-lg text-[var(--color-olive)] max-w-2xl leading-relaxed">
              После размещения заказа менеджер свяжется с вами и согласует
              время. Доставим за 1 час по Семею или примем на самовывоз.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <article className="rounded-2xl bg-[var(--color-cream-dark)] p-6 md:p-8">
              <div className="w-12 h-12 mb-5 rounded-full bg-[var(--color-ink)] text-[var(--color-ochre)] flex items-center justify-center">
                <Truck size={20} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-3">
                По городу Семей
              </h2>
              <p className="text-[15px] text-[var(--color-ink-soft)] leading-relaxed mb-4">
                Доставка автомашинами Газель до 2 тонн / 6 м³.
              </p>
              <div className="text-[var(--color-ochre-dark)] font-display text-xl md:text-2xl">
                2 000 – 5 000 ₸
              </div>
              <div className="text-[12px] text-[var(--color-olive)] mt-1">
                в зависимости от района и объёма
              </div>
            </article>

            <article className="rounded-2xl bg-[var(--color-cream-dark)] p-6 md:p-8">
              <div className="w-12 h-12 mb-5 rounded-full bg-[var(--color-ink)] text-[var(--color-ochre)] flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-3">
                За пределы города
              </h2>
              <p className="text-[15px] text-[var(--color-ink-soft)] leading-relaxed mb-4">
                Возим на дачи, садовые посёлки и в район.
              </p>
              <div className="text-[var(--color-ochre-dark)] font-display text-xl md:text-2xl">
                Договорная
              </div>
              <div className="text-[12px] text-[var(--color-olive)] mt-1">
                рассчитаем по адресу и объёму
              </div>
            </article>

            <article className="rounded-2xl bg-[var(--color-cream-dark)] p-6 md:p-8 md:col-span-2">
              <div className="w-12 h-12 mb-5 rounded-full bg-[var(--color-ink)] text-[var(--color-ochre)] flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-3">
                Самовывоз
              </h2>
              <p className="text-[15px] text-[var(--color-ink-soft)] leading-relaxed mb-1">
                {COMPANY.address}
              </p>
              <p className="text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
                {COMPANY.hours}
              </p>
              <div className="text-[var(--color-ochre-dark)] font-display text-xl md:text-2xl mt-3">
                Бесплатно
              </div>
            </article>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-[var(--color-cream-dark)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4">
                <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
                Оплата
              </div>
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 5.5vw, 3.5rem)" }}
              >
                Любой удобный способ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                {
                  Icon: Banknote,
                  title: "Наличный расчёт",
                  text: "В пункте самовывоза на Чайковского 71А или водителю при доставке.",
                },
                {
                  Icon: CreditCard,
                  title: "Kaspi.kz",
                  text: "Депозит, карта, кредит или QR — по всему Казахстану.",
                },
                {
                  Icon: Building2,
                  title: "Безналичный расчёт",
                  text: "Для юр. лиц. Выставляем счёт — оплата 2 банковских дня.",
                },
                {
                  Icon: CreditCard,
                  title: "Кредит Home Credit Bank",
                  text: "Семей. От 10 000 до 1 000 000 ₸. Рассрочка на 3 месяца.",
                },
              ].map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 md:p-6 rounded-2xl bg-[var(--color-cream)] border border-black/5"
                >
                  <div className="w-11 h-11 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-1.5">{title}</h3>
                    <p className="text-[14px] md:text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--color-ink)] text-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10 text-center">
            <h2
              className="font-display leading-[1] tracking-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              Остались вопросы?
            </h2>
            <p className="text-[var(--color-cream)]/70 mb-7 max-w-xl mx-auto">
              Менеджер на связи с 9 до 18 — ответит про сроки, габариты груза и
              способ оплаты.
            </p>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] font-medium"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <CartBar />
    </>
  );
}

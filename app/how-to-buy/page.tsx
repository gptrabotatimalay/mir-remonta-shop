import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import { COMPANY } from "@/lib/data";
import { ShoppingBag, ChevronRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Как купить — Мир Ремонта Семей",
  description:
    "7 простых шагов от выбора товара до получения заказа в Мир Ремонта Семей.",
};

const STEPS = [
  {
    n: "01",
    title: "Выберите товар",
    text: "Откройте каталог и добавьте нужные позиции с указанием количества. Не уверены сколько надо — позвоните, посчитаем вместе.",
  },
  {
    n: "02",
    title: "Проверьте корзину",
    text: "Посмотрите выбранные товары, при необходимости уберите лишнее или измените количество руками с клавиатуры.",
  },
  {
    n: "03",
    title: "Отправьте заявку",
    text: "Нажмите «Отправить заказ в WhatsApp». Ваш заказ откроется готовым сообщением — отправьте менеджеру.",
  },
  {
    n: "04",
    title: "Проверьте контакты",
    text: "В форме укажите имя, телефон, адрес доставки или выберите самовывоз. Менеджер свяжется именно по этим контактам.",
  },
  {
    n: "05",
    title: "Менеджер перезвонит",
    text: "В течение 5 минут уточнит детали заказа, согласует время и пришлёт счёт при необходимости.",
  },
  {
    n: "06",
    title: "Оплатите удобно",
    text: "Kaspi, наличные водителю при доставке, банковской картой или безналом для юр.лиц.",
  },
  {
    n: "07",
    title: "Получите заказ",
    text: "Доставка по Семею за 1 час или самовывоз со склада на Чайковского 71А.",
  },
] as const;

export default function HowToBuyPage() {
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
              <span className="text-[var(--color-ink)]">Как купить</span>
            </nav>
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-5">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />7
              простых шагов
            </div>
            <h1
              className="font-display leading-[1] tracking-tight max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 7vw, 5rem)" }}
            >
              Как купить
              <br />
              <span className="italic text-[var(--color-clay)]">
                в один заказ.
              </span>
            </h1>
            <p className="mt-6 md:mt-7 text-[15px] md:text-lg text-[var(--color-olive)] max-w-2xl leading-relaxed">
              От выбора материалов до получения на объекте — никаких форм,
              личных кабинетов и долгих регистраций. Все через WhatsApp и
              звонок.
            </p>
            <Link
              href="/catalog"
              className="mt-7 md:mt-8 inline-flex items-center gap-2 h-14 px-7 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium text-[15px]"
            >
              <ShoppingBag size={18} /> Открыть каталог
            </Link>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <ol className="space-y-3 md:space-y-4">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="grid grid-cols-[auto_1fr] gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-[var(--color-cream-dark)] border border-black/5"
                >
                  <div className="font-display text-2xl md:text-4xl text-[var(--color-ochre-dark)] leading-none pt-1">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl mb-2 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 md:mt-12 p-6 md:p-7 rounded-2xl bg-[var(--color-ink)] text-[var(--color-cream)]/80 text-[13px] md:text-[14px] leading-relaxed">
              <strong className="text-[var(--color-ochre)]">Важно:</strong>{" "}
              цены, указанные на сайте, не являются публичной офертой.
              Окончательная цена за товары будет подтверждена выставленным
              счётом или согласована с менеджером.
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--color-cream-dark)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10 text-center">
            <h2
              className="font-display leading-[1] tracking-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              Готовы начать?
            </h2>
            <p className="text-[var(--color-olive)] mb-7 max-w-xl mx-auto">
              Любой вопрос — звоните или пишите в WhatsApp. Без бота, отвечает
              живой человек.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium text-[15px]"
              >
                <Phone size={16} /> {COMPANY.phone}
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-[#25D366] text-white font-medium text-[15px]"
              >
                <MessageCircle size={16} /> Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartBar />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import { COMPANY } from "@/lib/data";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ChevronRight,
  Building2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "О компании — Мир Ремонта Семей",
  description:
    "Магазин стройматериалов «Мир Ремонта» в Семее с 2008 года. Собственный склад на Чайковского 71А.",
};

export default function AboutPage() {
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
              <span className="text-[var(--color-ink)]">О компании</span>
            </nav>
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-5">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />О
              компании
            </div>
            <h1
              className="font-display leading-[1] tracking-tight max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 7vw, 5rem)" }}
            >
              Местные.
              <br />
              <span className="italic text-[var(--color-clay)]">
                С 2008 года.
              </span>
            </h1>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-5 text-[15px] md:text-[16px] text-[var(--color-ink-soft)] leading-relaxed">
              <p className="font-display text-[var(--color-ink)] text-xl md:text-2xl leading-snug">
                Добро пожаловать, дорогой клиент!
              </p>
              <p>
                Вас приветствует руководитель магазина «Мир Ремонта» —{" "}
                <strong className="text-[var(--color-ink)]">
                  Равиль Мефтахутдинов
                </strong>
                . Позвольте выразить искреннюю благодарность за то, что нашли
                время и возможность посетить наш магазин.
              </p>
              <p>
                Наша цель — развивать длительные отношения с клиентами,
                предлагая широкий ассортимент товаров, высокое качество и
                профессиональное обслуживание. Сервис, который мы предоставляем
                покупателям, соответствует самым высоким стандартам — мы делаем
                упор на индивидуальный подход к каждому клиенту.
              </p>
              <p>
                Компания гордится, что большинство наших новых клиентов
                предпочитают продолжить работу с нами, превращаясь в постоянных.
              </p>
              <p>
                Политика компании — предложить клиенту большой ассортимент
                строительных товаров по{" "}
                <strong className="text-[var(--color-ink)]">
                  максимально низкой цене на рынке
                </strong>
                .
              </p>
              <p>
                Постоянное пополнение продукции на складе и стабильные плановые
                поставки напрямую с заводов-изготовителей позволяют сотрудничать
                не только с частными клиентами, но также с подрядными
                организациями и крупными предприятиями.
              </p>

              <p className="font-display italic text-[var(--color-ochre-dark)] text-lg md:text-xl pt-2">
                Приходите! Мы Вас ждём.
              </p>
              <p className="text-[14px] text-[var(--color-olive)] -mt-2">
                С уважением, Равиль Мефтахутдинов.
              </p>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-ink)]">
                <Image
                  src="/images/warehouse-exterior.jpg"
                  alt="Склад «Мир Ремонта» в Семее"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 md:top-6 left-4 md:left-6 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-[var(--color-cream)]/90 backdrop-blur text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink)]">
                  Наш склад · {COMPANY.city}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--color-cream-dark)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4">
                <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
                На складе
              </div>
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 5.5vw, 3.5rem)" }}
              >
                Стабильные поставки <br className="hidden sm:block" />
                <span className="italic text-[var(--color-clay)]">
                  с заводов-изготовителей.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                "Металлопрокат",
                "Кровельные материалы",
                "Изоляционные и отделочные материалы",
                "Пиломатериал",
                "Крепёж",
                "Радиаторы и другое",
              ].map((item) => (
                <div
                  key={item}
                  className="px-5 py-4 md:px-6 md:py-5 rounded-2xl bg-[var(--color-cream)] border border-black/5 font-display text-lg md:text-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4">
                <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />5
                причин
              </div>
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 5.5vw, 3.5rem)" }}
              >
                Почему выбирают нас
              </h2>
            </div>

            <ol className="space-y-3 md:space-y-4">
              {[
                {
                  t: "Низкие цены от производителей",
                  d: "Закупаем напрямую с заводов — без накруток посредников. Если найдёте дешевле — снизим.",
                },
                {
                  t: "Высокое качество",
                  d: "Только проверенные бренды Knauf, Ceresit, Tytan, ТехноНиколь, Изоспан и официальный металлопрокат.",
                },
                {
                  t: "Большой ассортимент",
                  d: "60+ категорий товаров: всё для стройки и ремонта от арматуры до радиаторов на одном складе.",
                },
                {
                  t: "Удобные способы заказа и оплаты",
                  d: "Заказ через сайт или WhatsApp. Kaspi, наличные, безнал для юр. лиц или рассрочка Home Credit.",
                },
                {
                  t: "Внимательные и компетентные менеджеры",
                  d: "Ответят на все вопросы, помогут выбрать нужный товар и посчитают сколько чего нужно на ваш объект.",
                },
              ].map((reason, idx) => (
                <li
                  key={reason.t}
                  className="grid grid-cols-[auto_1fr] gap-4 md:gap-6 p-6 md:p-7 rounded-2xl bg-[var(--color-cream-dark)] border border-black/5"
                >
                  <div className="font-display text-2xl md:text-4xl text-[var(--color-ochre-dark)] leading-none pt-1 tabular-nums">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl mb-2 leading-tight">
                      {reason.t}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
                      {reason.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--color-ink)] text-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cream)]/10">
              {[
                { v: "17+", l: "лет в Семее" },
                { v: "1 200 м²", l: "собственный склад" },
                { v: "60+", l: "категорий товаров" },
                { v: "1 час", l: "доставка" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-[var(--color-ink)] px-5 py-7 md:px-7 md:py-10"
                >
                  <div
                    className="font-display text-[var(--color-ochre)] leading-none"
                    style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest mt-2 opacity-70">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="requisites"
          className="py-12 md:py-16 bg-[var(--color-cream-dark)] scroll-mt-20"
        >
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4">
                <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
                Реквизиты
              </div>
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 5.5vw, 3.5rem)" }}
              >
                Для юридических лиц
              </h2>
            </div>

            <div className="rounded-2xl bg-[var(--color-cream)] border border-black/5 overflow-hidden">
              <dl className="divide-y divide-black/5">
                {[
                  { label: "Юридическое лицо", value: COMPANY.legalName },
                  { label: "Юридический адрес", value: COMPANY.address },
                  { label: "Телефон", value: COMPANY.phone },
                  { label: "Email", value: COMPANY.email },
                  { label: "ИИК", value: COMPANY.iik },
                  { label: "Банк", value: COMPANY.bank },
                  { label: "БИК", value: COMPANY.bik },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 md:px-7 py-4 md:py-5"
                  >
                    <dt className="sm:w-56 shrink-0 text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-[var(--color-olive)]">
                      {row.label}
                    </dt>
                    <dd className="font-medium text-[15px] md:text-base break-all">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-5 text-[12px] md:text-[13px] text-[var(--color-olive)]">
              Работаем по безналичному расчёту с НДС. Выставляем счёт — оплата 2
              банковских дня.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--color-cream)]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { Icon: MapPin, label: "Адрес", value: COMPANY.address },
                { Icon: Clock, label: "Часы работы", value: COMPANY.hours },
                {
                  Icon: Phone,
                  label: "Телефон",
                  value: COMPANY.phone,
                  href: COMPANY.phoneHref,
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                },
                {
                  Icon: Building2,
                  label: "Самовывоз",
                  value: "Чайковского 71А",
                },
              ].map(({ Icon, label, value, href }) => {
                const inner = (
                  <>
                    <Icon
                      size={18}
                      className="text-[var(--color-ochre-dark)] mt-0.5 shrink-0"
                    />
                    <div>
                      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-olive)] mb-1">
                        {label}
                      </div>
                      <div className="text-[15px] md:text-base">{value}</div>
                    </div>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex gap-3 p-5 rounded-2xl bg-[var(--color-cream-dark)] hover:bg-[var(--color-cream)] border border-black/5 transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex gap-3 p-5 rounded-2xl bg-[var(--color-cream-dark)] border border-black/5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartBar />
    </>
  );
}

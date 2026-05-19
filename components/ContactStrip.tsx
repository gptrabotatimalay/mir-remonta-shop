import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function ContactStrip() {
  return (
    <section
      id="contacts"
      className="py-16 md:py-24 lg:py-32 bg-[var(--color-cream)] scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[5/4] rounded-2xl overflow-hidden bg-[var(--color-ink)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/warehouse-exterior.jpg"
            alt="Склад в Семее"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 md:top-6 left-4 md:left-6 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-[var(--color-cream)]/90 backdrop-blur text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink)]">
            Наш склад · {COMPANY.city}
          </div>
        </div>

        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4 md:mb-6">
            <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
            Приезжайте на склад
          </div>
          <h2
            id="about"
            className="font-display leading-[1] tracking-tight mb-5 md:mb-8 scroll-mt-20"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Местные.
            <br />
            <span className="italic text-[var(--color-clay)]">
              С 2008 года.
            </span>
          </h2>

          <div className="space-y-4 text-[var(--color-ink-soft)] text-[15px] md:text-base leading-relaxed mb-7 md:mb-9">
            <p>
              «Мир Ремонта» — не маркетплейс. Это{" "}
              <strong className="text-[var(--color-ink)]">
                собственный склад 1 200 м²
              </strong>{" "}
              в Семее, куда можно приехать, посмотреть, потрогать и забрать.
            </p>
            <p>
              За 17 лет собрали ассортимент, который закрывает 90% задач прораба
              и частника: от арматуры до дверной фурнитуры. Прямые поставки с
              заводов Knauf, Ceresit, Tytan, ТехноНиколь.
            </p>
            <p className="font-display italic text-[var(--color-ochre-dark)] text-lg md:text-xl">
              «Если у кого-то дешевле — мы хотим знать. И сделаем не выше.»
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5 mb-7 md:mb-9 pt-5 md:pt-6 border-t border-black/10">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-[var(--color-ochre-dark)] mt-0.5 shrink-0"
              />
              <div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-olive)] mb-1">
                  Адрес
                </div>
                <div className="text-[14px] md:text-[15px]">
                  {COMPANY.address}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock
                size={18}
                className="text-[var(--color-ochre-dark)] mt-0.5 shrink-0"
              />
              <div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-olive)] mb-1">
                  Часы работы
                </div>
                <div className="text-[14px] md:text-[15px]">
                  {COMPANY.hours}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium text-[15px] active:scale-[0.98] transition-transform"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] font-medium text-[15px] active:scale-[0.98] transition-transform"
            >
              <MessageCircle size={16} /> Написать в WhatsApp
            </a>
          </div>

          <Link
            href="/about"
            className="mt-5 md:mt-6 inline-flex items-center gap-1.5 text-[14px] text-[var(--color-olive)] hover:text-[var(--color-ink)]"
          >
            Подробнее о компании <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

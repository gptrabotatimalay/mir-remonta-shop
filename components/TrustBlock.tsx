import { Truck, Wallet, ShieldCheck, MessageCircle } from "lucide-react";

const ITEMS = [
  {
    Icon: Truck,
    title: "Доставка за 1 час",
    text: "По Семею от 1 часа после согласования. Самовывоз — бесплатно.",
  },
  {
    Icon: Wallet,
    title: "Гарантия цены",
    text: "Нашли дешевле в Семее — снизим. Просто пришлите ссылку.",
  },
  {
    Icon: ShieldCheck,
    title: "Только наличие",
    text: "Не торгуем под заказ. Что в каталоге — то на складе.",
  },
  {
    Icon: MessageCircle,
    title: "Заказ в WhatsApp",
    text: "Заявка отправляется менеджеру в чат — без регистраций и форм.",
  },
];

export default function TrustBlock() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-ochre)] mb-4 md:mb-6">
            <span className="w-8 md:w-10 h-px bg-[var(--color-ochre)]/50" />
            Как мы работаем
          </div>
          <h2
            className="font-display leading-[1] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Просто.
            <br />
            <span className="italic text-[var(--color-ochre)]">
              Без сюрпризов.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-cream)]/10">
          {ITEMS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-[var(--color-ink)] p-6 md:p-8 lg:p-10 min-h-[200px] md:min-h-[260px] flex flex-col justify-between gap-5"
            >
              <Icon size={28} className="text-[var(--color-ochre)]" />
              <div>
                <h3 className="font-display text-xl md:text-2xl mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--color-cream)]/70">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

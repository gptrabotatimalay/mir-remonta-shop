import { ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/data";
import InstagramIcon from "./InstagramIcon";

export default function InstagramStrip() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
        <a
          href={COMPANY.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-3xl bg-instagram group"
        >
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
          <div className="relative px-6 py-10 md:py-14 lg:py-20 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-8 text-white">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5 md:mb-7 opacity-90">
                <InstagramIcon size={24} />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em]">
                  Мы в Instagram
                </span>
              </div>
              <h2
                className="font-display leading-[1] tracking-tight mb-4 md:mb-6"
                style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
              >
                Новинки склада
                <br />
                <span className="italic">каждую неделю.</span>
              </h2>
              <p className="text-[15px] md:text-lg text-white/90 max-w-xl leading-relaxed">
                Акции, реальные фото товара со склада, видео из шоурума, ответы
                на вопросы и обзоры новых поступлений.
              </p>
            </div>

            <div className="shrink-0 md:text-right">
              <div className="font-display text-2xl md:text-3xl mb-3">
                {COMPANY.instagramHandle ?? "@mir_remonta_semey1"}
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[var(--color-ink)] font-medium text-[15px] group-hover:scale-[1.03] transition-transform">
                Открыть Instagram <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

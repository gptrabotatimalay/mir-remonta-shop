import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мир Ремонта — магазин стройматериалов в Семее",
  description:
    "Интернет-магазин стройматериалов: цемент, профнастил, ламинат, фанера, двери. Доставка по Семею. Заказ через WhatsApp.",
  metadataBase: new URL("https://rusles.kz"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}

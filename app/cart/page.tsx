import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartView from "@/components/CartView";

export const metadata = {
  title: "Корзина — Мир Ремонта",
};

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-16 min-h-[70vh]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
          <h1
            className="font-display leading-[1] tracking-tight mb-8 md:mb-12"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Корзина
          </h1>
          <CartView />
        </div>
      </main>
      <Footer />
    </>
  );
}

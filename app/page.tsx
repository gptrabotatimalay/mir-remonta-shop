import Header from "@/components/Header";
import ShopHero from "@/components/ShopHero";
import BrandsMarquee from "@/components/BrandsMarquee";
import CategoryGrid from "@/components/CategoryGrid";
import PopularStrip from "@/components/PopularStrip";
import TrustBlock from "@/components/TrustBlock";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ShopHero />
        <BrandsMarquee />
        <CategoryGrid />
        <PopularStrip />
        <TrustBlock />
        <ContactStrip />
      </main>
      <Footer />
      <CartBar />
    </>
  );
}

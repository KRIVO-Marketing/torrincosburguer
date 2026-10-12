import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Reviews from "@/components/sections/Reviews";
import Order from "@/components/sections/Order";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";
import OrderProvider from "@/components/OrderProvider";
import OrderModal from "@/components/OrderModal";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-paper pb-[72px] desk:pb-0">
        <div className="bg-ink px-4 py-2.5 text-center text-[13px] leading-[1.4] text-[#f3f4f6]">
          Delivery em Paulínia pelo WhatsApp e iFood · terça a domingo, das 18h às 23h30
        </div>
        <Header />
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Order />
        <Location />
        <Footer />
        <StickyBar />
        <OrderModal />
      </div>
    </OrderProvider>
  );
}

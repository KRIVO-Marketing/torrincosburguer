import ImageSlot from "../ImageSlot";
import { IFOOD_URL, WA_HREF } from "@/lib/site";

export default function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-[1320px] px-6 pt-[clamp(40px,6vw,80px)] pb-6">
      <div className="mb-[clamp(28px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,520px),1fr))] items-end gap-x-16 gap-y-7">
        <h1 className="m-0 font-display text-[clamp(46px,7vw,108px)] leading-[.94] font-extrabold tracking-[-.04em] text-balance">
          Smash de chapa, feito em Paulínia.
        </h1>
        <div className="flex max-w-[440px] flex-col gap-6">
          <p className="m-0 text-[17px] leading-[1.6] text-pretty text-muted">
            Carne moída aqui todo dia, prensada na chapa quente, no pão brioche com manteiga. Pede pelo WhatsApp ou pelo iFood que chega quentinho.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener"
              className="flex h-[52px] items-center rounded-full bg-teal px-[26px] text-[15px] font-semibold whitespace-nowrap text-ink hover:bg-teal-hover hover:text-ink"
            >
              Pedir no WhatsApp
            </a>
            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener"
              className="flex h-[52px] items-center rounded-full border border-ink px-[26px] text-[15px] font-semibold whitespace-nowrap text-ink hover:bg-ink hover:text-white"
            >
              Pedir no iFood
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[clamp(320px,62vw,760px)] w-full overflow-hidden rounded-[20px] bg-ph">
        <ImageSlot placeholder="Foto principal — burger em close, 16:9" src="/images/hero.jpg" alt="Burger com batata frita da Torrinco's" priority />
      </div>
    </section>
  );
}

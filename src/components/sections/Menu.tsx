import ImageSlot from "../ImageSlot";
import Reveal from "../Reveal";
import { IFOOD_URL, MENU, wa } from "@/lib/site";

export default function Menu() {
  return (
    <section id="cardapio" className="border-t border-line">
      <div className="mx-auto max-w-[1320px] px-6 py-[clamp(80px,10vw,144px)]">
        <Reveal className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-5">
          <h2 className="m-0 font-display text-[clamp(40px,5vw,72px)] leading-[.95] font-extrabold tracking-[-.04em]">
            Cardápio
          </h2>
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener"
            className="border-b border-ink pt-3 pb-0.5 text-[15px] font-semibold whitespace-nowrap text-ink hover:border-teal-link hover:text-teal-link"
          >
            Cardápio completo, porções e bebidas no iFood ↗
          </a>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-x-6 gap-y-14">
          {MENU.map((m) => (
            <Reveal as="article" key={m.name} className="flex flex-col gap-[18px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-ph">
                <ImageSlot placeholder={`Foto 1:1 — ${m.name}`} src={m.img} alt={m.name} />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
                  <h3 className="m-0 font-display text-xl font-extrabold tracking-[.02em] uppercase">{m.name}</h3>
                  <span className="text-base font-semibold whitespace-nowrap">{m.price}</span>
                </div>
                <p className="mt-1 mb-0 text-[15px] leading-[1.55] text-pretty text-muted">{m.desc}</p>
                <a
                  href={wa(`Olá, Torrinco's! Quero pedir um ${m.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className="flex min-h-11 items-center self-start py-2.5 text-sm font-semibold whitespace-nowrap text-teal-link hover:text-ink"
                >
                  Pedir esse no WhatsApp →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

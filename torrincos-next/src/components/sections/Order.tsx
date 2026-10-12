import Reveal from "../Reveal";
import { IFOOD_URL, WA_HREF } from "@/lib/site";

const row =
  "grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-4 border-b border-ink py-[clamp(28px,4vw,48px)] text-ink hover:text-teal-link sm:grid-cols-[minmax(0,1fr)_minmax(0,300px)_auto]";
const big = "font-display text-[clamp(56px,10vw,160px)] leading-[.85] font-extrabold tracking-[-.05em]";

export default function Order() {
  return (
    <section id="pedir" className="mx-auto max-w-[1320px] px-6 py-[clamp(80px,10vw,144px)]">
      <div className="border-t border-ink">
        <Reveal as="a" href={WA_HREF} target="_blank" rel="noopener" className={row}>
          <span className={big}>Pede aqui</span>
          <span className="flex max-w-[300px] flex-col gap-1.5">
            <span className="font-display text-[22px] font-extrabold text-ink">WhatsApp</span>
            <span className="text-[15px] leading-normal text-muted">
              Fala direto com a cozinha. Pix, cartão ou dinheiro. Dá pra retirar no balcão.
            </span>
          </span>
          <span className="flex size-16 items-center justify-center rounded-full bg-teal text-[26px] text-ink">→</span>
        </Reveal>
        <Reveal as="a" href={IFOOD_URL} target="_blank" rel="noopener" className={row}>
          <span className={big}>ou aqui</span>
          <span className="flex max-w-[300px] flex-col gap-1.5">
            <span className="font-display text-[22px] font-extrabold text-ink">iFood</span>
            <span className="text-[15px] leading-normal text-muted">
              Mesmo cardápio, com seus cupons e a entrega acompanhada pelo app.
            </span>
          </span>
          <span className="flex size-16 items-center justify-center rounded-full border border-ink text-[26px] text-ink">↗</span>
        </Reveal>
      </div>
    </section>
  );
}

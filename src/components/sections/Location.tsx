import ImageSlot from "../ImageSlot";
import Reveal from "../Reveal";
import { INSTAGRAM_URL, MAPS_URL, WA_DISPLAY, WA_HREF } from "@/lib/site";

const link = "border-b border-ink text-ink hover:border-teal-link hover:text-teal-link";

export default function Location() {
  return (
    <section
      id="onde"
      className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,6vw,96px)] px-6 pb-[clamp(80px,10vw,144px)]"
    >
      <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-ph">
        <ImageSlot placeholder="Foto — fachada / balcão" src="/images/fachada.jpg" alt="Fachada da Torrinco's Burger" />
      </Reveal>
      <Reveal className="flex flex-col gap-9">
        <h2 className="m-0 font-display text-[clamp(40px,5vw,72px)] leading-[.95] font-extrabold tracking-[-.04em]">
          Passa aqui.
        </h2>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-10 gap-y-5 text-base leading-[1.55]">
          <dt className="text-muted">Endereço</dt>
          <dd className="m-0">Rua Exemplo, 123 — Centro<br />Paulínia, SP</dd>
          <dt className="text-muted">Horário</dt>
          <dd className="m-0">Terça a domingo, 18h às 23h30<br /><span className="text-muted">Segunda fechado</span></dd>
          <dt className="text-muted">WhatsApp</dt>
          <dd className="m-0"><a href={WA_HREF} target="_blank" rel="noopener" className={link}>{WA_DISPLAY}</a></dd>
          <dt className="text-muted">Instagram</dt>
          <dd className="m-0"><a href={INSTAGRAM_URL} target="_blank" rel="noopener" className={link}>@torrincosburger</a></dd>
        </dl>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener"
          className="flex h-[52px] items-center self-start rounded-full border border-ink px-[26px] text-[15px] font-semibold whitespace-nowrap text-ink hover:bg-ink hover:text-white"
        >
          Abrir no Google Maps
        </a>
      </Reveal>
    </section>
  );
}

import Reveal from "../Reveal";
import { REVIEWS } from "@/lib/site";

export default function Reviews() {
  return (
    <section className="bg-soft">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-12 px-6 py-[clamp(72px,9vw,128px)]">
        <Reveal className="flex flex-col gap-2">
          <span className="font-display text-[clamp(88px,10vw,148px)] leading-[.85] font-extrabold tracking-[-.05em]">4,9</span>
          <span className="text-[15px] text-muted">média das avaliações no iFood</span>
        </Reveal>
        {REVIEWS.map((r) => (
          <Reveal as="figure" key={r.who} className="m-0 flex flex-col justify-end gap-4">
            <blockquote className="m-0 font-display text-[clamp(19px,1.7vw,23px)] leading-[1.4] font-semibold tracking-[-.01em] text-pretty">
              “{r.text}”
            </blockquote>
            <figcaption className="text-sm text-muted">{r.who}</figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

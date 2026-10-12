import { IFOOD_URL, INSTAGRAM_URL, WA_HREF } from "@/lib/site";

const link = "py-3 text-ink hover:text-teal-link";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-6 py-7 text-sm text-muted">
        <span>© 2026 Torrinco&apos;s Burger · Paulínia, SP</span>
        <div className="flex flex-wrap gap-5">
          <a href={WA_HREF} target="_blank" rel="noopener" className={link}>WhatsApp</a>
          <a href={IFOOD_URL} target="_blank" rel="noopener" className={link}>iFood</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className={link}>Instagram</a>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="-mb-[.1em] text-center font-display text-[17vw] leading-[.78] font-black tracking-[-.045em] whitespace-nowrap text-teal select-none"
      >
        TORRINCO&apos;S
      </div>
    </footer>
  );
}

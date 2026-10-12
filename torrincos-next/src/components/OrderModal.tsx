"use client";

import { IFOOD_URL, WA_HREF } from "@/lib/site";
import { useOrder } from "./OrderProvider";

export default function OrderModal() {
  const { open, setOpen } = useOrder();
  if (!open) return null;
  const close = () => setOpen(false);

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 sm:items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Escolha como pedir"
        className="relative flex w-full max-w-[460px] flex-col gap-3 rounded-[20px] bg-white px-6 pt-7 pb-6 shadow-modal"
      >
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute top-3 right-3 size-12 cursor-pointer rounded-full border-0 bg-soft text-[22px] text-ink hover:bg-line"
        >
          ×
        </button>
        <h3 className="mb-2 pr-14 font-display text-[26px] leading-[1.1] font-extrabold tracking-[-.03em]">
          Por onde você quer pedir?
        </h3>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener"
          onClick={close}
          className="flex min-h-[68px] items-center justify-between gap-4 rounded-[14px] bg-teal px-5 py-4 text-ink hover:bg-teal-hover hover:text-ink"
        >
          <span className="flex flex-col gap-0.5">
            <span className="text-[17px] font-semibold">WhatsApp</span>
            <span className="text-[13px]">Direto com a cozinha</span>
          </span>
          <span className="text-xl">→</span>
        </a>
        <a
          href={IFOOD_URL}
          target="_blank"
          rel="noopener"
          onClick={close}
          className="flex min-h-[68px] items-center justify-between gap-4 rounded-[14px] border border-line px-5 py-4 text-ink hover:border-ink hover:text-ink"
        >
          <span className="flex flex-col gap-0.5">
            <span className="text-[17px] font-semibold">iFood</span>
            <span className="text-[13px] text-muted">Pelo app, com seus cupons</span>
          </span>
          <span className="text-xl">↗</span>
        </a>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { IFOOD_URL, WA_HREF } from "@/lib/site";
import { useOrder } from "./OrderProvider";

export default function StickyBar() {
  const [scrolled, setScrolled] = useState(false);
  const { open } = useOrder();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!scrolled || open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-25 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur-[10px] desk:hidden">
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener"
        className="flex h-[50px] items-center justify-center rounded-full bg-teal text-[15px] font-semibold text-ink hover:bg-teal-hover hover:text-ink"
      >
        WhatsApp
      </a>
      <a
        href={IFOOD_URL}
        target="_blank"
        rel="noopener"
        className="flex h-[50px] items-center justify-center rounded-full border border-ink text-[15px] font-semibold text-ink hover:text-ink"
      >
        iFood
      </a>
    </div>
  );
}

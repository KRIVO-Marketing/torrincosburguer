"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IFOOD_URL } from "@/lib/site";
import { useOrder } from "./OrderProvider";

const navLink = "whitespace-nowrap text-sm text-ink hover:text-teal-link";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const { setOpen } = useOrder();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-paper/95 backdrop-blur-[10px] transition-colors duration-300 ${
        solid ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_auto] items-center gap-4 px-6 py-2 desk:grid-cols-[1fr_auto_1fr]">
        <nav className="hidden gap-1 desk:flex">
          <a href="#cardapio" className={`${navLink} py-3.5 pr-3 pl-0`}>Cardápio</a>
          <a href="#casa" className={`${navLink} px-3 py-3.5`}>A casa</a>
          <a href="#onde" className={`${navLink} px-3 py-3.5`}>Onde estamos</a>
        </nav>
        <a
          href="#topo"
          aria-label="Torrinco's — início"
          className="flex min-h-12 items-center justify-self-start desk:justify-self-center"
        >
          <Image src="/images/logo.png" alt="Torrinco's Burger" width={526} height={244} priority className="h-10 w-auto" />
        </a>
        <div className="flex items-center gap-2 justify-self-end">
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener"
            className={`${navLink} hidden px-3 py-3.5 desk:block`}
          >
            iFood ↗
          </a>
          <button
            onClick={() => setOpen(true)}
            className="h-11 cursor-pointer whitespace-nowrap rounded-full border-0 bg-ink px-5 text-sm font-semibold text-white hover:bg-ink-hover"
          >
            Fazer pedido
          </button>
        </div>
      </div>
    </header>
  );
}

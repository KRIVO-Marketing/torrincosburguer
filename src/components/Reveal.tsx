"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "figure" | "a";
  href?: string;
  target?: string;
  rel?: string;
};

/** Fade + translateY ao entrar na viewport (só para elementos abaixo da dobra). */
export default function Reveal({ children, as = "div", ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    el.style.opacity = "0";
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        el.style.opacity = "";
        el.animate(
          [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "none" }],
          { duration: 900, easing: "cubic-bezier(.16,1,.3,1)" },
        );
        io.disconnect();
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}

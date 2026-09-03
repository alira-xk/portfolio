"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const { href } of navLinks) {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-mono-200 bg-mono-50/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-display text-base font-medium tracking-tight text-mono-950 outline-2 outline-offset-2 outline-mono-700 transition-opacity focus:outline hover:opacity-70"
          aria-label="Ali Raza - Home"
        >
          AR.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors outline-2 outline-offset-2 outline-mono-700 focus:outline ${
                  active === href
                    ? "text-mono-950"
                    : "text-mono-400 hover:text-mono-700"
                }`}
                aria-current={active === href ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="text-xs font-medium uppercase tracking-[0.15em] text-mono-950 outline-2 outline-offset-2 outline-mono-700 transition-colors focus:outline hover:text-mono-500"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

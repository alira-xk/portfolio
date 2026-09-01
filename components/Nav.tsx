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
          ? "border-b border-white/5 bg-base/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight outline-2 outline-offset-2 outline-accent transition-colors focus:outline hover:text-accent-light"
          aria-label="Ali Raza - Home"
        >
          <span className="gradient-text">AR</span>
          <span className="ml-1 text-text-muted">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-2 outline-offset-2 outline-accent focus:outline ${
                  active === href
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary"
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
          className="btn-primary text-xs outline-2 outline-offset-2 outline-white focus:outline md:text-sm"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
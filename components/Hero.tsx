"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (nameRef.current) {
        nameRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24 pb-10"
      aria-label="Hero"
    >
      {/* Accent gradient blob */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-x flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <p className="kicker">
                <span
                  className="inline-block h-1 w-6 rounded-sm bg-accent align-middle mr-3"
                  aria-hidden="true"
                />
                {profile.location}{" "}
                <span className="mx-2 text-mono-300">/</span>{" "}
                <span className="text-accent">{profile.role}</span>
              </p>
            </Reveal>

            <div ref={nameRef} className="will-change-transform">
              <Reveal delay={0.1}>
                <h1 className="font-display font-medium tracking-ultratight leading-[0.9] text-mono-950">
                  <span className="block text-[clamp(4rem,14vw,12rem)] animate-float">
                    Ali
                  </span>
                  <span className="block text-[clamp(4rem,14vw,12rem)] text-mono-300">
                    Raza
                    <span className="text-accent">.</span>
                  </span>
                </h1>
              </Reveal>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:text-right">
            <p className="index-num text-mono-200">
              01<span className="text-mono-300">/05</span>
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-mono-400">
              Section
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={0.2}>
              <p className="max-w-xl text-base leading-relaxed text-mono-600 md:text-lg">
                {profile.tagline}
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 flex md:justify-end items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-mono-700">
              Available for work
            </p>
          </div>
        </div>
      </div>

      <div className="container-x flex items-end justify-between">
        <div className="flex items-center gap-3 text-mono-400 group cursor-pointer">
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </p>
        </div>
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-mono-400 tabular-nums">
          {new Date().getFullYear()} — Portfolio
        </p>
      </div>
    </section>
  );
}

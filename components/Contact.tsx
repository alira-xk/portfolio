"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="invert relative overflow-hidden section-pad border-t border-mono-800"
      aria-labelledby="contact-heading"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Cursor-following accent glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(255,85,0,0.15), transparent 40%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="index-num text-mono-800">05</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="kicker text-mono-500">
              <span className="inline-block h-1 w-6 rounded-sm bg-accent align-middle mr-3" />
              Contact
            </p>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-medium tracking-tight md:text-5xl text-mono-50"
            >
              Let&apos;s work <span className="text-mono-600">together.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <Reveal delay={0.1}>
            <a
              href={`mailto:${profile.email}`}
              className="group block font-display text-3xl font-medium tracking-tight text-mono-50 outline-2 outline-offset-4 outline-mono-700 transition-colors hover:text-accent focus:outline md:text-5xl lg:text-6xl"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                {profile.email}
              </span>
              <ArrowRight
                className="ml-4 inline-block h-8 w-8 text-accent transition-transform duration-300 group-hover:translate-x-2 md:h-12 md:w-12"
                aria-hidden="true"
              />
            </a>
          </Reveal>

          <div className="mt-16 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-mono-500">
              Available for new opportunities
            </p>
          </div>

          <Reveal delay={0.2}>
            <div className="rule mt-16 border-mono-800" />
            <nav
              className="flex flex-wrap gap-8 py-8"
              aria-label="Social media links"
            >
              {profile.socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-mono-500 outline-2 outline-offset-2 outline-mono-700 transition-colors hover:text-accent focus:outline"
                  >
                    {Icon && (
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    )}
                    {s.label}
                  </a>
                );
              })}
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

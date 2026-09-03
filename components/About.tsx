"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

function AnimatedNumber({ target, label }: { target: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start justify-end p-6 border-b border-r border-mono-200 min-h-[140px] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-3xl font-medium text-mono-950 md:text-4xl">
        {target}
      </dd>
      <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-mono-500">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate marquee content for seamless loop
  const marqueeItems = [
    "Software Engineer",
    "Backend Developer",
    "AI / NLP",
    "Lahore, Pakistan",
    "Available for work",
    "React & Next.js",
    "Node.js",
    "Python & PyTorch",
  ];

  return (
    <section
      id="about"
      className="section-pad border-t border-mono-200"
      aria-labelledby="about-heading"
    >
      {/* Marquee strip */}
      <div className="marquee-strip border-y border-mono-200 py-3 mb-16 -mx-6 px-6 md:-mx-10 md:px-10">
        <div className="marquee-content" ref={marqueeRef}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-mono-400">
                {item}
              </span>
              <span className="mx-6 text-mono-300 text-xs">—</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-x">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="index-num text-mono-200">02</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="kicker">
              <span className="inline-block h-1 w-6 rounded-sm bg-accent align-middle mr-3" />
              About
            </p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-medium tracking-tight md:text-5xl"
            >
              Engineering{" "}
              <span className="text-mono-400">scalable, secure</span> systems.
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6">
          <Reveal delay={0.1} className="col-span-12 md:col-span-7 space-y-6">
            {profile.highlights.map((h, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-mono-600 md:text-lg"
              >
                {h}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 md:col-span-5">
            <dl className="grid grid-cols-2 border-t border-l border-mono-200">
              {profile.stats.map((s) => (
                <AnimatedNumber key={s.label} target={s.value} label={s.label} />
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-32 grid grid-cols-12 gap-6">
          <Reveal delay={0.1} className="col-span-12 md:col-span-6">
            <p className="kicker">Education</p>
            <div className="border-t border-mono-200">
              {profile.education.map((e, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-12 gap-4 border-b border-mono-200 py-6 transition-all duration-300"
                >
                  <p className="col-span-12 md:col-span-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mono-400 group-hover:text-accent transition-colors duration-300">
                    {e.period}
                  </p>
                  <div className="col-span-12 md:col-span-9">
                    <p className="font-display text-base font-medium text-mono-950">
                      {e.degree}
                    </p>
                    <p className="text-sm text-mono-600">{e.school}</p>
                    <p className="mt-1 text-xs text-mono-400">{e.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 md:col-span-6">
            <p className="kicker">Certifications</p>
            <div className="border-t border-mono-200">
              {profile.certifications.map((c, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between border-b border-mono-200 py-6 transition-all duration-300"
                >
                  <p className="text-sm font-medium text-mono-950 group-hover:text-accent transition-colors duration-300">
                    {c.name}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-mono-400">
                    {c.date}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

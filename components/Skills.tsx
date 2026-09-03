"use client";

import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad border-t border-mono-200"
      aria-labelledby="skills-heading"
    >
      {/* Vertical marquee on the left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 overflow-hidden">
        <div className="animate-marquee-vertical flex flex-col gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <span
              key={i}
              className="text-[10px] font-medium uppercase tracking-[0.3em] text-mono-300 whitespace-nowrap"
            >
              Software Engineering —
            </span>
          ))}
        </div>
      </div>

      <div className="container-x">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="index-num text-mono-200">04</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="kicker">
              <span className="inline-block h-1 w-6 rounded-sm bg-accent align-middle mr-3" />
              Toolbox
            </p>
            <h2
              id="skills-heading"
              className="font-display text-3xl font-medium tracking-tight md:text-5xl"
            >
              Technologies & <span className="text-mono-400">tools.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 border-t border-mono-200">
          {skillGroups.map((g, i) => (
            <Reveal key={g.category} delay={0.05 * i}>
              <div className="group grid grid-cols-12 gap-4 border-b border-mono-200 py-8 hover:bg-mono-100/50 transition-colors duration-300">
                <div className="col-span-12 md:col-span-2">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-mono-400 tabular-nums group-hover:text-accent transition-colors duration-300">
                    0{i + 1}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <h3 className="font-display text-base font-medium text-mono-950">
                    {g.category}
                  </h3>
                </div>
                <div
                  className="col-span-12 md:col-span-7 flex flex-wrap items-center gap-x-2 gap-y-2"
                  role="list"
                  aria-label={`${g.category} skills`}
                >
                  {g.skills.map((s, idx) => (
                    <span
                      key={s}
                      role="listitem"
                      className="text-sm text-mono-600 group-hover:text-mono-950 transition-colors duration-300"
                    >
                      {s}
                      {idx < g.skills.length - 1 && (
                        <span className="ml-2 text-accent/50">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

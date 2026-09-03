"use client";

import { Layout, Sparkles, Database, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ElementType> = {
  layout: Layout,
  sparkles: Sparkles,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 py-24 md:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="container-x">
        <Reveal>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            Toolbox
          </p>
          <h2
            id="skills-heading"
            className="font-display text-3xl font-bold md:text-4xl"
          >
            Technologies & <span className="gradient-text">tools</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-stretch">
          {skillGroups.map((g, i) => {
            const Icon = iconMap[g.icon];
            return (
              <Reveal key={g.category} delay={0.1 * i}>
                <section className="card flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                    </div>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      {g.category}
                    </h3>
                  </div>
                  <div
                    className="mt-4 flex flex-wrap gap-2"
                    role="list"
                    aria-label={`${g.category} skills`}
                  >
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        role="listitem"
                        className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm font-medium text-text-secondary transition-all outline-2 outline-offset-2 outline-accent hover:border-white/10 hover:text-text-primary focus:outline"
                        tabIndex={0}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
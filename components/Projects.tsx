"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad border-t border-mono-200"
      aria-labelledby="projects-heading"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="index-num text-mono-200">03</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="kicker">Selected Work</p>
            <h2
              id="projects-heading"
              className="font-display text-3xl font-medium tracking-tight md:text-5xl"
            >
              <span className="text-mono-400">Featured</span> Projects.
            </h2>
          </div>
        </div>

        <div className="mt-16 border-t border-mono-200">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <div className="group grid grid-cols-12 gap-4 items-start border-b border-mono-200 py-10 transition-transform duration-300 hover:translate-x-2">
                <div className="col-span-12 md:col-span-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-mono-400 tabular-nums">
                    0{i + 1}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-display text-xl font-medium text-mono-950 transition-colors group-hover:text-mono-500 md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mono-500 md:mt-4">
                    {p.description}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-3 md:col-start-7 flex flex-wrap gap-2 md:gap-3 content-start pt-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium uppercase tracking-[0.15em] text-mono-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="col-span-12 md:col-span-2 md:col-start-10 flex flex-col gap-3 items-start md:items-end pt-1">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-mono-700 outline-2 outline-offset-2 outline-mono-700 transition-colors hover:text-mono-950 focus:outline"
                    >
                      <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      Source
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-mono-700 outline-2 outline-offset-2 outline-mono-700 transition-colors hover:text-mono-950 focus:outline"
                    >
                      <ExternalLink
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

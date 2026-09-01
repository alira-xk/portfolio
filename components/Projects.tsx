"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="container-x">
        <Reveal>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            Featured Work
          </p>
          <h2
            id="projects-heading"
            className="font-display text-3xl font-bold md:text-4xl"
          >
            Selected <span className="gradient-text">projects</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.1 * i}>
              <article className="group card relative overflow-hidden p-0 outline-2 outline-offset-2 outline-accent hover:border-white/20 focus-within:outline">
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${p.accent}`}
                />
                <div className="relative z-10 flex h-full flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-light outline-2 outline-offset-2 outline-accent transition-colors hover:text-accent focus:outline"
                      >
                        Live Demo{" "}
                        <ExternalLink
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted outline-2 outline-offset-2 outline-accent transition-colors hover:text-text-primary focus:outline"
                      >
                        <GithubIcon className="h-3 w-3" aria-hidden="true" />{" "}
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
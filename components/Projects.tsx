"use client";

import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = rowRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    el.style.setProperty("--mx", `${x * 0.05}px`);
  };

  const handleMouseLeave = () => {
    const el = rowRef.current;
    if (el) el.style.setProperty("--mx", "0px");
  };

  return (
    <Reveal delay={0.05 * index}>
      <div
        ref={rowRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group grid grid-cols-12 gap-4 items-start border-b border-mono-200 py-10 cursor-pointer transition-all duration-300"
        style={{ transform: "translateX(var(--mx, 0px))" }}
      >
        <div className="col-span-12 md:col-span-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-mono-400 tabular-nums group-hover:text-accent transition-colors duration-300">
            0{index + 1}
          </p>
        </div>

        <div className="col-span-12 md:col-span-5">
          <h3 className="font-display text-xl font-medium text-mono-950 transition-colors group-hover:text-mono-600 md:text-2xl">
            {project.title}
            <span className="ml-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mono-500 md:mt-4">
            {project.description}
          </p>
        </div>

        <div className="col-span-12 md:col-span-3 md:col-start-7 flex flex-wrap gap-x-3 gap-y-1 content-start pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-mono-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="col-span-12 md:col-span-2 md:col-start-10 flex flex-col gap-3 items-start md:items-end pt-1">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-mono-700 outline-2 outline-offset-2 outline-mono-700 transition-colors hover:text-accent focus:outline"
            >
              <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-mono-700 outline-2 outline-offset-2 outline-mono-700 transition-colors hover:text-accent focus:outline"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

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
            <p className="kicker">
              <span className="inline-block h-1 w-6 rounded-sm bg-accent align-middle mr-3" />
              Selected Work
            </p>
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
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

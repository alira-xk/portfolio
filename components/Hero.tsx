"use client";

import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: Mail,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="container-x">
        <Reveal delay={0.1}>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-text-muted">
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="gradient-text">{profile.name.split(" ")[1]}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary md:text-xl">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-text-muted">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="btn-primary outline-2 outline-offset-2 outline-white focus:outline"
          >
            View Projects
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-ghost outline-2 outline-offset-2 outline-white focus:outline">
            Contact Me
          </a>
        </Reveal>

        <Reveal delay={0.6}>
          <nav className="mt-8 flex items-center gap-2" aria-label="Social links">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group rounded-lg p-2 text-text-muted transition-all outline-2 outline-offset-2 outline-accent focus:outline hover:text-text-primary"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
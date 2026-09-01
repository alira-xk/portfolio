"use client";

import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: Mail,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold md:text-4xl"
          >
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            I&apos;m currently open to freelance and full-time opportunities.
            Whether you have a project in mind or just want to say hello —
            I&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary gap-3 px-8 py-4 text-base outline-2 outline-offset-2 outline-white focus:outline"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>{profile.email}</span>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <nav
            className="flex justify-center gap-3"
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
                  aria-label={`Visit my ${s.label}`}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-text-muted transition-all outline-2 outline-offset-2 outline-accent hover:-translate-y-0.5 hover:border-white/20 hover:text-text-primary focus:outline"
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
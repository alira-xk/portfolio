import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad border-t border-mono-200"
      aria-labelledby="about-heading"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="index-num text-mono-200">02</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="kicker">About</p>
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
                <div
                  key={s.label}
                  className="flex flex-col items-start justify-end p-6 border-b border-r border-mono-200 min-h-[140px]"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-medium text-mono-950 md:text-4xl">
                    {s.value}
                  </dd>
                  <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-mono-500">
                    {s.label}
                  </span>
                </div>
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
                  className="grid grid-cols-12 gap-4 border-b border-mono-200 py-6"
                >
                  <p className="col-span-12 md:col-span-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mono-400">
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
                  className="flex items-center justify-between border-b border-mono-200 py-6"
                >
                  <p className="text-sm font-medium text-mono-950">{c.name}</p>
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

import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container-x">
        <Reveal>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            About Me
          </p>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold md:text-4xl"
          >
            Engineering{" "}
            <span className="gradient-text">scalable, secure</span> systems
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Reveal delay={0.1} className="space-y-4">
            {profile.highlights.map((h, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-text-secondary"
              >
                {h}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="grid grid-cols-2 gap-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="card flex flex-col items-center justify-center p-6 text-center"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-bold gradient-text">
                    {s.value}
                  </dd>
                  <span className="mt-1 text-xs text-text-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal delay={0.1}>
            <h3 className="font-display text-lg font-semibold mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {profile.education.map((e, i) => (
                <div key={i} className="card p-4">
                  <p className="font-medium text-sm">{e.school}</p>
                  <p className="text-xs text-text-muted">{e.period}</p>
                  <p className="mt-1 text-sm text-text-secondary">{e.degree}</p>
                  <p className="text-xs text-text-muted">{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-display text-lg font-semibold mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {profile.certifications.map((c, i) => (
                <div key={i} className="card flex items-center justify-between p-4">
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-text-muted">{c.date}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
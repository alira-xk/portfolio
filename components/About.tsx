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
            Building products that{" "}
            <span className="gradient-text">matter</span>
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
      </div>
    </section>
  );
}
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between pt-24 pb-10"
      aria-label="Hero"
    >
      <div className="container-x flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-9">
            <p className="kicker">
              {profile.location} <span className="mx-2 text-mono-300">/</span>{" "}
              {profile.role}
            </p>
            <h1 className="font-display font-medium tracking-ultratight leading-[0.9] text-mono-950">
              <span className="block text-[clamp(3.5rem,12vw,11rem)]">
                Ali
              </span>
              <span className="block text-[clamp(3.5rem,12vw,11rem)] text-mono-300">
                Raza.
              </span>
            </h1>
          </div>

          <div className="col-span-12 md:col-span-3 md:text-right">
            <p className="index-num text-mono-200">
              01<span className="text-mono-300">/05</span>
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-mono-400">
              Section
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-mono-600 md:text-lg">
              {profile.tagline}
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 flex md:justify-end items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mono-950 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mono-950" />
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-mono-700">
              Available for work
            </p>
          </div>
        </div>
      </div>

      <div className="container-x flex items-end justify-between">
        <div className="flex items-center gap-3 text-mono-400">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </p>
        </div>
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-mono-400 tabular-nums">
          {new Date().getFullYear()} — Portfolio
        </p>
      </div>
    </section>
  );
}

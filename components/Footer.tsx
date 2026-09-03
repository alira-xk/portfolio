import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

export default function Footer() {
  return (
    <footer className="border-t border-mono-200 py-8">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-display text-sm font-medium text-mono-950">
          AR. — {profile.name}
        </p>

        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-mono-400">
          {new Date().getFullYear()} — All rights reserved
        </p>

        <nav aria-label="Social media links">
          <ul className="flex items-center gap-6">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon];
              if (!Icon) return null;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-mono-400 outline-2 outline-offset-2 outline-mono-700 transition-colors hover:text-mono-950 focus:outline"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="flex items-center gap-1 text-sm text-text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with
          <Heart
            className="h-3.5 w-3.5 text-red-400"
            aria-hidden="true"
            role="img"
            aria-label="love"
          />
          and{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors outline-2 outline-offset-2 outline-accent hover:text-text-primary focus:outline"
          >
            Next.js
          </a>
        </p>
        <nav aria-label="Social media links">
          <ul className="flex items-center gap-3">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon];
              if (!Icon) return null;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${s.label}`}
                    className="text-text-muted outline-2 outline-offset-2 outline-accent transition-colors hover:text-text-primary focus:outline"
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
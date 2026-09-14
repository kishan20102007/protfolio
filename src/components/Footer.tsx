import { footerLinks } from "@/data/navigation";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em]">
              {site.fullName}
            </p>
            <p className="mt-2 text-sm text-muted">{site.shortRole}</p>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Built with care, curiosity, and modern web technology.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            (c) 2026 {site.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-3">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted hover:text-foreground"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted hover:text-foreground"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted hover:text-foreground"
              >
                <Mail size={16} />
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted hover:text-foreground"
              >
                <MessageCircle size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

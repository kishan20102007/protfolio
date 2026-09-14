import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-accent uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s Build Something.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Have a website, landing page, or creative project in mind? Tell me
            what you&apos;re building and let&apos;s discuss it.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-foreground hover:text-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Phone</dt>
              <dd className="mt-1">
                <a href="tel:+918247532964" className="hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">LinkedIn</dt>
              <dd className="mt-1 break-all">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {site.linkedin}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">GitHub</dt>
              <dd className="mt-1 break-all">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {site.github}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-3 sm:grid-cols-2">
            <ButtonLink
              href={`mailto:${site.email}`}
              external={false}
              className="w-full"
            >
              <Mail size={16} />
              Email Me
            </ButtonLink>
            <ButtonLink href={site.whatsapp} variant="secondary" className="w-full">
              <MessageCircle size={16} />
              WhatsApp Me
            </ButtonLink>
            <ButtonLink href={site.linkedin} variant="secondary" className="w-full">
              <LinkedInIcon />
              LinkedIn
            </ButtonLink>
            <ButtonLink href={site.github} variant="secondary" className="w-full">
              <GitHubIcon />
              GitHub
            </ButtonLink>
            <a
              href="tel:+918247532964"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 px-5 text-sm font-medium hover:border-accent/40 sm:col-span-2"
            >
              <Phone size={16} />
              Call {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

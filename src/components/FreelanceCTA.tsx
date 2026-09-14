import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function FreelanceCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-surface px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(92,200,255,0.12),transparent_55%)]" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Have an Idea? Let&apos;s Build It.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
                Whether you need a website, landing page, interactive experience,
                or AI-powered creative content, I&apos;m open to working on
                interesting freelance projects.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="#contact" external={false}>
                  Start a Conversation
                </ButtonLink>
                <ButtonLink href="#projects" variant="secondary" external={false}>
                  View My Projects
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

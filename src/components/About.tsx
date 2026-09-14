import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-accent uppercase">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A Developer Who Builds, Learns, and Creates.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 text-base leading-7 text-muted sm:text-[1.05rem]">
            <p>
              I&apos;m {site.firstName}, a B.Tech Computer Science and Business
              Systems student at {site.college}.
            </p>
            <p>
              My focus is building practical digital products that combine
              development, design, and emerging AI technologies.
            </p>
            <p>
              I work across full-stack web development, UI/UX, interactive web
              experiences, and AI-powered creative content.
            </p>
            <p>
              I&apos;m currently expanding my knowledge in{" "}
              <span className="text-foreground">
                Artificial Intelligence and Machine Learning
              </span>
              . My long-term goal is to combine strong software engineering
              skills with AI to build intelligent and useful products.
            </p>
            <div className="pt-2">
              <ButtonLink href="#contact" variant="secondary" external={false}>
                Get in Touch
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

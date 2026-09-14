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
            Developer. Designer. Builder.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 text-base leading-7 text-muted sm:text-[1.05rem]">
            <p>
              I&apos;m {site.firstName}, a B.Tech Computer Science and Business
              Systems student at {site.college}.
            </p>
            <p>
              I build practical digital products by combining full-stack
              development, UI/UX design, interactive web technologies, and
              AI-powered creative tools.
            </p>
            <p>
              I&apos;m currently expanding my knowledge in{" "}
              <span className="text-foreground">
                Artificial Intelligence and Machine Learning
              </span>{" "}
              while continuing to build real-world web projects and creative
              digital experiences.
            </p>
            <div className="grid gap-3 pt-2 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-muted">Education</p>
                <p className="mt-1 text-foreground">{site.status}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-muted">Branch</p>
                <p className="mt-1 text-foreground">{site.branch}</p>
              </div>
            </div>
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

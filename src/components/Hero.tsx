import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { HeroVisual } from "@/components/HeroVisual";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
            {site.availability}
          </p>
          <p className="mb-4 text-sm font-medium text-muted">
            Full-Stack Web Developer x AI Creative Developer
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {site.supporting}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact" external={false}>
              Start a Project
            </ButtonLink>
            <ButtonLink href="#projects" variant="secondary" external={false}>
              View My Work
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-muted">
            {["Websites", "Landing Pages", "AI Creatives", "3D Experiences"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}

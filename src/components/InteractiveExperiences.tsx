"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import dynamic from "next/dynamic";

const InteractiveScene = dynamic(
  () =>
    import("@/components/InteractiveScene").then((mod) => mod.InteractiveScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] rounded-3xl border border-white/8 bg-surface sm:h-[380px]" />
    ),
  },
);

export function InteractiveExperiences() {
  return (
    <section id="interactive" className="py-20 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-accent uppercase">
            3D / Interactive
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Websites That Go Beyond Static Pages.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            I can build websites that go beyond static pages, combining modern
            UI, motion, interaction, and carefully designed 3D elements to
            create memorable digital experiences.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <InteractiveScene />
        </Reveal>
      </Container>
    </section>
  );
}

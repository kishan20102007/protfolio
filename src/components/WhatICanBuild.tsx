import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const offerings = [
  "Business websites",
  "Startup landing pages",
  "Restaurant websites",
  "Education platforms",
  "Portfolio sites",
  "Campaign landing pages",
  "UI/UX for web products",
  "AI ads and posters",
];

export function WhatICanBuild() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Outcomes"
            title="What I Can Build For You"
            description="If you need a digital presence that looks considered and converts, these are the kinds of products I take from idea to launch."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="rounded-2xl border border-white/8 bg-surface px-5 py-6 text-sm font-medium">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

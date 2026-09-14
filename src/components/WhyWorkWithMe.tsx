import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { reasons } from "@/data/reasons";
import { Cpu, Layers, Sparkles, Handshake } from "lucide-react";

const icons = [Cpu, Layers, Sparkles, Handshake];

export function WhyWorkWithMe() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Approach"
            title="Why Work With Me"
            description="The working style behind the work: current tools, design-aware engineering, and a bias toward the business problem."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={reason.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-white/8 bg-surface p-6 sm:p-7">
                  <Icon className="mb-4 text-accent" size={20} strokeWidth={1.75} />
                  <h3 className="text-lg font-medium">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

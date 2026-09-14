import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How Engagements Typically Run"
            description="A clear path from first conversation to a launched product — without extra process theater."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-white/8 bg-surface p-6">
                <p className="font-mono text-sm text-accent">{step.number}</p>
                <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

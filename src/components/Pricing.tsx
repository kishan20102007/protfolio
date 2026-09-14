import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingPlans } from "@/data/pricing";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Starting prices"
            title="Simple Freelance Packages"
            description="Clear starting points for websites, landing pages, and premium digital experiences. Final pricing depends on project requirements and scope."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.05}>
              <article
                className={`h-full rounded-2xl border p-6 sm:p-7 ${
                  plan.featured
                    ? "border-accent/45 bg-accent/[0.07]"
                    : "border-white/8 bg-surface"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                      {plan.name}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">{plan.type}</h3>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full border border-accent/30 px-3 py-1 text-[11px] font-medium text-accent">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 text-4xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                        strokeWidth={1.9}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-muted">
              These are starting prices, not fixed quotes. Final pricing depends
              on project requirements and scope.
            </p>
            <ButtonLink href="#contact" external={false} className="sm:shrink-0">
              Discuss Your Project
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

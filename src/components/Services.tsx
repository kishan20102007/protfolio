import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { Globe, Layout, Boxes, Sparkles, ImageIcon, PenTool } from "lucide-react";

const icons = [Globe, Layout, Boxes, Sparkles, ImageIcon, PenTool];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What I Can Build"
            description="A focused set of capabilities for brands that need a polished digital presence, from product websites to campaign visuals."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <article
                  className={`group h-full rounded-2xl border p-6 transition-colors ${
                    index < 2
                      ? "border-accent/30 bg-accent/[0.06]"
                      : "border-white/8 bg-surface hover:border-accent/30"
                  }`}
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-medium">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                  <p className="mt-5 text-xs tracking-wide text-muted/90">
                    {service.technologies.join(" / ")}
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

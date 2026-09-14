import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { creatives } from "@/data/creatives";

export function CreativeShowcase() {
  return (
    <section id="creative" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="AI + Creative Work"
            title="Not Just Code. I Build the Visual Story Too."
            description="Creative concepts for AI advertisements, posters, social media creatives, product promotions, marketing visuals, and UI/UX ideas."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {creatives.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <article className="overflow-hidden rounded-2xl border border-white/8 bg-surface">
                <div className="relative aspect-[4/3] bg-surface-2">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-2 text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
                    Creative Concept
                  </p>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

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
            eyebrow="AI + Creative Design"
            title="Not Just Code. I Build the Visual Story Too."
            description="Campaign visuals, posters, and interface concepts. Placeholder artwork is labeled so you can drop in real files later."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {creatives.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <article className="overflow-hidden rounded-2xl border border-white/8 bg-surface">
                <div className="relative aspect-[4/3] bg-surface-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
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

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Skills & Tech Stack"
            description="Tools I use to design, build, and ship digital products, plus the areas I'm actively expanding."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-white/8 bg-surface p-6">
                <h3 className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { ProjectPreview } from "@/components/ProjectPreview";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/8 bg-surface">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          ) : (
            <div className="h-full transition-transform duration-500 group-hover:scale-[1.03]">
              <ProjectPreview kind={project.preview} />
            </div>
          )}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="p-6 text-sm font-medium">View Project →</span>
          </div>
        </div>
      </a>
      <div className="p-6 sm:p-8">
        <p className="text-xs tracking-[0.18em] text-accent uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-[#071018] transition-colors hover:bg-accent-strong"
          >
            View Live Project
            <ArrowUpRight size={16} />
          </a>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-5 text-sm font-medium hover:border-accent/40"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

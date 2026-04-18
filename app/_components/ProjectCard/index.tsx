import Link from "next/link";
import { Tag } from "../Tag";
import { Project, ProjectType } from "@/app/types/project";
import { projectColorMap } from "@/content/colors";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3),0_2px_8px_-2px_rgba(0,0,0,0.04)] active:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex items-start justify-between gap-3">
                    <Tag size="sm" color={projectColorMap[project.type]}>
                        {project.type}
                    </Tag>
                    <span className="mt-0.5 text-xs text-zinc-400 tabular-nums">{project.year}</span>
                </div>
                <h3 className="mb-2 text-base leading-snug font-semibold text-zinc-900">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <Tag key={tag} size="xs">
                            {tag}
                        </Tag>
                    ))}
                </div>
            </article>
        </Link>
    );
};

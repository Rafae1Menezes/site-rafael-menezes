import Link from "next/link";
import { Tag } from "../Tag";
import { Project, ProjectType } from "@/src/types/project";
import { projectColorMap } from "@/content/colors";
import { getLocale } from "next-intl/server";

export const ProjectCard = async ({ project }: { project: Project }) => {
    const locale = await getLocale();

    return (
        <Link href={`/${locale}/projects/${project.slug}`}>
            <article className="group elevation1 flex h-full flex-col">
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

import { projectColorMap } from "@/content/colors";
import { Project } from "@/src/types/project";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import { Card } from "../Card";
import { Tag } from "../Tag";

export const ProjectCard = async ({ project }: { project: Project }) => {
    const locale = await getLocale();

    return (
        <Link href={`/${locale}/projects/${project.slug}`}>
            <Card classNames="transition-all duration-300 ease-out hover:-translate-y-1.5">
                <div className="mb-4 flex items-start justify-between gap-3">
                    <Tag size="sm" color={projectColorMap[project.type]}>
                        {project.type}
                    </Tag>
                    <span className="mt-0.5 text-xs text-zinc-400">{project.year}</span>
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
            </Card>
        </Link>
    );
};

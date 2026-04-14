"use client";
import { useEffect, useRef } from "react";
import { Tag, TagColor } from "../Tag";

type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    type: ProjectType;
    year: string;
    link?: string;
};

export type ProjectType =
    | "Fintech"
    | "Design System"
    | "Security"
    | "Tooling"
    | "Architecture"
    | "Optimization"
    | "DevOps"
    | "Product";

export const typeColorMap: Record<ProjectType, TagColor> = {
    Fintech: "blue",
    "Design System": "purple",
    Security: "red",
    Tooling: "amber",
    Architecture: "teal",
    Optimization: "green",
    DevOps: "zinc",
    Product: "pink",
};

export const ProjectCard = ({ project, isNew, index }: { project: Project; isNew: boolean; index: number }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (!isNew || !ref.current) return;

        const el = ref.current;
        const delay = index * 60;

        el.style.opacity = "0";
        el.style.transform = "translateY(-16px)";
        el.style.transition = "none";

        const raf = requestAnimationFrame(() => {
            setTimeout(() => {
                el.style.transition = `opacity 280ms ease ${delay}ms, transform 340ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 10);
        });

        return () => cancelAnimationFrame(raf);
    }, [isNew, index]);

    return (
        <a
            ref={ref}
            href="#"
            className="h-full w-full rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3),0_2px_8px_-2px_rgba(0,0,0,0.04)] active:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_2px_8px_-2px_rgba(0,0,0,0.04)]"
        >
            <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-3">
                    <Tag size="sm" color={typeColorMap[project.type]}>
                        {project.type}
                    </Tag>

                    <span className="mt-0.5 text-xs text-zinc-400 tabular-nums">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base leading-snug font-semibold text-zinc-900">{project.title}</h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-zinc-500">{project.description}</p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <Tag key={tag} size="xs">
                            {tag}
                        </Tag>
                    ))}
                </div>
            </article>
        </a>
    );
};

import { useEffect, useRef } from "react";

type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    type: string;
    year: string;
    link?: string;
};

const typeColors: Record<string, string> = {
    Fintech: "bg-blue-50 text-blue-700",
    "Design System": "bg-purple-50 text-purple-700",
    Security: "bg-red-50 text-red-700",
    Tooling: "bg-amber-50 text-amber-700",
    Architecture: "bg-teal-50 text-teal-700",
    Optimization: "bg-green-50 text-green-700",
    DevOps: "bg-zinc-100 text-zinc-700",
    Product: "bg-pink-50 text-pink-700",
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
            className="w-full h-full rounded-2xl transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3),0_2px_8px_-2px_rgba(0,0,0,0.04)]
        active:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_2px_8px_-2px_rgba(0,0,0,0.04)]"
        >
            <article className="group h-full flex flex-col bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                        className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-md ${typeColors[project.type] ?? "bg-zinc-100 text-zinc-600"}`}
                    >
                        {project.type}
                    </span>
                    <span className="text-xs text-zinc-400 tabular-nums mt-0.5">{project.year}</span>
                </div>

                <h3 className="text-base font-semibold text-zinc-900 mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </article>
        </a>
    );
};

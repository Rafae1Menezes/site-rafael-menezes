import { Header } from "@/app/_components/Header";
import { SkillCard } from "@/app/_components/SkillCard";
import { SKILLS } from "@/content/skills";

export const SkillsSection = () => {
    return (
        <section id="stack" className="relative w-full scroll-mt-10 overflow-hidden bg-zinc-50 py-16 sm:scroll-mt-14 sm:py-20">
            <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-50 select-none">
                <defs>
                    <pattern id="dot-grid-skill" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" className="fill-zinc-300" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid-skill)" />
            </svg>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Tecnologias" subtitle="Stack" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILLS.map((group) => (
                        <SkillCard key={group.category} group={group} />
                    ))}
                </div>
            </div>
        </section>
    );
};

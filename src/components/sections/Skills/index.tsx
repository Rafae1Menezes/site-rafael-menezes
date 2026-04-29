import { Header } from "@/src/components/layout/Header";
import { SkillCard } from "@/src/components/ui/SkillCard";
import { SKILLS } from "@/content/skills";

export const SkillsSection = () => {
    return (
        <section id="stack" className="w-full scroll-mt-10 bg-zinc-50 py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

import { Header } from "@/src/components/layout/Header";
import { SkillCard } from "@/src/components/ui/SkillCard";
import { SkillGroup } from "@/src/types/skill";
import { getTranslations } from "next-intl/server";

export const SkillsSection = async () => {
    const t = await getTranslations("skills");

    const SKILLS: SkillGroup[] = [
        {
            category: t("core.title"),
            description: t("core.subtitle"),
            skills: [
                { name: "TypeScript", level: t("specialist") },
                { name: "React", level: t("specialist") },
                { name: "Next.js", level: t("specialist") },
                { name: "JavaScript", level: t("specialist") },
                { name: "HTML & CSS", level: t("specialist") },
            ],
        },
        {
            category: t("architecture.title"),
            description: t("architecture.subtitle"),
            skills: [
                { name: "Micro-frontends", level: t("specialist") },
                { name: "Module Federation", level: t("specialist") },
                { name: "Design Systems", level: t("advanced") },
                { name: "Monorepos", level: t("advanced") },
            ],
        },
        {
            category: t("performance.title"),
            description: t("performance.subtitle"),
            skills: [
                { name: "Vite", level: t("specialist") },
                { name: "Jest", level: t("advanced") },
                { name: "Storybook", level: t("advanced") },
                { name: "Web Vitals / LCP", level: t("advanced") },
                { name: "SEO técnico", level: t("advanced") },
                { name: t("performance.accessibility"), level: t("advanced") },
            ],
        },
        {
            category: t("data.title"),
            description: t("data.subtitle"),
            skills: [
                { name: "GraphQL", level: t("advanced") },
                { name: "REST", level: t("specialist") },
                { name: "Redux", level: t("advanced") },
                { name: "React Query", level: t("advanced") },
            ],
        },
        {
            category: t("security.title"),
            description: t("security.subtitle"),
            skills: [
                { name: t("security.authentication"), level: t("specialist") },
                { name: t("security.fraud"), level: t("advanced") },
                { name: "SDKs de analytics", level: t("advanced") },
            ],
        },
        {
            category: t("design.title"),
            description: t("design.subtitle"),
            skills: [
                { name: "Figma", level: t("specialist") },
                { name: "UI/UX", level: t("specialist") },
                { name: "Wireframing", level: t("advanced") },
                { name: "Branding", level: t("intermediary") },
            ],
        },
    ];

    return (
        <section id="stack" aria-labelledby="skills-heading" className="w-full scroll-mt-10 bg-zinc-50 py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title={t("title")} subtitle={t("subtitle")} headingId="skills-heading" />

                <ul aria-label={t("skillsGroupsLabel")} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILLS.map((group) => (
                        <li key={group.category}>
                            <SkillCard group={group} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

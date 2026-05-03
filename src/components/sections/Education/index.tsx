import { Layers, User } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Header } from "../../layout/Header";
import { EducationCard } from "../../ui/EducationCard";

const formations = [
    {
        id: 1,
        icon: Layers,
        badge: "architecture.title",
        title: "architecture.course",
        institution: "PUC - MG",
        period: "2024 – 2025",
        description: "architecture.description",
    },
    {
        id: 2,
        icon: Layers,
        badge: "engineer.title",
        title: "engineer.course",
        institution: "PUC - MG",
        period: "2022 – 2023",
        description: "engineer.description",
    },
    {
        id: 3,
        icon: User,
        badge: "design.title",
        title: "design.course",
        institution: "Universidade Federal de Juiz de Fora",
        period: "2009 – 2011",
        description: "design.description",
    },
];

export const EducationSection = async () => {
    const t = await getTranslations("education");

    return (
        <section
            id="education"
            aria-labelledby="education-heading"
            className="w-full scroll-mt-10 bg-white py-12 sm:scroll-mt-14"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title={t("title")} subtitle={t("subtitle")} headingId="education-heading" />

                <ol aria-label={t("formationsListLabel")} className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {formations.map((item) => (
                        <li key={item.id}>
                            <EducationCard entry={item} />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

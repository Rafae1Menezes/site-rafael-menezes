import { EducationCard } from "@/app/_components/EducationCard";
import { Header } from "@/app/_components/Header";
import { EDUCATION } from "@/content/education";

export const EducationSection = () => {
    return (
        <section id="education" className="relative w-full scroll-mt-14 overflow-hidden bg-white py-16 sm:py-20">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Acadêmico" subtitle="Formação" />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {EDUCATION.map((entry) => (
                        <EducationCard key={entry.id} entry={entry} />
                    ))}
                </div>
            </div>
        </section>
    );
};

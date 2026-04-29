import { Layers, User } from "lucide-react";
import { Header } from "../../layout/Header";
import { EducationCard } from "../../ui/EducationCard";

const formations = [
    {
        id: 1,
        icon: Layers,
        badge: "Pós-graduação",
        title: "Arquitetura de Software Distribuído",
        institution: "PUC - MG",
        period: "20XX – 20XX",
        description: "Foco em sistemas distribuídos, escalabilidade, microsserviços e boas práticas de arquitetura.",
        institutionColored: false,
    },
    {
        id: 2,
        icon: Layers,
        badge: "Pós-graduação",
        title: "Engenharia de Software",
        institution: "PUC - MG",
        period: "20XX – 20XX",
        description: "Ênfase em processos de desenvolvimento, qualidade de software e métodos ágeis.",
        institutionColored: false,
    },
    {
        id: 3,
        icon: User,
        badge: "Bacharelado",
        title: "Arte e Design",
        institution: "Universidade Federal de Juiz de Fora",
        period: "20XX – 20XX",
        description: "Formação em design visual, criatividade e comunicação visual aplicada a projetos digitais.",
        institutionColored: true,
    },
];

export function EducationSection() {
    return (
        <section id="articles" className="w-full scroll-mt-10 bg-[#FEFEFE] py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Acadêmico" subtitle="Formação" />

                {/* Cards grid */}
                <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {formations.map((item) => (
                        <EducationCard key={item.id} entry={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

import { GraduationCap, Layers, MapPin, Calendar, ArrowRight, User, CheckCircle2 } from "lucide-react";
import { Header } from "../../layout/Header";
import { Tag } from "../../ui/Tag";

const formations = [
    {
        icon: Layers,
        badge: "Pós-graduação",
        title: "Arquitetura de Software Distribuído",
        institution: "PUC - MG",
        period: "20XX – 20XX",
        description: "Foco em sistemas distribuídos, escalabilidade, microsserviços e boas práticas de arquitetura.",
        institutionColored: false,
    },
    {
        icon: Layers,
        badge: "Pós-graduação",
        title: "Engenharia de Software",
        institution: "PUC - MG",
        period: "20XX – 20XX",
        description: "Ênfase em processos de desenvolvimento, qualidade de software e métodos ágeis.",
        institutionColored: false,
    },
    {
        icon: User,
        badge: "Bacharelado",
        title: "Arte e Design",
        institution: "Universidade Federal de Juiz de Fora",
        period: "20XX – 20XX",
        description: "Formação em design visual, criatividade e comunicação visual aplicada a projetos digitais.",
        institutionColored: true,
    },
];

const complementarSkills = [
    "Desenvolvimento Full Stack",
    "UI/UX Design",
    "Cloud Computing (AWS)",
    "DevOps e CI/CD",
    "Boas práticas de código",
    "Metodologias Ágeis",
    "Metodologias Ágeis",
    "Metodologias Ágeis",
];

export function EducationSection() {
    return (
        <section id="articles" className="w-full scroll-mt-10 bg-[#FEFEFE] py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Acadêmico" subtitle="Formação" />

                {/* Cards grid */}
                <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {formations.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative flex flex-col rounded-2xl border border-[#e2ede8] bg-white p-6 shadow-sm transition-all duration-300"
                            >
                                {/* Bottom green accent bar */}
                                <div className="absolute right-6 bottom-0 left-6 h-[3px] rounded-t-full bg-[#1a5c3a] opacity-0 transition-opacity duration-300" />

                                {/* Top row: icon + badge */}
                                <div className="mb-5 flex items-start justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf5ef]">
                                        <Icon size={20} className="text-[#1a5c3a]" />
                                    </div>
                                    <Tag>{item.badge}</Tag>
                                </div>

                                {/* Title */}
                                <h3 className="mb-4 text-lg leading-snug font-bold text-[#0d2b1e]">{item.title}</h3>

                                {/* Meta */}
                                <div className="mb-4 space-y-1.5">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={13} className="shrink-0 text-[#1a5c3a]" />
                                        <span
                                            className={`text-sm font-medium ${
                                                item.institutionColored ? "text-[#1a5c3a]" : "text-[#3a5548]"
                                            }`}
                                        >
                                            {item.institution}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={13} className="shrink-0 text-[#1a5c3a]" />
                                        <span className="text-sm text-[#6b8a7a]">{item.period}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#6b8a7a]">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

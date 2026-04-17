import { CareerCard } from "@/app/_components/CareerCard";
import { Header } from "@/app/_components/Header";

type CareerEntry = {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
    current?: boolean;
};

const CAREER: CareerEntry[] = [
    {
        id: 1,
        company: "NTT DATA",
        role: "Tech Lead",
        period: "dez 2025 – presente · 5 meses",
        description:
            "Decisões arquiteturais, padrões frontend, governança de qualidade e mentoria. Gestão de riscos técnicos e colaboração direta com cliente.",
        tags: ["Liderança técnica", "Mentoria"],
        current: true,
    },
    {
        id: 2,
        company: "C6 Bank · via NTT DATA",
        role: "Senior Frontend Engineer",
        period: "jul 2024 – presente · 1 ano 10 meses",
        description:
            "Time de Prevenção de Fraudes. Autenticação crítica, SDKs internos de analytics e reconhecimento facial, refatorações do sistema de login.",
        tags: ["TypeScript", "React", "Next.js", "Vite", "Security"],
    },
    {
        id: 3,
        company: "XP Inc. · via NTT DATA",
        role: "Senior Frontend Engineer",
        period: "out 2023 – jul 2024 · 10 meses",
        description:
            "Aplicações web para gestão de clientes em cartão de crédito e banco digital. Componentes compartilhados, micro-frontends e qualidade de entrega.",
        tags: ["React", "Module Federation", "TypeScript", "Gatsby"],
    },
    {
        id: 4,
        company: "Studio Sol · PalcoMP3",
        role: "Frontend Engineer",
        period: "mar 2022 – set 2023 · 1 ano 7 meses",
        description:
            "Plataforma musical com 3M usuários mensais. Features de alto desempenho, design system, Storybook, SEO, acessibilidade e testes automatizados.",
        tags: ["React", "Next.js", "GraphQL", "Redux", "Jest"],
    },
    {
        id: 5,
        company: "Freelance",
        role: "Web Developer",
        period: "2020 – fev 2022 · 2 anos",
        description: "Desenvolvimento e manutenção de sites e aplicativos web para clientes diversos.",
        tags: ["React", "Next.js", "TypeScript", "WordPress"],
    },
    {
        id: 6,
        company: "Corpo de Bombeiros MG",
        role: "Bombeiro Militar",
        period: "mar 2017 – fev 2022 · 5 anos",
        description:
            "Atendimento de ocorrências de resgate clínico e traumático, salvamento e socorro. Atuação no operacional.",
        tags: ["Resgate", "Trabalho sob pressão"],
    },
    {
        id: 7,
        company: "Freelance",
        role: "Designer",
        period: "2009 – fev 2022 · 13 anos",
        description: "UI/UX para web e mobile, identidade visual, wireframes e concept design.",
        tags: ["Figma", "UI/UX", "Branding"],
    },
    {
        id: 8,
        company: "Faculdades Doctum",
        role: "Desenvolvedor Fullstack",
        period: "2007 – 2008 · 1 ano",
        description: "Sistema de gestão acadêmica ADX para 15 mil alunos em 14 unidades. Sites, portais e intranet.",
        tags: ["PHP", "MySQL", "JavaScript", "Drupal"],
    },
];

export const Career = () => {
    return (
        <section id="career" className="relative w-full scroll-mt-14 overflow-hidden bg-zinc-50 py-12 pb-[130px]">
            {/* Dot grid background */}
            <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full select-none">
                <defs>
                    <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" className="fill-zinc-300" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
            </svg>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Trajetória" subtitle="Carreira" />

                {/* ── MOBILE timeline: linha à esquerda, cards à direita ── */}
                <div className="relative md:hidden">
                    <div className="absolute top-0 bottom-0 left-3 w-px bg-zinc-200" />

                    <div className="flex flex-col gap-6 pl-10">
                        {CAREER.map((entry) => (
                            <div key={entry.id} className="relative">
                                {/* dot */}
                                <div className="absolute top-5 -left-[32px] z-10 h-2.5 w-2.5 rounded-full border-2 border-[#7FA885] bg-[#B9F8BD]" />
                                <CareerCard entry={entry} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── DESKTOP timeline: alternado esquerda/direita ── */}
                <div className="relative mx-auto hidden max-w-4xl md:block">
                    <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-zinc-200" />

                    {CAREER.map((entry, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={entry.id}
                                className={`mb-[-70px] flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div
                                    className={`flex w-[calc(50%-28px)] flex-shrink-0 py-4 ${isLeft ? "justify-end" : "justify-start"}`}
                                >
                                    <CareerCard entry={entry} />
                                </div>
                                <div className="flex w-14 flex-shrink-0 justify-center">
                                    <div className="z-10 h-2.5 w-2.5 rounded-full border-2 border-[#7FA885] bg-[#B9F8BD]" />
                                </div>
                                <div className="w-[calc(50%-28px)] flex-shrink-0" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

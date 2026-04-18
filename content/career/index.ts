import { Career } from "@/app/types/career";

export const CAREER: Career[] = [
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

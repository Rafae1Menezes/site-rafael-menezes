import { SkillGroup } from "@/src/types/skill";

export const SKILLS: SkillGroup[] = [
    {
        category: "Core",
        description: "Tecnologias que uso diariamente há anos",
        skills: [
            { name: "TypeScript", level: "Especialista" },
            { name: "React", level: "Especialista" },
            { name: "Next.js", level: "Especialista" },
            { name: "JavaScript", level: "Especialista" },
            { name: "HTML & CSS", level: "Especialista" },
        ],
    },
    {
        category: "Arquitetura",
        description: "Padrões e decisões de escala",
        skills: [
            { name: "Micro-frontends", level: "Especialista" },
            { name: "Module Federation", level: "Especialista" },
            { name: "Design Systems", level: "Avançado" },
            { name: "Monorepos", level: "Avançado" },
        ],
    },
    {
        category: "Performance & Qualidade",
        description: "Entrega confiável e rápida",
        skills: [
            { name: "Vite", level: "Especialista" },
            { name: "Jest", level: "Avançado" },
            { name: "Storybook", level: "Avançado" },
            { name: "Web Vitals / LCP", level: "Avançado" },
            { name: "SEO técnico", level: "Avançado" },
            { name: "Acessibilidade", level: "Avançado" },
        ],
    },
    {
        category: "Dados & APIs",
        description: "Integração e estado",
        skills: [
            { name: "GraphQL", level: "Avançado" },
            { name: "REST", level: "Especialista" },
            { name: "Redux", level: "Avançado" },
            { name: "React Query", level: "Avançado" },
        ],
    },
    {
        category: "Segurança",
        description: "Experiência em plataformas críticas",
        skills: [
            { name: "Autenticação & Auth flows", level: "Especialista" },
            { name: "Prevenção de fraudes", level: "Avançado" },
            { name: "SDKs de analytics", level: "Avançado" },
        ],
    },
    {
        category: "Design & Produto",
        description: "Onde o frontend encontra o design",
        skills: [
            { name: "Figma", level: "Especialista" },
            { name: "UI/UX", level: "Especialista" },
            { name: "Wireframing", level: "Avançado" },
            { name: "Branding", level: "Intermediário" },
        ],
    },
];

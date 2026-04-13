import { StackCard } from "@/app/_components/StackCard";

type SkillLevel = "Especialista" | "Avançado" | "Intermediário";

type Skill = {
    name: string;
    level: SkillLevel;
};

type SkillGroup = {
    category: string;
    description: string;
    skills: Skill[];
};

const STACK: SkillGroup[] = [
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

export const Stack = () => {
    return (
        <section id="stack" className="w-full bg-zinc-50  py-24 relative overflow-hidden  scroll-mt-14">
            <svg aria-hidden className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-50">
                <defs>
                    <pattern id="dot-grid-stack" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" className="fill-zinc-300 " />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid-stack)" />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12">
                    <p className="text-xs font-medium tracking-widest uppercase text-zinc-400  mb-2">Tecnologias</p>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 ">Stack</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {STACK.map((group) => (
                        <StackCard key={group.category} group={group} />
                    ))}
                </div>
            </div>
        </section>
    );
};

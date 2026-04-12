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

const levelConfig: Record<SkillLevel, { bar: string; label: string; width: string }> = {
  Especialista:   { bar: "bg-green-400",  label: "text-green-700 bg-green-50 dark:bg-green-950 dark:text-green-300",   width: "w-full" },
  Avançado:       { bar: "bg-zinc-400",   label: "text-zinc-600 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400",       width: "w-3/4" },
  Intermediário:  { bar: "bg-zinc-300",   label: "text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 dark:text-zinc-500",     width: "w-1/2" },
};

const SkillRow = ({ skill }: { skill: Skill }) => {
  const config = levelConfig[skill.level];
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <span className="text-[13px] text-zinc-700 dark:text-zinc-300">{skill.name}</span>
      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex-shrink-0 ${config.label}`}>
        {skill.level}
      </span>
    </div>
  );
};

const StackCard = ({ group }: { group: SkillGroup }) => (
  <div className="
    group bg-white dark:bg-zinc-900
    border border-zinc-200 dark:border-zinc-800
    rounded-2xl p-5 w-full
    transition-all duration-300 ease-out
    hover:-translate-y-1.5
    hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]
    dark:hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_2px_8px_-2px_rgba(0,0,0,0.2)]
  ">
    <p className="text-[13px] font-bold text-zinc-900 dark:text-zinc-50 mb-0.5">
      {group.category}
    </p>
    <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mb-3">
      {group.description}
    </p>
    <div>
      {group.skills.map((skill) => (
        <SkillRow key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

export const Stack = () => {
  return (
    <section className="w-full bg-zinc-50 dark:bg-zinc-950 py-24 relative overflow-hidden">

      <svg aria-hidden className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-50">
        <defs>
          <pattern id="dot-grid-stack" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-zinc-300 dark:fill-zinc-700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid-stack)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">
            Tecnologias
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Stack
          </h2>
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
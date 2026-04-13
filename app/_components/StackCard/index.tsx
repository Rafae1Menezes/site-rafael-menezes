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

const levelConfig: Record<SkillLevel, { bar: string; label: string; width: string }> = {
    Especialista: { bar: "bg-green-400", label: "text-green-700 bg-green-50", width: "w-full" },
    Avançado: { bar: "bg-zinc-400", label: "text-zinc-600 bg-zinc-100", width: "w-3/4" },
    Intermediário: { bar: "bg-zinc-300", label: "text-zinc-400 bg-zinc-50", width: "w-1/2" },
};

const SkillRow = ({ skill }: { skill: Skill }) => {
    const config = levelConfig[skill.level];
    return (
        <div className="flex items-center justify-between gap-3 py-2 border-b border-zinc-100 last:border-0">
            <span className="text-[13px] text-zinc-700">{skill.name}</span>
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex-shrink-0 ${config.label}`}>{skill.level}</span>
        </div>
    );
};

export const StackCard = ({ group }: { group: SkillGroup }) => (
    <div
        className="
    group bg-white
    border border-zinc-200 
    rounded-2xl p-5 w-full
    transition-all duration-300 ease-out
    hover:-translate-y-1.5
    hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]
  "
    >
        <p className="text-[13px] font-bold text-zinc-900  mb-0.5">{group.category}</p>
        <p className="text-[11px] text-zinc-400  mb-3">{group.description}</p>
        <div>
            {group.skills.map((skill) => (
                <SkillRow key={skill.name} skill={skill} />
            ))}
        </div>
    </div>
);

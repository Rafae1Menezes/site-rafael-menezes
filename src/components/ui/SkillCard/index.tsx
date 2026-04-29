import { Color } from "@/content/colors";
import { Tag } from "../Tag";

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

const levelColorMap: Record<SkillLevel, Color> = {
    Especialista: "green",
    Avançado: "zinc",
    Intermediário: "default",
};

const SkillRow = ({ skill }: { skill: Skill }) => {
    return (
        <div className="flex items-center justify-between gap-3 border-b border-zinc-100 py-2 last:border-0">
            <span className="text-[13px] text-zinc-700">{skill.name}</span>

            <Tag size="xs" color={levelColorMap[skill.level]}>
                {skill.level}
            </Tag>
        </div>
    );
};

export const SkillCard = ({ group }: { group: SkillGroup }) => (
    <div className="group elevation1 w-full shadow-md">
        {/* Header */}
        <p className="mb-0.5 text-[13px] font-bold text-zinc-900">{group.category}</p>

        <p className="mb-3 text-[11px] text-zinc-400">{group.description}</p>

        {/* Skills */}
        <div>
            {group.skills.map((skill) => (
                <SkillRow key={skill.name} skill={skill} />
            ))}
        </div>
    </div>
);

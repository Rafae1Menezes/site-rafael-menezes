import { Color } from "@/content/colors";
import { Skill, SkillGroup } from "@/src/types/skill";
import { Card } from "../Card";
import { Tag } from "../Tag";

const levelColorMap: Record<string, Color> = {
    Especialista: "green",
    Specialist: "green",
    Avançado: "default",
    Advanced: "default",
    Intermediário: "default",
    Intermediary: "default",
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
    <Card classNames="transition-all duration-300 ease-out hover:-translate-y-1.5">
        {/* Header */}
        <p className="mb-0.5 text-[13px] font-bold text-zinc-900">{group.category}</p>

        <p className="mb-3 text-[11px] text-zinc-500">{group.description}</p>

        {/* Skills */}
        <div>
            {group.skills.map((skill) => (
                <SkillRow key={skill.name} skill={skill} />
            ))}
        </div>
    </Card>
);

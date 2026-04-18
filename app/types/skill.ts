export type SkillLevel = "Especialista" | "Avançado" | "Intermediário";

export type Skill = {
    name: string;
    level: SkillLevel;
};

export type SkillGroup = {
    category: string;
    description: string;
    skills: Skill[];
};

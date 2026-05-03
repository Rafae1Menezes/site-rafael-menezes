export type Skill = {
    name: string;
    level: string;
};

export type SkillGroup = {
    category: string;
    description: string;
    skills: Skill[];
};

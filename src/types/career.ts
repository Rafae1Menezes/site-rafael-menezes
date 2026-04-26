export type Career = {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
    current?: boolean;
};

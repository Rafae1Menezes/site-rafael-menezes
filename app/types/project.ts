export type ProjectType =
    | "Fintech"
    | "Design System"
    | "Security"
    | "Tooling"
    | "Architecture"
    | "Optimization"
    | "DevOps"
    | "Product";

export type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    type: ProjectType;
    year: string;
    slug: string;
    content: string;
};

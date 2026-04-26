export type Article = {
    id: number;
    title: string;
    tag: string;
    year: string;
    readTime: string;
    slug: string;
    content: string;
};

export type ArticleTag = "Architecture" | "Performance" | "React" | "Security" | "DX";

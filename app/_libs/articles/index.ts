import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticles() {
    const files = fs.readdirSync(articlesDirectory);

    return files.map((fileName) => {
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return data;
    });
}

export async function getArticleBySlug(slug: string): Promise<{
    title: string;
    year: string;
    description: string;
    slug: string;
    content: any;
    tag: string;
    readTime: string;
}> {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
        title: data.title,
        year: data.year,
        tag: data.tag,
        description: data.description,
        slug: data.slug,
        readTime: data.readTime,
        content: content,
    };
}

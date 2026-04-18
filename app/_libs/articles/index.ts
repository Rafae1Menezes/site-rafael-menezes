import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "@/app/types/article";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticles(): Array<Article> {
    const files = fs.readdirSync(articlesDirectory);

    return files.map((fileName) => {
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return data as Article;
    });
}

export async function getArticleBySlug(slug: string): Promise<Article> {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
        id: data.id,
        title: data.title,
        year: data.year,
        tag: data.tag,
        slug: data.slug,
        readTime: data.readTime,
        content: content,
    };
}

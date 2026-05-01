import { Project } from "@/src/types/project";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const projectDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Array<Project> {
    const files = fs.readdirSync(projectDirectory);

    return files.map((fileName) => {
        const fullPath = path.join(projectDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return {
            id: data.id,
            title: data.title,
            description: data.description,
            tags: data.tags.split(","),
            type: data.type,
            year: data.year,
            slug: data.slug,
            content: "",
        };
    });
}

export async function getProjectBySlug(slug: string): Promise<Project> {
    const fullPath = path.join(projectDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
        id: data.id,
        title: data.title,
        description: data.description,
        tags: data.tags.split(","),
        type: data.type,
        year: data.year,
        slug: data.slug,
        content,
    };
}

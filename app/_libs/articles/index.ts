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

export function getArticleBySlug(slug: string): { 
  title: string,
date: string,
description: string
slug: string
content:string } {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    slug: data.slug,
    content,
  };
}